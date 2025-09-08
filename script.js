// Fade in body
      document.addEventListener("DOMContentLoaded", function () {
        document.body.style.opacity = "0";
        setTimeout(() => {
          document.body.style.transition = "opacity 0.5s ease";
          document.body.style.opacity = "1";
        }, 100);
      });

      const getStartedBtn = document.querySelector(".get-started-btn");

      getStartedBtn.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px) scale(1.02)";
      });

      getStartedBtn.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
      });

      // Touch feedback for mobile
      getStartedBtn.addEventListener("touchstart", function () {
        this.style.transform = "translateY(-1px) scale(0.98)";
      });

      getStartedBtn.addEventListener("touchend", function () {
        setTimeout(() => {
          this.style.transform = "translateY(0) scale(1)";
        }, 150);
      });

      // Main navigation function - changed to navigate directly to preferences.html
      function startApp() {
        getStartedBtn.style.transform = "translateY(0) scale(0.95)";
        // Directly go to preferences page (remove modal step)
        setTimeout(() => {
          window.location.href = "preferences.html";
        }, 150);
      }

      // (Optional) Keep showPreferencesPreview if you want to reuse modal later.
      // Preview modal left in place but not called by startApp() anymore.
      function showPreferencesPreview() {
        const preview = document.createElement("div");
        preview.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s ease;
        `;

        preview.innerHTML = `
          <div style="
            background: linear-gradient(135deg, #667eea, #764ba2);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            max-width: 400px;
            margin: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          ">
            <h2 style="color: white; margin-bottom: 20px; font-size: 1.8rem;">Ready to Start!</h2>
            <p style="color: rgba(255, 255, 255, 0.9); margin-bottom: 30px; line-height: 1.6;">
              Next, we'll set up your preferences and fitness goals to personalize your experience.
            </p>
            <button onclick="closePreview()" style="
              background: linear-gradient(135deg, #ff6b6b, #ee5a24);
              color: white;
              border: none;
              padding: 12px 30px;
              border-radius: 25px;
              font-weight: 600;
              cursor: pointer;
              transition: transform 0.2s ease;
            " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
              Continue
            </button>
          </div>
        `;

        document.body.appendChild(preview);

        setTimeout(() => {
          preview.style.opacity = "1";
        }, 100);

        window.closePreview = function () {
          preview.style.opacity = "0";
          setTimeout(() => {
            document.body.removeChild(preview);
          }, 300);
        };

        // ESC key closes modal
        document.addEventListener("keydown", function escHandler(e) {
          if (e.key === "Escape") {
            closePreview();
            document.removeEventListener("keydown", escHandler);
          }
        });
      }
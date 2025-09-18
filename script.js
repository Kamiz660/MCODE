// Elements
const SignInBtn   = document.getElementById("sign-in");
const modal       = document.getElementById("modal");
const overlay     = document.getElementById("overlay");
const CloseBtn1   = document.getElementById("CloseSign-In");
const themeToggle   = document.getElementById("lightmode");
const highlight   = document.querySelector(".toggle-highlight-1");
const signbtntoggle = document.querySelectorAll(".signup-in");
const signinformhide = document.querySelectorAll("#FullName, #email, #confirmPassword");

// Theme Switcher
themeToggle.addEventListener("click", () => {
  const theme = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", theme === "light" ? "dark" : "light");
});

// Modal Handlers
SignInBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});

CloseBtn1.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});

// Toggle Sign In / Sign Up
signbtntoggle.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    highlight.classList.toggle("highlight-right", index === 1);

    signinformhide.forEach(el => {
      el.classList.toggle("hidden2", index === 1);
    });
  });
});

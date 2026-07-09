(function () {
  var html = document.documentElement;
  var toggles = document.querySelectorAll(".theme-toggle");

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme") || "system";
    } catch (error) {
      return "system";
    }
  }

  function storeTheme(theme) {
    try {
      if (theme === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", theme);
      }
    } catch (error) {
      return;
    }
  }

  function cycleTheme() {
    var current = getStoredTheme();
    var next = current === "system" ? "light" : current === "light" ? "dark" : "system";

    if (next === "system") {
      html.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", next);
    }

    storeTheme(next);
  }

  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", cycleTheme);
  }

  var menuToggle = document.getElementById("menu-toggle");
  var navWrapper = document.getElementById("nav-wrapper");

  if (!menuToggle || !navWrapper) {
    return;
  }

  menuToggle.addEventListener("click", function () {
    var isOpen = navWrapper.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", function (event) {
    var isClickInsideNav = navWrapper.contains(event.target);
    var isClickOnToggle = menuToggle.contains(event.target);
    var isMenuOpen = navWrapper.classList.contains("nav-open");

    if (isMenuOpen && !isClickInsideNav && !isClickOnToggle) {
      navWrapper.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
})();

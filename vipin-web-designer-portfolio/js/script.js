document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const backTop = document.getElementById("backTop");
  const year = document.getElementById("year");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id], header[id]");

  year.textContent = new Date().getFullYear();

  function handleScroll() {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
      backTop.classList.add("show");
    } else {
      nav.classList.remove("scrolled");
      backTop.classList.remove("show");
    }

    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Close mobile Bootstrap menu after clicking a navigation link.
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navbarMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Demo contact form.
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! Please connect this form to your email service or backend.");
    event.target.reset();
  });
});

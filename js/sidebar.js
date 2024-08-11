document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar ul li a, .suporte a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  const header = document.querySelector(".header");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
    main.classList.toggle("sidebar-visible");
  });

  
  const handleHeaderVisibility = () => {
    if (window.innerWidth > 900) {
      header.classList.remove("hidden");
    } else {
      header.classList.add("hidden");
    }
  };

  handleHeaderVisibility();

  window.addEventListener("resize", handleHeaderVisibility);
});

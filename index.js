const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav__links");
  const navIndividualLinks = document.querySelectorAll(".nav__links li");

  //   Toggle Nac

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    //   Animate Links

    navIndividualLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

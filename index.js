// code for faq section accordion

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const toggleIcon = this.querySelector(".toggle-icon");
      const content = accordionItem.querySelector(".accordion-content");

      const isActive = content.classList.contains("active");

      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.classList.remove("active");
      });

      document.querySelectorAll(".toggle-icon").forEach((icon) => {
        icon.classList.remove("active");
      });

      document.querySelectorAll(".accordion-header").forEach((header) => {
        header.classList.remove("active");
      });

      if (!isActive) {
        content.classList.add("active");
        toggleIcon.classList.add("active");
        this.classList.add("active");
      }
    });
  });
});

// code for our team section slider

$(".slider-track").slick({
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:
    '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 12H22" stroke="rgba(255, 255, 255, 1)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 5L22 12L15 19" stroke="rgba(255, 255, 255, 1)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 12L2 12" stroke="rgba(255, 255, 255, 1)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 19L2 12L9 5" stroke="rgba(255, 255, 255, 1)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// code for side nav

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

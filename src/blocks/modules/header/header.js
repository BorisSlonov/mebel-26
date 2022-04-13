"use strict";



//burger
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger"),
    overflowHidden = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
});

// arrow mooving

$(document).ready(function () {
  $(".header__link_submenu_wrap").on("click", function () {
    $(".header__link_submenu_wrap").removeClass("active");

    $(this).toggleClass("active");

    if ($(".active + .submenu").is(":visible")) {
      $(".active + .submenu").hide("slow");
    } else {
      $(".submenu").hide("slow");
      $(".active + .submenu").show("slow");
    }
  });
});

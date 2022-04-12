"use strict";
import $ from "jquery";

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
    $(this).find(".submenu__arrow-wrap svg").css({ transform: "rotate(0deg)" });

    if ($(".submenu").is(":visible")) {
      $(".submenu").hide("slow");
      $(".submenu__arrow-wrap svg").css({ transform: " rotate(180deg)" });
      console.log("click1");
    } else {
      $(".submenu").show("slow");
      console.log("click2");
    }
  });
});

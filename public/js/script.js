var menuMobile = document.getElementById("testmobile");
import { auth, storage } from "firebase";
import { initializeApp } from "./firebase-app.js";
import admin from "firebase-admin";

import { auth as _auth } from "firebaseui";

import serviceAccount from "portfolio-d55bc-firebase-adminsdk-h98w6-86d99c8552.json";

import firebase from "firebase";
require("firebase/auth");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

function openNav() {
  $(".nav2").slideDown("slow", function () {
    $(".fa-bars").addClass("display-none");
    $(".nav2").css("display", "flex");
    $(".fa-times").removeClass("display-none");
    $(".fa-times").addClass("display-croix");
  });
}

function closeNav() {
  $(".nav2").slideUp("slow", function () {
    $(".nav2").css("display", "none");
    $(".fa-times").removeClass("display-croix");
    $(".fa-times").addClass("display-none");
    $(".fa-bars").removeClass("display-none");
    $(".fa-bars").addClass("display-block");
  });
}

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true, // Show next and prev buttons
    autoplay: true,
    slideSpeed: 30,
    paginationSpeed: 90,

    loop: true,
    autoplayTimeout: 2500,
    items: 1,
  });
});

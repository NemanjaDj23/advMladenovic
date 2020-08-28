const navIcon = document.querySelector(".nav-icon");
const navBtn = document.querySelector(".navigation-button");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
    navIcon.classList.toggle("nav-icon-open");
    navigation.classList.toggle("navigation-active");
    if (navigation.classList.contains("navigation-active")) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
});

let navLinks = document.querySelectorAll(".navigation ul li a");

window.addEventListener("load", function () {
    for (let i = 0; i <= navLinks.length - 1; i++) {
        if (navLinks[i].href === location.href) {
            navLinks[i].setAttribute("class", "nav-current");
        }
    }
});

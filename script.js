function openMobileMenu() {
    hamburgerIcon.style.display = "none";
    mobileMenu.style.setProperty("display", "flex");
    shadow.style.display = "block";
}

function closeMobileMenu() {
    mobileMenu.style.setProperty("display","none");
    hamburgerIcon.style.display = "block";
    shadow.style.display = "none";
}

var hamburgerIcon = document.getElementById("hamburger-icon");
var mobileMenuCloseIcon = document.getElementById("mobile-menu-close");
var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
var shadow = document.getElementsByClassName("shadow")[0];


if (window.outerWidth <= 375) {
    hamburgerIcon.addEventListener("click", openMobileMenu);
    mobileMenuCloseIcon.addEventListener("click",closeMobileMenu);
}

addEventListener("resize", (event) => {
    if (window.outerWidth < 375)
        hamburgerIcon.addEventListener("click", openMobileMenu);
        mobileMenuCloseIcon.addEventListener("click",closeMobileMenu);
});

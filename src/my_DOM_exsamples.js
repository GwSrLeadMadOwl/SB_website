//PRELOADER
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("hidden");
});

// @ts-ignore
new fullpage("#fullPage", {
    licenseKey: '0FEC82E1-4B7C4BDA-A2434803-C9F6DC93',
    autoScrolling: true,
    scrollOverflow: false,
    navigation: true,
    navigationPosition: "left",
    css3: true,
    lockAnchors: false,
    menu: '#myMenu',
    anchors: ['home', 'video', 'art', 'blogs', 'social', 'subscribe']
});

//HAMBURGER MENU
const icon = document.querySelector(".hamburger");
const hm = document.querySelector(".hiddenMenu");
const desk = document.querySelector(".desktopTrigger");

icon.addEventListener("click", () => {
    hm.classList.toggle("show");
    icon.querySelectorAll(":scope > .lines").forEach(item => item.classList.toggle("X"));
    desk.classList.toggle("block");
});

desk.addEventListener("click", () => {
    hm.classList.remove("show");
    icon.querySelectorAll(":scope > .lines").forEach(item => item.classList.remove("X"));
    desk.classList.remove("block");
});
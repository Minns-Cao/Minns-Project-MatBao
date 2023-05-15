// ================Choose Language===================
let languageNow = document.querySelector(".languageNow");
let languageList = document.querySelector(".languageList");
let VN = document.querySelector(".VN");
let EN = document.querySelector(".VN");

//show languageList
languageNow.addEventListener("click", function () {
    languageList.classList.toggle("is-show-languageList");
});

let dataLanguage = [
    {Language: "Vietnames", flagUrl: "./assets/img/vietnam-flag-png-large.png"},
    {Language: "English", flagUrl: "./assets/img/united-kingdom-flag-png-large.png"}
];

//change language


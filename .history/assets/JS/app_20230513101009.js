// ================Choose Language===================
let languageNow = document.querySelector(".languageNow");
let languageList = document.querySelector(".languageList");

//show language
languageNow.addEventListener("click", function () {
    languageList.classList.toggle("is-show-languageList");
});

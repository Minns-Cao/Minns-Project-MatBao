===================================
let languageNow = document.querySelector(".languageNow");
let languageList = document.querySelector(".languageList");

languageNow.addEventListener("click", function () {
    languageList.classList.toggle("is-show-languageList");
});
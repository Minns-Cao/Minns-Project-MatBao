// ================Choose Language===================
let languageNow = document.querySelector(".languageNow");
let languageList = document.querySelector(".languageList");

//show lan
languageNow.addEventListener("click", function () {
    languageList.classList.toggle("is-show-languageList");
});

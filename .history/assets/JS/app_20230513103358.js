// ================Choose Language===================
let languageNow = document.querySelector(".languageNow");
let languageList = document.querySelector(".languageList");
let countryItem = document.querySelector(".countryItem");
let VN = document.querySelector(".VN");
let EN = document.querySelector(".EN");

//show languageList
languageNow.addEventListener("click", function () {
    languageList.classList.toggle("is-show-languageList");
});

let dataLanguage = [
    {Language: "Vietnames", flagUrl: "./assets/img/vietnam-flag-png-large.png"},
    {Language: "English", flagUrl: "./assets/img/united-kingdom-flag-png-large.png"}
];

//change language
languageList.addEventListener("click", function() {
    elm = event.target;
    console.log(elm);
    if(elm.matches('li.countryItem') ){
        console.log("YES");
        if(elm.matches('VN')) {
            array.forEach(element => {
                console.log(dataLanguage[0]);
            });
        }
    }else {
        console.log("NO");
    }
});


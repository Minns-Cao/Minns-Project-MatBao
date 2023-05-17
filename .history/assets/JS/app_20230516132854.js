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
    {
        ID: "VN",
        language: "Vietnames",
        flagUrl: "./assets/img/vietnam-flag-png-large.png",
    },
    {
        ID: "EN",
        language: "English",
        flagUrl: "./assets/img/united-kingdom-flag-png-large.png",
    },
];

//change language
languageList.addEventListener("click", function () {
    let flagUrl;
    let language;
    elm = event.target;
    if (elm.matches("li.countryItem")) {
        if (elm.matches("li.VN")) {
            dataLanguage.forEach((item) => {
                if (item.ID === "VN") {
                    flagUrl = item.flagUrl;
                    language = item.language;
                }
            });
        } else if (elm.matches("li.EN")) {
            dataLanguage.forEach((item) => {
                if (item.ID === "EN") {
                    flagUrl = item.flagUrl;
                    language = item.language;
                }
            });
        }
    } else {
        elm = elm.parentNode;
        if (elm.matches("li.VN")) {
            dataLanguage.forEach((item) => {
                if (item.ID === "VN") {
                    flagUrl = item.flagUrl;
                    language = item.language;
                }
            });
        } else if (elm.matches("li.EN")) {
            dataLanguage.forEach((item) => {
                if (item.ID === "EN") {
                    flagUrl = item.flagUrl;
                    language = item.language;
                }
            });
        }
    }

    let countryFlag = document.querySelector(".chooseLanguage .countryFlag");
    let nameCountry = document.querySelector(".chooseLanguage .nameCountry");
    countryFlag.setAttribute("src", flagUrl);
    nameCountry.textContent = language;
    languageList.classList.toggle("is-show-languageList");
});

// ================Active Mega Menu===================
let menuItem = document.querySelectorAll("header .menu .menu-item");
console.log(menuItem);

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        // duyệt qua toàn bộ và xoá active
        menuItem.forEach((item2) => {
            let removeSubMenu = item2.querySelector(".sub-menu");
            removeSubMenu.classList.remove("active-sub-menu");
            let removeTitle = item2.querySelector(".title");
            removeTitle.style.borderBottom = "none";
        });

        // thêm active vào phần tử vừa click
        target = event.currentTarget;
        let subMenu = target.querySelector(".sub-menu");
        subMenu.classList.toggle("active-sub-menu");
        let title = target.querySelector(".title");
        title.style.borderBottom = "2px solid red";
    });

    // khi rời khỏi khu vực menu thì tắt menu
    let menu = item.parentNode;
    menu.addEventListener("mouseleave", () => {
        let removeSubMenu = item.querySelector(".sub-menu");
        removeSubMenu.classList.remove("active-sub-menu");
        let removeTitle = item.querySelector(".title");
        removeTitle.style.borderBottom = "none";
    });
});

// =====================Popover=======================

let buttonQuestion = document.querySelectorAll(".buttonQuestion");
buttonQuestion.forEach((item) => {
    let popover = null;

    item.addEventListener("click", () => {
        let button = event.currentTarget;
        console.log(button);
        let buttonRect = button.getBoundingClientRect();
        if (popover) {
            popover.remove();
            popover = null;
            return;
        }

        let dataText = button.getAttribute("data-text");
        console.log(dataText);
        let popoverPosition = button.getAttribute("data-position")
        console.log(popoverPosition);

        //Tạo popover
        popover = document.createElement("div");
        popover.className = "popover";
        popover.textContent = dataText;

        //xác định vị trí đặt popover 
        let popoverBottom = buttonRect.height + 10;
        let popoverLeft = (buttonRect.left - 372) / 2;

        popover.style.bottom = popoverBottom;
        popover.style.left = popoverLeft;
        
        // cho phần tử đó làm con của
    });
});

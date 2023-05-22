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

        let checkMyPopover = document.querySelector(".myPopover");
        // Ẩn popover khi bất kỳ nơi nào trên trang được nhấp
        document.addEventListener("click", function () {
            // console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
            // console.log(event.target);
            // console.log("======================");
            // console.log(popover);
            // console.log("======================");
            // console.log(button);
            if (
                popover && // nếu như tồn tại popover
                event.target !== button
            ) {
                popover.parentNode.removeChild(popover);
                popover = null;
            }
            if (checkMyPopover) {
                checkMyPopover.parentNode.removeChild(checkMyPopover);
            }
        });

        document.body.style.setProperty("--valueBottomPopover", "");
        document.body.style.setProperty("--valueTopPopover", "");

        let dataText = button.getAttribute("data-text");
        let popoverPosition = button.getAttribute("data-position");

        //Tạo popover
        popover = document.createElement("div");
        popover.className = "myPopover";
        popover.textContent = dataText;

        //xác định vị trí đặt popover
        let popoverBottom = buttonRect.height + 10;
        let popoverLeft = (button.offsetWidth - 440) / 2;
        let popoverTop = popoverBottom;

        if (popoverPosition === "top") {
            popover.style.bottom = popoverBottom + "px";
            popover.style.left = popoverLeft + "px";
            //popover hướng lên trên, nên phải set bottom = -5px cho hình tam giác
            let bottom = -5 + "px";
            document.body.style.setProperty("--valueBottomPopover", bottom);
        } else if (popoverPosition === "bottom") {
            popover.style.top = popoverTop + "px";
            popover.style.left = popoverLeft + "px";
            //popover hướng xuống dưới, nên phải set top = -5px cho hình tam giác
            let top = -5 + "px";
            document.body.style.setProperty("--valueTopPopover", top);
        }

        // cho phần tử đó làm con của button
        button.appendChild(popover);
    });
});

// =====================buttonIsActive(topBannerWordPress)=======================
let btnLinux = document.querySelector(".btnLinux");
let btnWindows = document.querySelector(".btnWindows");
let main = document.querySelector("main");
let topbannerWordPress = document.querySelector(".topbannerWordpress");
const template_childOfBtnWindows = `<div  class="childOfBtnWindows container-fluid">
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <img src="./assets/img/imgMain/IPfree-01.svg" alt="ipFree" class="thumb">
        </div>
        <div class="col-sm-6">
            <div class="title">Miễn phí một địa chỉ IP <br/> (Public IP)</div>
            <div class="desc">Địa chỉ IP tĩnh được cấp phát dành riêng cho Cloud Server của bạn, đây chính là địa chỉ để tất cả các thiết bị điện tử và máy tính có thể nhận diện và liên lạc với Cloud Server của bạn thông qua Internet. Nói cách khác, địa chỉ IP tĩnh sẽ giúp cho Cloud Server của bạn trở nên uy tín hơn.</div>
        </div>
    </div>
</div>
</div>`;
topbannerWordPress.insertAdjacentHTML("afterend", template_childOfBtnWindows);

btnWindows.addEventListener("click", () => {
    btnLinux.classList.remove("buttonIsActive");
    btnWindows.classList.add("buttonIsActive");
    if (!document.contains(document.querySelector(".childOfBtnWindows"))) {
        topbannerWordPress.insertAdjacentHTML(
            "afterend",
            template_childOfBtnWindows
        );
    }
});

btnLinux.addEventListener("click", () => {
    btnWindows.classList.remove("buttonIsActive");
    btnLinux.classList.add("buttonIsActive");
    document.querySelector(".childOfBtnWindows").remove();
});

// =====================buttonSeeMore(ServiceFeatures)=======================
const buttonSeeMore = document.querySelector("#serviceFeatures .btnSeeMore");
const featuresHidden = document.querySelectorAll(
    "#serviceFeatures .featuresHidden"
);

buttonSeeMore.addEventListener("click", () => {
    let isHidden = true;
    featuresHidden.forEach((item) => {
        if (item.classList.contains("hidden")) {
            isHidden = false;
        }
        item.classList.toggle("hidden");
    });

    if (isHidden) {
        buttonSeeMore.textContent = "Xem thêm";
    } else {
        buttonSeeMore.textContent = "Thu gọn";
    }
});

// =====================buttonSeeMore(FeaturesComparison)=======================
const buttonSeeMore_FeatureComparison = document.querySelector(
    "#featuresComparison .btnSeeMore"
);
const collapsedTables = document.querySelectorAll(
    "#featuresComparison .collapsedTable"
);

buttonSeeMore_FeatureComparison.addEventListener("click", () => {
    let isHidden = true;
    collapsedTables.forEach((item) => {
        if (item.classList.contains("hidden")) {
            isHidden = false;
        }
        item.classList.toggle("hidden");
    });

    if (isHidden) {
        buttonSeeMore_FeatureComparison.textContent = "Xem thêm";
    } else {
        buttonSeeMore_FeatureComparison.textContent = "Thu gọn";
    }
});

// =====================Q&form=======================
let QandA_list = document.querySelectorAll(".QandA");

QandA_list.forEach((QandA) => {
    //tạo mũi tên cho câu hỏi
    let arrow =document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "►";
    QandA.insertAdjacentElement("afterbegin", arrow);

    QandA.addEventListener("click", () => {
        // kiểm tra đã tồn tại aswerArea chưa, nếu rồi thì xoá, chưa thì hiện
        let isExists = QandA.querySelector(".answerArea");
        if (isExists) {
            isExists.remove();
            arrow.textContent = "►";
        } else {
            let dataAnswer = QandA.getAttribute("data-answer");

            //tạo phần tử answerArea
            let div = document.createElement("div");
            div.className = "answerArea";
            div.textContent = dataAnswer;

            //cho xuất hiện phần tử
            QandA.appendChild(div);

            //đổi mũi tên cho câu hỏi
            arrow.textContent = "▼";
            
        }
    });
});

// =====================activeStickyMenu=======================

let listItemStickyMenu = document.querySelectorAll("#accompaniedService,#serviceFeatures,#featuresComparison,#frequentlyQuestion");
let links = document.querySelectorAll(".stickyMenu a");


listItemStickyMenu.forEach((itemStickyMenu) => {

    //lắng nghe sự kiện click trên thành phần stickyMenu
    itemStickyMenu.addEventListener("click", () => {
        console.
        let target = document.querySelector('a[href="' + itemStickyMenu.id + '"]');
        console.log(target);
    });
});


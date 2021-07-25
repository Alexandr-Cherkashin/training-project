const navigation = document.querySelector(".navigation");
const header__inner = document.querySelector(".header__inner");
const social__scroll = document.querySelector(".social__scroll");
const newsTabs = document.querySelectorAll(".news__list-item");
const newsContent = document.querySelectorAll(".news__content");
const guidItemContent = document.querySelectorAll(".guid__item-content");
const burgerBtn = document.querySelector(".burger__btn");
const burgerItem = document.querySelector(".burger__item");
const burgerMenu = document.querySelector(".burger__menu");
const body = document.querySelector("body");
const burgerLink = document.querySelectorAll(".burger__link");


window.addEventListener("scroll", function(){
    CheckScroll();
})

window.addEventListener("DOMContentLoaded", function(){
    CheckScroll();
})


window.addEventListener("scroll", function(){
    CheckScrollHeader();
})

window.addEventListener("DOMContentLoaded", function(){
    CheckScrollHeader();
})

function CheckScrollHeader() {
    let scrollPos = window.scrollY;

    if(scrollPos > 10) {
        header__inner.classList.add("header__inner-scroll");
        social__scroll.classList.add("social__scroll-block");
    }
    if (scrollPos < 10) {
        header__inner.classList.remove("header__inner-scroll");
        social__scroll.classList.remove("social__scroll-block");
    }
    
}

function CheckScroll(){
    let scrollPos = window.scrollY;

    if (scrollPos > 500) {
        navigation.classList.add("white");
    }
    
    else {
        navigation.classList.remove("white");
    }
}

newsTabs.forEach(onTabClick);


document.querySelector(".news__list-item").click();

function onTabClick(item) {
    item.addEventListener("click", function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentNews = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains(".news__list-item-active")){
            newsTabs.forEach(function(item){
                item.classList.remove("news__list-item-active");
            });
    
            newsContent.forEach(function(item){
                item.classList.remove("news__content-curreit");
            });
    
            currentBtn.classList.add("news__list-item-active");
            currentNews.classList.add("news__content-curreit");
        };

    });
};


burgerBtn.addEventListener("click", function(){
    burgerItem.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    body.classList.toggle("lock");
});

burgerLink.forEach(burgerRemove);

function burgerRemove (item) {
    item.addEventListener("click", function(){
        burgerItem.classList.remove("active");
        burgerMenu.classList.remove("active");
        body.classList.remove("lock");
    });
};

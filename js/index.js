import i18Obj from "./translate.js";
import video from "./video.js";

const hamburger = document.querySelector('.hamburger-menu');
const activeElem = document.querySelectorAll('.active');
const navList = document.querySelector('.nav-list');
const portfolioBtnsBlock = document.querySelector('.buttons');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const langSwitch = document.querySelector('.lang-switch');
const themeSwitch = document.querySelector('.header__theme-switch');

hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    activeElem.forEach((item) => {
        item.classList.toggle('open');
    });
    document.body.classList.toggle('stop-scrolling');
}

navList.addEventListener('click', closeMenu);

function closeMenu(event) {
    if (event.target.classList.contains('link')) {
        hamburger.classList.remove('open');
        document.body.classList.remove('stop-scrolling');
        activeElem.forEach((item) => {
            item.classList.remove('open');
        });
    }
}

portfolioBtnsBlock.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.classList.contains('button')) {
        const season = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
    }
}

portfolioBtnsBlock.addEventListener('click', togglePortfolioBtnClass);

function togglePortfolioBtnClass(event) {
    const buttons = document.querySelectorAll('[data-season]');
    buttons.forEach((item) => {
        item.classList.remove('button_colored');
    });
    if (event.target.dataset) {
        event.target.classList.add('button_colored');
    }
}

langSwitch.addEventListener('click', getLang);


function changeSelectedLang() {
    document.getElementById(`${lang}`).classList.add('lang-switch__elem_selected');
}

function getLang(event) {
    const langs = document.querySelectorAll('[data-lang]');

    langs.forEach((item) => {
        item.classList.remove('lang-switch__elem_selected');
    });

    if (event.target.dataset) {
        event.target.classList.add('lang-switch__elem_selected');
        lang = event.target.dataset.lang;
        localStorage['lang'] = lang;
    }
}

langSwitch.addEventListener('click', getTranslate);

function getTranslate(event) {
    const textElem = document.querySelectorAll('[data-i18]');
    textElem.forEach((elem) => {
        elem.textContent = i18Obj[lang][elem.dataset.i18];
        if (elem.placeholder) {
            elem.placeholder = i18Obj[lang][elem.dataset.i18];
            elem.textContent = '';
        }
    });
}

themeSwitch.addEventListener('click', getChangeTheme);

function getChangeTheme() {
    const iconTheme = document.querySelectorAll('.icon_theme');
    iconTheme.forEach((item) => {
        item.classList.toggle('icon_not-active');
    })
    const elemLightTheme = document.querySelectorAll('.theme');
    elemLightTheme.forEach((item) => {
        item.classList.toggle('light-theme');
    });
    document.body.classList.contains('light-theme') ? theme = 'light' : theme = 'dark';
    localStorage['theme'] = theme;
}

let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    getTranslate();
    changeSelectedLang();

    if (theme === 'light') {
        getChangeTheme();
    }
}

window.addEventListener('load', getLocalStorage);


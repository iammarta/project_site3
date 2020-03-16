/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculator(){
    let people = document.querySelectorAll(".counter-block-input")[0];
    let days = document.querySelectorAll(".counter-block-input")[1];
    let places = document.getElementById("select");
    let totalValue = document.getElementById("total");
    let peopleSum = 0;
    let daysSum = 0;
    let totalSum = 0;

    totalValue.innerHTML = 0;

    people.addEventListener("change", function () {
        peopleSum = +this.value;
        totalSum = (daysSum + peopleSum) * 4000;

        if (days.value == "" || people.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    days.addEventListener("change", function () {
        daysSum = +this.value;
        totalSum = (daysSum + peopleSum) * 4000;

        if (people.value == "" || days.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    places.addEventListener("change", function () {
        if (days.value == "" || people.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let t = totalSum;
            totalValue.innerHTML = t * this.options[this.selectedIndex].value;
        }
    });
}
module.exports = calculator;

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms(){
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    let contactForm = document.querySelector(".second-form"),
        inputSecond = contactForm.getElementsByTagName('input');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < inputSecond.length; i++) {
            inputSecond[i].value = '';
        }

    });
}
module.exports = forms;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
 
let calculator = __webpack_require__(/*! ./calculator.js */ "./src/calculator.js");
let forms = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
let menu = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
let popup = __webpack_require__(/*! ./popup.js */ "./src/popup.js");
let slider = __webpack_require__(/*! ./slider.js */ "./src/slider.js");
let tabs = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");
let timer = __webpack_require__(/*! ./timer.js */ "./src/timer.js");

calculator();
forms();
menu();
popup();
slider();
tabs();
timer();

});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function hamburgerMenu() {
    let hamburger = document.querySelector('.hamburger');
    let header = document.getElementsByTagName('header')[0];
    let navigation = document.getElementsByTagName('nav')[0];
    let menu_item = navigation.getElementsByTagName('li');
    let menu_list = navigation.getElementsByTagName('ul')[0];

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle("hamburger_active");
        header.classList.toggle("header-active");
        if (header.classList.contains("header-active")) {
            navigation.style.display = 'block';
            menu_list.style.flexDirection = 'column';
            menu_list.style.position = 'absolute';
            menu_list.style.top = '50%';
            menu_list.style.transform = 'translate(50%, 50%)';
            for (let i = 0; i < menu_item.length; i++) {
                menu_item[i].style.paddingTop = "20px";
            }
        } else {
            navigation.style.display = 'none';
            menu_list.style.flexDirection = '';
            menu_list.style.position = '';
            menu_list.style.top = '';
            menu_list.style.transform = '';
        }
    });

    for (let i = 0; i < menu_item.length; i++) {
        menu_item[i].addEventListener('click', function () {
            hamburger.classList.toggle("hamburger_active");
            header.classList.toggle("header-active");
            if (header.classList.contains("header-active")) {
                navigation.style.display = "block";
                menu_list[i].style.marginTop = "20px";
            } else {
                navigation.style.display = "none";
                menu_list.style.flexDirection = '';
                menu_list.style.position = '';
                menu_list.style.top = '';
                menu_list.style.transform = '';
            }
        });
    }

    let sticky = header.offsetTop;

    window.onscroll = function () {
        scroll();
    };

    function scroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

module.exports = hamburgerMenu;

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function popup(){
    let moreBTN = document.querySelector(".more");
    let descrBTN = document.querySelectorAll(".description-btn");
    let overlay = document.querySelector(".overlay");
    let popup_close = document.querySelector(".popup-close");

    moreBTN.addEventListener("click", function () {
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    descrBTN.forEach(item => item.addEventListener("click", function () {
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }));

    popup_close.addEventListener("click", function () {
        overlay.style.display = "none";
        document.body.style.overflow = "";
    });
}
module.exports = popup;


/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {


    function slider() {
        let slider_item = document.querySelectorAll(".slider-item ");
        let sliderIndex = 1;
        let prev = document.querySelector(".prev");
        let next = document.querySelector(".next");
        let dotsWrapper = document.querySelector(".slider-dots");
        let dot = document.querySelectorAll(".dot");

        function showSlides(n) {
            if (n > slider_item.length) {
                sliderIndex = 1;
            }
            if (n < 1) {
                sliderIndex = slider_item.length;
            }

            for (let i = 0; i < slider_item.length; i++) {
                slider_item[i].style.display = "none";
                slider_item[sliderIndex - 1].style.display = "block";
            }
            for (let i = 0; i < dot.length; i++) {
                dot[i].classList.remove("dot-active");
                dot[sliderIndex - 1].classList.add("dot-active");
            }

        }
        showSlides(sliderIndex);

        function plusSlider(n) {
            showSlides(sliderIndex += n);
        }

        function currentSlider(n) {
            showSlides(sliderIndex = n);
        }

        prev.addEventListener("click", function () {
            plusSlider(-1);
        });

        next.addEventListener("click", function () {
            plusSlider(1);
        });

        dotsWrapper.addEventListener("click", function (event) {
            for (let i = 0; i < dot.length + 1; i++) {
                if (event.target.classList.contains("dot") && event.target == dot[i - 1]) {
                    currentSlider(i);
                }
            }
        });
    }

module.exports = slider;

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let infoHeader = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideContent(1);

    function showContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });
}
module.exports = tabs;


/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer(){
    let deadline = '2020-11-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
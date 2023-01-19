module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/background/background.js":
/*!*********************************************!*\
  !*** ./components/background/background.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.scss */ "./components/background/background.scss");
/* harmony import */ var _background_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\background\\background.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Background = ({
  src,
  alt = 'background'
}) => {
  return __jsx("img", {
    alt: alt,
    src: src,
    className: "background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./components/background/background.scss":
/*!***********************************************!*\
  !*** ./components/background/background.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/content/content.js":
/*!***************************************!*\
  !*** ./components/content/content.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select/select */ "./components/select/select.js");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.scss */ "./components/content/content.scss");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\content\\content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const options = [{
  label: "Cube Animation",
  value: "cubeAnimation"
}, {
  label: "Fall Animation",
  value: "fallAnimation"
}, {
  label: "Fold Out Animation",
  value: "foldOutAnimation"
}, {
  label: "Open Animation",
  value: "openAnimation"
}, {
  label: "Scale Out Animation",
  value: "scaleOutAnimation"
}];
const Content = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_1__["withNavigationContext"])(({
  fullpage,
  main,
  action
}) => {
  // useEffect(()=> {
  //   fullpage.navigate({
  //     ...fullpage.navigation,
  //     animation: 'cubeAnimation'
  //   });
  // }, []);

  return __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "content__main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, main), __jsx("div", {
    className: "content__action",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "content__action__go",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, action)));
});
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/content/content.scss":
/*!*****************************************!*\
  !*** ./components/content/content.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/fullpage/fullpage.css":
/*!******************************************!*\
  !*** ./components/fullpage/fullpage.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/fullpage/fullpage.js":
/*!*****************************************!*\
  !*** ./components/fullpage/fullpage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-slider */ "react-awesome-slider");
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/cube-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_cube_animation_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/fall-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_fall_animation_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/fold-out-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_fold_out_animation_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/scale-out-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_scale_out_animation_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-awesome-slider/dist/custom-animations/open-animation.css */ "./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css");
/* harmony import */ var react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_custom_animations_open_animation_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media */ "./components/fullpage/media.js");
/* harmony import */ var _startup_startup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../startup/startup */ "./components/startup/startup.js");
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\fullpage\\fullpage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Slider = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__["withNavigationHandlers"])(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_7__["withNavigationContext"])(({
  fullpage
}) => {
  const isFirstLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const animation = fullpage.navigation.animation || `foldOutAnimation`;
  return __jsx(Slider, {
    startupScreen: __jsx(_startup_startup__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 22
      }
    }),
    startupDelay: 275,
    animation: animation,
    className: "awesome-slider",
    onTransitionEnd: () => {
      // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
      if (isFirstLoad.current === true) {
        document.querySelector("body").classList.add("animated");
        document.querySelector("body").classList.add("visible");
      }
    },
    media: _media__WEBPACK_IMPORTED_MODULE_8__["media"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  });
}));

/***/ }),

/***/ "./components/fullpage/media.js":
/*!**************************************!*\
  !*** ./components/fullpage/media.js ***!
  \**************************************/
/*! exports provided: Home, Second, Forth, Third, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Second", function() { return Second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forth", function() { return Forth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Third", function() { return Third; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-button */ "react-awesome-button");
/* harmony import */ var react_awesome_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-button/dist/themes/theme-c137.css */ "./node_modules/react-awesome-button/dist/themes/theme-c137.css");
/* harmony import */ var react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_button_dist_themes_theme_c137_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-slider/dist/navigation */ "react-awesome-slider/dist/navigation");
/* harmony import */ var react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lettering_lettering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lettering/lettering */ "./components/lettering/lettering.js");
/* harmony import */ var _background_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../background/background */ "./components/background/background.js");
/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/content */ "./components/content/content.js");
/* harmony import */ var _mouse_mouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mouse/mouse */ "./components/mouse/mouse.js");
/* harmony import */ var _section_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../section/section */ "./components/section/section.js");
/* harmony import */ var _page_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../page/page */ "./components/page/page.js");
/* harmony import */ var _photo_photo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../photo/photo */ "./components/photo/photo.js");
/* harmony import */ var _portf_img_portf_img__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portf-img/portf-img */ "./components/portf-img/portf-img.js");
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fullpage.css */ "./components/fullpage/fullpage.css");
/* harmony import */ var _fullpage_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fullpage_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/si */ "react-icons/si");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\fullpage\\media.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const Home = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#292c35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx("div", {
      className: "container fade-in-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12 text-white d-flex flex-column justify-content-center lead",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, "An enthusiastic and highly motivated individual, mastered frontend and backend. Using tech stacks such as MEAN, MERN stacks. ", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 142
      }
    }), "Strong background of Javascript, Typescript, React, Node, Angular, Vue, etc. A U.S. citizen From Myrtle Beach, SC. Studied at Coastal Carolina University Along with a certification from Bottega University for Full-Stack Development. I currently reside in Atlanta, GA as a Freelance Full-Stack Engineer. Open to continuous long-term contract roles. As well as direct-hire roles. Check me out."), __jsx("div", {
      className: "col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, __jsx(_photo_photo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: "450",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    })))),
    action: __jsx("div", {
      className: "button",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-two");
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, "Goto the next page")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
});
const Second = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_page_page__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#4158b4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Construction Bevy: 2022 - Present",
      text: ["• Design, implement (write code), and test", "• Help to Improve system performance and reliability", "• Design client-side and server-side architecture", "• Build features and applications with a mobile responsive design", "• Test software to ensure responsiveness and efficiency", "• Troubleshoot, debug and upgrade software", "• Build features and applications with a mobile responsive design"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    })),
    action: __jsx("div", {
      className: "button",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-three");
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }, "Goto the next page")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  })), __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundColor: "#617be3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx(_lettering_lettering__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Lux Boards: 2020 - 2022",
    text: ["• Fully Developed E-Commerence Website", "• Developed interactive UI/UX using HTML, CSS, and Javascript", "• Performing SEO setups, page redirects, and optimizations", "• Developed and manage well-functioning databases and applications"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  })));
});
const Forth = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#292c35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx(_portf_img_portf_img__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }),
    action: __jsx("div", {
      className: "button",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-three");
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, "Goto the prev page")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }));
});
const Third = Object(react_awesome_slider_dist_navigation__WEBPACK_IMPORTED_MODULE_3__["withNavigationContext"])(({
  fullpage
}) => {
  return __jsx(_section_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    wrapper: false,
    backgroundColor: "#ff6f5e",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx(_content_content__WEBPACK_IMPORTED_MODULE_6__["default"], {
    main: __jsx("div", {
      className: "container",
      style: {
        color: "white",
        fontSize: "1.5em"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "row ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "d-flex flex-column justify-content-center align-items-center",
      style: {
        padding: "0% 20% 0% 20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 56
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaJs"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 98
      }
    }, "JavaScript"), " ", __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 142
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 56
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaAngular"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 103
      }
    }, "Angular"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 143
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 56
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaVuejs"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 101
      }
    }, "Vue"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 137
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 56
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaAws"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 99
      }
    }, "AWS"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 135
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 56
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaNodeJs"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 102
      }
    }, "Node.js"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 142
      }
    }, " 95%")))), __jsx("div", {
      className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "d-flex flex-column justify-content-center align-items-center",
      style: {
        padding: "0% 20% 0% 20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 56
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaPython"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 102
      }
    }, "Python"), " ", __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 142
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 56
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaJira"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 100
      }
    }, "Jira"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 137
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 56
      }
    }, __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_14__["SiDjango"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 102
      }
    }, "Django"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 141
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 56
      }
    }, __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_14__["SiFlask"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 101
      }
    }, "Flask"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 139
      }
    }, " 95%")), __jsx("div", {
      className: "row container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 56
      }
    }, __jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_14__["SiKeras"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 84
      }
    })), " ", __jsx("div", {
      style: {
        width: '60%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 101
      }
    }, "Keras"), __jsx("div", {
      style: {
        width: "20%"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 139
      }
    }, " 95%")))))),
    action: __jsx("div", {
      className: "button",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    }, __jsx(react_awesome_button__WEBPACK_IMPORTED_MODULE_1__["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-four");
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, "Goto the next page")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }));
});
const media = [{
  slug: "",
  className: "slide page-one",
  children: __jsx(Home, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  })
}, {
  slug: "page-two",
  className: "sectioned page-two",
  children: __jsx(Second, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  })
}, {
  slug: "page-three",
  preload: ["https://caferati.me/images/series/bojack-0.png"],
  className: "slide page-three",
  children: __jsx(Third, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  })
}, {
  slug: "page-four",
  preload: ["https://caferati.me/images/series/bojack-0.png"],
  className: "slide page-four",
  children: __jsx(Forth, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  })
}];

/***/ }),

/***/ "./components/lettering/lettering.css":
/*!********************************************!*\
  !*** ./components/lettering/lettering.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/lettering/lettering.js":
/*!*******************************************!*\
  !*** ./components/lettering/lettering.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lettering_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lettering.css */ "./components/lettering/lettering.css");
/* harmony import */ var _lettering_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lettering_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\lettering\\lettering.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Lettering = ({
  text = [],
  title = ''
}) => {
  const renderText = () => {
    return text && text.length ? text.map((line, index) => {
      return __jsx("p", {
        key: `${index}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 18
        }
      }, line);
    }) : null;
  };
  return __jsx("div", {
    className: "lettering",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, title), renderText());
};
/* harmony default export */ __webpack_exports__["default"] = (Lettering);

/***/ }),

/***/ "./components/mouse/mouse.js":
/*!***********************************!*\
  !*** ./components/mouse/mouse.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mouse_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse.scss */ "./components/mouse/mouse.scss");
/* harmony import */ var _mouse_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mouse_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\mouse\\mouse.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Mouse = ({
  visible = true
}) => {
  const className = ['scroll'];
  if (visible === false) {
    className.push('hidden');
  }
  return __jsx("button", {
    className: className.join(' ').trim(),
    title: "Choose Wisely",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Mouse);

/***/ }),

/***/ "./components/mouse/mouse.scss":
/*!*************************************!*\
  !*** ./components/mouse/mouse.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/page/page.css":
/*!**********************************!*\
  !*** ./components/page/page.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/page/page.js":
/*!*********************************!*\
  !*** ./components/page/page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ "./components/page/page.css");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\page\\page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Page = ({
  children
}) => {
  return __jsx("div", {
    className: "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/photo/photo.css":
/*!************************************!*\
  !*** ./components/photo/photo.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/photo/photo.js":
/*!***********************************!*\
  !*** ./components/photo/photo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _photo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.css */ "./components/photo/photo.css");
/* harmony import */ var _photo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_photo_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\photo\\photo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Photo({
  size = 72
}) {
  return __jsx("div", {
    className: "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "my-photo",
    style: {
      width: `${size}px`,
      height: `${size}px`
    },
    src: "/static/11.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./components/portf-img/portf-img.js":
/*!*******************************************!*\
  !*** ./components/portf-img/portf-img.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\portf-img\\portf-img.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import Photo1 from './2-150x150.png'
function PortfImg() {
  return __jsx("div", {
    className: "container row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-2-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-5-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-6-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-7-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-8-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/image-1-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s1-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s3-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s5-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s7-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/2-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/2-150x150.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (PortfImg);

/***/ }),

/***/ "./components/react-logo/react-logo.js":
/*!*********************************************!*\
  !*** ./components/react-logo/react-logo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-logo.scss */ "./components/react-logo/react-logo.scss");
/* harmony import */ var _react_logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\react-logo\\react-logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReactLogo = () => {
  return __jsx("div", {
    className: "logo-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ReactLogo);

/***/ }),

/***/ "./components/react-logo/react-logo.scss":
/*!***********************************************!*\
  !*** ./components/react-logo/react-logo.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/section/section.css":
/*!****************************************!*\
  !*** ./components/section/section.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/section/section.js":
/*!***************************************!*\
  !*** ./components/section/section.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.css */ "./components/section/section.css");
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_section_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\section\\section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Section = ({
  children,
  wrapper = true,
  backgroundColor = '#FFFFFF'
}) => {
  return __jsx("section", {
    className: "section",
    style: {
      backgroundColor
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, wrapper ? __jsx("div", {
    className: "section-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 18
    }
  }, children) : children);
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./components/select/select.js":
/*!*************************************!*\
  !*** ./components/select/select.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.scss */ "./components/select/select.scss");
/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_select_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\select\\select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Select = ({
  options = [],
  onChange,
  selected
}) => {
  const renderOptions = () => {
    return options.map(({
      value,
      label
    }) => {
      return __jsx("option", {
        key: value,
        value: value,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, label);
    });
  };
  return __jsx("select", {
    value: selected,
    onChange: event => {
      onChange(event.currentTarget.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, renderOptions());
};
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./components/select/select.scss":
/*!***************************************!*\
  !*** ./components/select/select.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/startup/startup.js":
/*!***************************************!*\
  !*** ./components/startup/startup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_logo_react_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../react-logo/react-logo */ "./components/react-logo/react-logo.js");
/* harmony import */ var _startup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startup.scss */ "./components/startup/startup.scss");
/* harmony import */ var _startup_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_startup_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\components\\startup\\startup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Startup = () => {
  return __jsx("div", {
    className: "startup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_react_logo_react_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Startup);

/***/ }),

/***/ "./components/startup/startup.scss":
/*!*****************************************!*\
  !*** ./components/startup/startup.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-button/dist/themes/theme-c137.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-awesome-button/dist/themes/theme-c137.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/page-four.js":
/*!****************************!*\
  !*** ./pages/page-four.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/fullpage/fullpage */ "./components/fullpage/fullpage.js");
var _jsxFileName = "F:\\frontend\\ras-fullpage-strategies\\nextjs-example\\pages\\page-four.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PageFour = () => {
  return __jsx(_components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (PageFour);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/page-four.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\frontend\ras-fullpage-strategies\nextjs-example\pages\page-four.js */"./pages/page-four.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-awesome-button":
/*!***************************************!*\
  !*** external "react-awesome-button" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-button");

/***/ }),

/***/ "react-awesome-slider":
/*!***************************************!*\
  !*** external "react-awesome-slider" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider");

/***/ }),

/***/ "react-awesome-slider/dist/navigation":
/*!*******************************************************!*\
  !*** external "react-awesome-slider/dist/navigation" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider/dist/navigation");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/si":
/*!*********************************!*\
  !*** external "react-icons/si" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ })

/******/ });
//# sourceMappingURL=page-four.js.map
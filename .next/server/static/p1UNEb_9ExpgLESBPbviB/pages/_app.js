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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-awesome-slider/dist/navigation"
var navigation_ = __webpack_require__("b9ZE");

// EXTERNAL MODULE: ./components/layout/layout.scss
var layout = __webpack_require__("Y++o");

// EXTERNAL MODULE: ./components/react-logo/react-logo.js
var react_logo = __webpack_require__("dngG");

// EXTERNAL MODULE: ./components/photo/photo.js
var photo = __webpack_require__("vTQp");

// EXTERNAL MODULE: ./components/nav/nav.scss
var nav = __webpack_require__("sq8H");

// CONCATENATED MODULE: ./components/nav/nav.js
var __jsx = external_react_default.a.createElement;





const Nav = Object(navigation_["withNavigationContext"])(({
  fullpage
}) => {
  const {
    slug
  } = fullpage.navigation;
  return __jsx("header", {
    className: "page-header"
  }, __jsx("div", {
    className: "page-header__wrapper"
  }, __jsx("div", {
    className: "page-header__title"
  }, __jsx(photo["a" /* default */], null), __jsx("div", null, __jsx("h1", null, __jsx("span", null, "Jamal"), __jsx("span", null, "Hamilton")), __jsx("h2", null, "Full-Stack Engineer"), __jsx("small", null, "with 7 years of experience."))), __jsx("nav", null, __jsx(navigation_["Link"], {
    className: slug === "" ? "selected" : null,
    href: "/"
  }, "About Me"), __jsx(navigation_["Link"], {
    className: slug === "page-two" ? "selected" : null,
    href: "/page-two"
  }, "Experience"), __jsx(navigation_["Link"], {
    className: slug === "page-three" ? "selected" : null,
    href: "/page-three"
  }, "Skills"), __jsx(navigation_["Link"], {
    className: slug === "page-four" ? "selected" : null,
    href: "/page-four"
  }, "Portfolio"))));
});
/* harmony default export */ var nav_nav = (Nav);
// CONCATENATED MODULE: ./components/layout/layout.js
var layout_jsx = external_react_default.a.createElement;



const Layout = ({
  children
}) => {
  return layout_jsx(external_react_default.a.Fragment, null, layout_jsx(nav_nav, null), layout_jsx("main", null, children));
};
/* harmony default export */ var layout_layout = (Layout);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;





function App({
  Component,
  pageProps
}) {
  const router = Object(router_["useRouter"])();
  return _app_jsx(navigation_["Provider"], {
    slug: router.route
  }, _app_jsx(head_default.a, null, _app_jsx("title", null, "Fullpage Javascript Navigation HOC with React Awesome Slider"), _app_jsx("meta", {
    name: "viewport",
    content: "width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
  }), _app_jsx("meta", {
    name: "description",
    content: "Fullpage navigation HOC with 3D animated transitions built on top of React Awesome Slider. GatsbyJS and NextJS recipes available."
  }), _app_jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico"
  }), _app_jsx("link", {
    rel: "stylesheet",
    href: "/static/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossorigin: "anonymous"
  })), _app_jsx(layout_layout, null, _app_jsx(Component, pageProps)));
}
/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "WAI6":
/***/ (function(module, exports) {



/***/ }),

/***/ "Y++o":
/***/ (function(module, exports) {



/***/ }),

/***/ "b9ZE":
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider/dist/navigation");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dngG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_logo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pZJW");
/* harmony import */ var _react_logo_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_logo_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReactLogo = () => {
  return __jsx("div", {
    className: "logo-container"
  }, __jsx("span", null), __jsx("span", null), __jsx("span", null));
};
/* harmony default export */ __webpack_exports__["a"] = (ReactLogo);

/***/ }),

/***/ "pZJW":
/***/ (function(module, exports) {



/***/ }),

/***/ "sq8H":
/***/ (function(module, exports) {



/***/ }),

/***/ "vTQp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _photo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WAI6");
/* harmony import */ var _photo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_photo_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Photo({
  size = 72
}) {
  return __jsx("div", {
    className: "p-2"
  }, __jsx("img", {
    className: "my-photo",
    style: {
      width: `${size}px`,
      height: `${size}px`
    },
    src: "/static/11.jpg"
  }));
}
/* harmony default export */ __webpack_exports__["a"] = (Photo);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
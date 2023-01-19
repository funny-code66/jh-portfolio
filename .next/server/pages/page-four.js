module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Hxp":
/***/ (function(module, exports) {



/***/ }),

/***/ "+eM2":
/***/ (function(module, exports) {



/***/ }),

/***/ "+wZM":
/***/ (function(module, exports) {

module.exports = require("react-icons/si");

/***/ }),

/***/ "/DTi":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6pGB");


/***/ }),

/***/ "5BQ2":
/***/ (function(module, exports) {



/***/ }),

/***/ "5G/m":
/***/ (function(module, exports) {



/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6pGB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HLLQ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageFour = () => {
  return __jsx(_components_fullpage_fullpage__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (PageFour);

/***/ }),

/***/ "GSbO":
/***/ (function(module, exports) {



/***/ }),

/***/ "HFrG":
/***/ (function(module, exports) {



/***/ }),

/***/ "HLLQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-awesome-slider"
var external_react_awesome_slider_ = __webpack_require__("oZiw");
var external_react_awesome_slider_default = /*#__PURE__*/__webpack_require__.n(external_react_awesome_slider_);

// EXTERNAL MODULE: ./node_modules/react-awesome-slider/dist/custom-animations/cube-animation.css
var cube_animation = __webpack_require__("xnDo");

// EXTERNAL MODULE: ./node_modules/react-awesome-slider/dist/custom-animations/fall-animation.css
var fall_animation = __webpack_require__("KZNc");

// EXTERNAL MODULE: ./node_modules/react-awesome-slider/dist/custom-animations/fold-out-animation.css
var fold_out_animation = __webpack_require__("KXPc");

// EXTERNAL MODULE: ./node_modules/react-awesome-slider/dist/custom-animations/scale-out-animation.css
var scale_out_animation = __webpack_require__("+Hxp");

// EXTERNAL MODULE: ./node_modules/react-awesome-slider/dist/custom-animations/open-animation.css
var open_animation = __webpack_require__("/DTi");

// EXTERNAL MODULE: external "react-awesome-slider/dist/navigation"
var navigation_ = __webpack_require__("b9ZE");

// EXTERNAL MODULE: external "react-awesome-button"
var external_react_awesome_button_ = __webpack_require__("d1Pf");

// EXTERNAL MODULE: ./node_modules/react-awesome-button/dist/themes/theme-c137.css
var theme_c137 = __webpack_require__("tMDq");

// EXTERNAL MODULE: ./components/lettering/lettering.css
var lettering = __webpack_require__("HFrG");

// CONCATENATED MODULE: ./components/lettering/lettering.js
var __jsx = external_react_default.a.createElement;



const Lettering = ({
  text = [],
  title = ''
}) => {
  const renderText = () => {
    return text && text.length ? text.map((line, index) => {
      return __jsx("p", {
        key: `${index}`
      }, line);
    }) : null;
  };

  return __jsx("div", {
    className: "lettering"
  }, __jsx("h1", null, title), renderText());
};

/* harmony default export */ var lettering_lettering = (Lettering);
// EXTERNAL MODULE: ./components/background/background.scss
var background = __webpack_require__("GSbO");

// CONCATENATED MODULE: ./components/background/background.js
var background_jsx = external_react_default.a.createElement;



const Background = ({
  src,
  alt = 'background'
}) => {
  return background_jsx("img", {
    alt: alt,
    src: src,
    className: "background"
  });
};

/* harmony default export */ var background_background = (Background);
// EXTERNAL MODULE: ./components/select/select.scss
var select_select = __webpack_require__("IFXV");

// CONCATENATED MODULE: ./components/select/select.js
var select_jsx = external_react_default.a.createElement;



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
      return select_jsx("option", {
        key: value,
        value: value
      }, label);
    });
  };

  return select_jsx("select", {
    value: selected,
    onChange: event => {
      onChange(event.currentTarget.value);
    }
  }, renderOptions());
};

/* harmony default export */ var components_select_select = (Select);
// EXTERNAL MODULE: ./components/content/content.scss
var content = __webpack_require__("dPKl");

// CONCATENATED MODULE: ./components/content/content.js
var content_jsx = external_react_default.a.createElement;




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
const Content = Object(navigation_["withNavigationContext"])(({
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
  return content_jsx("div", {
    className: "content"
  }, content_jsx("div", {
    className: "content__main"
  }, main), content_jsx("div", {
    className: "content__action"
  }, content_jsx("div", {
    className: "content__action__go"
  }, action)));
});
/* harmony default export */ var content_content = (Content);
// EXTERNAL MODULE: ./components/mouse/mouse.scss
var mouse = __webpack_require__("HzUN");

// CONCATENATED MODULE: ./components/mouse/mouse.js
var mouse_jsx = external_react_default.a.createElement;



const Mouse = ({
  visible = true
}) => {
  const className = ['scroll'];

  if (visible === false) {
    className.push('hidden');
  }

  return mouse_jsx("button", {
    className: className.join(' ').trim(),
    title: "Choose Wisely"
  }, mouse_jsx("span", null));
};

/* harmony default export */ var mouse_mouse = (Mouse);
// EXTERNAL MODULE: ./components/section/section.css
var section = __webpack_require__("rviQ");

// CONCATENATED MODULE: ./components/section/section.js
var section_jsx = external_react_default.a.createElement;



const Section = ({
  children,
  wrapper = true,
  backgroundColor = '#FFFFFF'
}) => {
  return section_jsx("section", {
    className: "section",
    style: {
      backgroundColor
    }
  }, wrapper ? section_jsx("div", {
    className: "section-wrapper"
  }, children) : children);
};

/* harmony default export */ var section_section = (Section);
// EXTERNAL MODULE: ./components/page/page.css
var page = __webpack_require__("5BQ2");

// CONCATENATED MODULE: ./components/page/page.js
var page_jsx = external_react_default.a.createElement;



const Page = ({
  children
}) => {
  return page_jsx("div", {
    className: "page"
  }, children);
};

/* harmony default export */ var page_page = (Page);
// EXTERNAL MODULE: ./components/photo/photo.js
var photo = __webpack_require__("vTQp");

// CONCATENATED MODULE: ./components/portf-img/portf-img.js
var portf_img_jsx = external_react_default.a.createElement;
 // import Photo1 from './2-150x150.png'

function PortfImg() {
  return portf_img_jsx("div", {
    className: "container row"
  }, portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-2-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-5-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-6-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-7-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/1-8-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/image-1-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s1-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s3-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s5-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/s7-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/2-150x150.png"
  }), portf_img_jsx("img", {
    className: "col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mt-2 mb-2",
    src: "/static/2-150x150.png"
  }));
}

/* harmony default export */ var portf_img = (PortfImg);
// EXTERNAL MODULE: ./components/fullpage/fullpage.css
var fullpage_fullpage = __webpack_require__("qqrb");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__("+wZM");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("+eM2");

// CONCATENATED MODULE: ./components/fullpage/media.js
var media_jsx = external_react_default.a.createElement;
















const Home = Object(navigation_["withNavigationContext"])(({
  fullpage
}) => {
  return media_jsx(section_section, {
    wrapper: false,
    backgroundColor: "#292c35"
  }, media_jsx(content_content, {
    main: media_jsx("div", {
      className: "container fade-in-image"
    }, media_jsx("div", {
      className: "row"
    }, media_jsx("div", {
      className: "col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12 text-white d-flex flex-column justify-content-center lead"
    }, "An enthusiastic and highly motivated individual, mastered frontend and backend. Using tech stacks such as MEAN, MERN stacks. ", media_jsx("br", null), "Strong background of Javascript, Typescript, React, Node, Angular, Vue, etc. A U.S. citizen From Myrtle Beach, SC. Studied at Coastal Carolina University Along with a certification from Bottega University for Full-Stack Development. I currently reside in Atlanta, GA as a Freelance Full-Stack Engineer. Open to continuous long-term contract roles. As well as direct-hire roles. Check me out."), media_jsx("div", {
      className: "col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12"
    }, media_jsx(photo["a" /* default */], {
      size: "450"
    })))),
    action: media_jsx("div", {
      className: "button"
    }, media_jsx(external_react_awesome_button_["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-two");
      }
    }, "Goto the next page"))
  }));
});
const Second = Object(navigation_["withNavigationContext"])(({
  fullpage
}) => {
  return media_jsx(page_page, null, media_jsx(section_section, {
    wrapper: false,
    backgroundColor: "#4158b4"
  }, media_jsx(content_content, {
    main: media_jsx(external_react_default.a.Fragment, null, media_jsx(lettering_lettering, {
      title: "Construction Bevy: 2022 - Present",
      text: ["• Design, implement (write code), and test", "• Help to Improve system performance and reliability", "• Design client-side and server-side architecture", "• Build features and applications with a mobile responsive design", "• Test software to ensure responsiveness and efficiency", "• Troubleshoot, debug and upgrade software", "• Build features and applications with a mobile responsive design"]
    })),
    action: media_jsx("div", {
      className: "button"
    }, media_jsx(external_react_awesome_button_["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-three");
      }
    }, "Goto the next page"))
  })), media_jsx(section_section, {
    backgroundColor: "#617be3"
  }, media_jsx(lettering_lettering, {
    title: "Lux Boards: 2020 - 2022",
    text: ["• Fully Developed E-Commerence Website", "• Developed interactive UI/UX using HTML, CSS, and Javascript", "• Performing SEO setups, page redirects, and optimizations", "• Developed and manage well-functioning databases and applications"]
  })));
});
const Forth = Object(navigation_["withNavigationContext"])(({
  fullpage
}) => {
  return media_jsx(section_section, {
    wrapper: false,
    backgroundColor: "#292c35"
  }, media_jsx(content_content, {
    main: media_jsx(portf_img, null),
    action: media_jsx("div", {
      className: "button"
    }, media_jsx(external_react_awesome_button_["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-three");
      }
    }, "Goto the prev page"))
  }));
});
const Third = Object(navigation_["withNavigationContext"])(({
  fullpage
}) => {
  return media_jsx(section_section, {
    wrapper: false,
    backgroundColor: "#ff6f5e"
  }, media_jsx(content_content, {
    main: media_jsx("div", {
      className: "container",
      style: {
        color: "white",
        fontSize: "1.5em"
      }
    }, media_jsx("div", {
      className: "row "
    }, media_jsx("div", {
      className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12"
    }, media_jsx("div", {
      className: "d-flex flex-column justify-content-center align-items-center",
      style: {
        padding: "0% 20% 0% 20%"
      }
    }, media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(fa_["FaJs"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "JavaScript"), " ", media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(fa_["FaAngular"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Angular"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(fa_["FaVuejs"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Vue"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(fa_["FaAws"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "AWS"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(fa_["FaNodeJs"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Node.js"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")))), media_jsx("div", {
      className: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-xxs-12"
    }, media_jsx("div", {
      className: "d-flex flex-column justify-content-center align-items-center",
      style: {
        padding: "0% 20% 0% 20%"
      }
    }, media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(fa_["FaPython"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Python"), " ", media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(fa_["FaJira"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Jira"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(si_["SiDjango"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Django"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(si_["SiFlask"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Flask"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")), media_jsx("div", {
      className: "row container-fluid"
    }, media_jsx("div", {
      style: {
        width: "20%"
      }
    }, media_jsx(si_["SiKeras"], null)), " ", media_jsx("div", {
      style: {
        width: '60%'
      }
    }, "Keras"), media_jsx("div", {
      style: {
        width: "20%"
      }
    }, " 95%")))))),
    action: media_jsx("div", {
      className: "button"
    }, media_jsx(external_react_awesome_button_["AwesomeButton"], {
      size: "large",
      onPress: () => {
        fullpage.navigate("/page-four");
      }
    }, "Goto the next page"))
  }));
});
const media = [{
  slug: "",
  className: "slide page-one",
  children: media_jsx(Home, null)
}, {
  slug: "page-two",
  className: "sectioned page-two",
  children: media_jsx(Second, null)
}, {
  slug: "page-three",
  preload: ["https://caferati.me/images/series/bojack-0.png"],
  className: "slide page-three",
  children: media_jsx(Third, null)
}, {
  slug: "page-four",
  preload: ["https://caferati.me/images/series/bojack-0.png"],
  className: "slide page-four",
  children: media_jsx(Forth, null)
}];
// EXTERNAL MODULE: ./components/react-logo/react-logo.js
var react_logo = __webpack_require__("dngG");

// EXTERNAL MODULE: ./components/startup/startup.scss
var startup = __webpack_require__("5G/m");

// CONCATENATED MODULE: ./components/startup/startup.js
var startup_jsx = external_react_default.a.createElement;




const Startup = () => {
  return startup_jsx("div", {
    className: "startup"
  }, startup_jsx(react_logo["a" /* default */], null));
};

/* harmony default export */ var startup_startup = (Startup);
// CONCATENATED MODULE: ./components/fullpage/fullpage.js
var fullpage_jsx = external_react_default.a.createElement;










const Slider = Object(navigation_["withNavigationHandlers"])(external_react_awesome_slider_default.a);
/* harmony default export */ var components_fullpage_fullpage = __webpack_exports__["a"] = (Object(navigation_["withNavigationContext"])(({
  fullpage
}) => {
  const isFirstLoad = Object(external_react_["useRef"])(true);
  const animation = fullpage.navigation.animation || `foldOutAnimation`;
  return fullpage_jsx(Slider, {
    startupScreen: fullpage_jsx(startup_startup, null),
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
    media: media
  });
}));

/***/ }),

/***/ "HzUN":
/***/ (function(module, exports) {



/***/ }),

/***/ "IFXV":
/***/ (function(module, exports) {



/***/ }),

/***/ "KXPc":
/***/ (function(module, exports) {



/***/ }),

/***/ "KZNc":
/***/ (function(module, exports) {



/***/ }),

/***/ "WAI6":
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

/***/ "d1Pf":
/***/ (function(module, exports) {

module.exports = require("react-awesome-button");

/***/ }),

/***/ "dPKl":
/***/ (function(module, exports) {



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

/***/ "oZiw":
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider");

/***/ }),

/***/ "pZJW":
/***/ (function(module, exports) {



/***/ }),

/***/ "qqrb":
/***/ (function(module, exports) {



/***/ }),

/***/ "rviQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "tMDq":
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

/***/ "xnDo":
/***/ (function(module, exports) {



/***/ })

/******/ });
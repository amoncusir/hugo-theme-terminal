/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/***/ (function() {

eval("\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n(function (document, window) {\n  // Constants :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\n  var HIDDEN_CLASS = 'hidden';\n  var container = document.querySelector(\".container\");\n  var menu = document.querySelector(\".menu\");\n  var mobileMenuTrigger = document.querySelector(\".menu-trigger\"); // const desktopMenuTrigger = document.querySelector(\".menu__sub-inner-more-trigger\");\n\n  var desktopSubMenus = document.querySelector('.menu__sub-inner');\n  var menuMore = document.querySelector(\".menu__sub-inner-more\");\n  var mobileQuery = getComputedStyle(document.body).getPropertyValue(\"--phoneWidth\"); // Functions :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\n\n  var isMobile = function isMobile() {\n    return window.matchMedia(mobileQuery).matches;\n  };\n\n  var handleMenuClasses = function handleMenuClasses() {\n    mobileMenuTrigger && mobileMenuTrigger.classList.toggle(HIDDEN_CLASS, !isMobile());\n    menu && menu.classList.toggle(HIDDEN_CLASS, isMobile());\n    menuMore && menuMore.classList.toggle(HIDDEN_CLASS, !isMobile());\n  };\n\n  function setUpMenuTrigger(menuNode) {\n    var trigger = menuNode.querySelector('.menu__sub-inner-more-trigger');\n    var menuContainer = menuNode.querySelector('.menu__sub-inner-more');\n    trigger.addEventListener('click', function () {\n      var isMenuHidden = menuContainer.classList.contains(HIDDEN_CLASS);\n      menuMore.classList.add(HIDDEN_CLASS);\n\n      if (isMenuHidden) {\n        menuContainer.classList.remove(HIDDEN_CLASS);\n      }\n    });\n  } // Set Up ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\n\n\n  var _iterator = _createForOfIteratorHelper(desktopSubMenus),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var desktopSubMenuNode = _step.value;\n      console.log(desktopSubMenuNode);\n      setUpMenuTrigger(desktopSubMenuNode);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  menu && menu.addEventListener(\"click\", function (e) {\n    return e.stopPropagation();\n  });\n  menuMore && menuMore.addEventListener(\"click\", function (e) {\n    return e.stopPropagation();\n  });\n  handleMenuClasses();\n  document.body.addEventListener(\"click\", function () {\n    if (!isMobile() && menuMore && !menuMore.classList.contains(HIDDEN_CLASS)) {\n      menuMore.classList.add(HIDDEN_CLASS);\n    } else if (isMobile() && menu && !menu.classList.contains(HIDDEN_CLASS)) {\n      menu.classList.add(HIDDEN_CLASS);\n    }\n  });\n  window.addEventListener(\"resize\", handleMenuClasses); // Mobile menu\n\n  mobileMenuTrigger && mobileMenuTrigger.addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    menu && menu.classList.toggle(HIDDEN_CLASS);\n  }); // Desktop menu\n\n  desktopMenuTrigger && desktopMenuTrigger.addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    menuMore && menuMore.classList.toggle(HIDDEN_CLASS);\n\n    if (menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right) {\n      menuMore.style.left = \"auto\";\n      menuMore.style.right = 0;\n    }\n  });\n})(document, window);\n\n//# sourceURL=webpack://terminal/./assets/js/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/menu.js"]();
/******/ 	
/******/ })()
;
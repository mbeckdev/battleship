/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.example-of-organizing {\\r\\n  /* Positioning Block */\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n\\r\\n  /* Structure Block */\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  background: darkgreen;\\r\\n  border: 1px solid #fff;\\r\\n\\r\\n  /* Typography Block */\\r\\n  font-size: 16px;\\r\\n  line-height: 22px;\\r\\n  color: #fff;\\r\\n\\r\\n  /* Modifier Block */\\r\\n  transition: all ease-in 250ms;\\r\\n  transform: scale(1.1);\\r\\n  z-index: 42;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(138, 168, 180);\\r\\n}\\r\\n\\r\\n/* *********** GRID SYTLING *********** */\\r\\n.grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(10, 20px);\\r\\n  grid-template-rows: repeat(10, 20px);\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.grid-square {\\r\\n  background-color: rgb(207, 234, 235);\\r\\n  border: 1px solid black;\\r\\n}\\r\\n\\r\\n.ship {\\r\\n  background-color: rgb(52, 63, 63);\\r\\n}\\r\\n\\r\\n.hit {\\r\\n  background-color: rgb(196, 26, 26);\\r\\n}\\r\\n\\r\\n.miss {\\r\\n  background-color: rgb(65, 163, 243);\\r\\n}\\r\\n\\r\\n.mask {\\r\\n  background-color: rgb(207, 234, 235);\\r\\n}\\r\\n/* *********** GRID SYTLING END *********** */\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/factories/gameboardFactory.js":
/*!*******************************************!*\
  !*** ./src/factories/gameboardFactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _module_patterns_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module-patterns/dom.js */ \"./src/module-patterns/dom.js\");\n/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory.js */ \"./src/factories/shipFactory.js\");\n/* harmony import */ var _module_patterns_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module-patterns/game.js */ \"./src/module-patterns/game.js\");\n\r\n\r\n// import { Ship } from '.shipFactory.js';\r\n\r\n\r\n\r\n// Gameboards should be able to place ships at specific\r\n// coordinates by calling the ship factory function\r\nconst Gameboard = function () {\r\n  // how it will be used elsewhere\r\n  // let board1 = Gameboard();\r\n  // board1.receiveAttack(2, 4);\r\n\r\n  let arrayOfShips = [\r\n    // Ship('destroyer', 2, [0, 0], true),\r\n    // Ship('submarine', 3, [5, 7], true),\r\n  ];\r\n\r\n  let boardHitAndMissLayout = [\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n  ];\r\n\r\n  // receiveAttack determines whether or not the attack\r\n  // hit a ship and\r\n  // then sends the ‘hit’ function to the correct ship,\r\n  // or records the coordinates of the missed shot.\r\n  function receiveAttack(x, y) {\r\n    // has this attack hit a ship?\r\n    let hitFound = false;\r\n    arrayOfShips.forEach((aShip) => {\r\n      for (let i = 0; i < aShip.positionsOnBoard.length; i++) {\r\n        if (\r\n          aShip.positionsOnBoard[i][0] == x &&\r\n          aShip.positionsOnBoard[i][1] == y\r\n        ) {\r\n          // a hit!\r\n          hitFound = true;\r\n          aShip.hit(i);\r\n          boardHitAndMissLayout[x][y] = 'hit';\r\n          _module_patterns_game_js__WEBPACK_IMPORTED_MODULE_2__.default.gameboardA.allShipsSunk();\r\n          _module_patterns_dom_js__WEBPACK_IMPORTED_MODULE_0__.default.showHit(x, y);\r\n          // check if sunk here??????\r\n        } else {\r\n          // these coordinates dont match this ship section.\r\n        }\r\n      }\r\n    });\r\n\r\n    if (!hitFound) {\r\n      // x,y doesn't match any ship section, so it's a miss\r\n      boardHitAndMissLayout[x][y] = 'miss';\r\n      _module_patterns_dom_js__WEBPACK_IMPORTED_MODULE_0__.default.showMiss(x, y);\r\n    }\r\n  }\r\n\r\n  // let shipToAdd = Ship(2, [0, 0], true);\r\n  let boardShipLayout = []; // [0][1] = x, y\r\n  boardShipLayout = [\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n  ];\r\n\r\n  function addShipToBoard(shipToAdd) {\r\n    arrayOfShips.push(shipToAdd); // for use in receiveAttack later\r\n    shipToAdd.positionsOnBoard.forEach((coords) => {\r\n      let x = coords[0];\r\n      let y = coords[1];\r\n\r\n      // add these coords to board\r\n      boardShipLayout[x][y] = shipToAdd.name;\r\n      // boardShipLayout will not look like actual board, sort of flipped, but will work.\r\n      // like array of [1][0] will look vertical, but we're not writing to screen like so it works.\r\n    });\r\n  }\r\n\r\n  function allShipsSunk() {\r\n    for (let i = 0; i < arrayOfShips.length; i++) {\r\n      if (arrayOfShips[i].isSunk()) {\r\n      } else {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  return {\r\n    addShipToBoard,\r\n    allShipsSunk,\r\n    arrayOfShips,\r\n    boardHitAndMissLayout,\r\n    boardShipLayout,\r\n    receiveAttack,\r\n    // setupBoard,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/gameboardFactory.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ \"./src/factories/gameboardFactory.js\");\n\r\n\r\n\r\nconst Player = function (aPlayerName) {\r\n  let playerName = aPlayerName;\r\n\r\n  function attack(x, y, gameBoard) {\r\n    gameBoard.receiveAttack(x, y);\r\n  }\r\n\r\n  let _guessLayout = [\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n    [null, null, null, null, null, null, null, null, null, null],\r\n  ];\r\n\r\n  function computerTakeRandomGuess() {\r\n    // should not guess the same square twice\r\n    let max = 10;\r\n    let xRandom = Math.floor(Math.random() * max);\r\n    let yRandom = Math.floor(Math.random() * max);\r\n    let needToGuessMore = true;\r\n\r\n    //check if it's been guessed before\r\n    while (needToGuessMore) {\r\n      if (_guessLayout[xRandom][yRandom] == null) {\r\n        // space is empty\r\n        needToGuessMore = false;\r\n        _guessLayout[xRandom][yRandom] = 'guessed';\r\n      } else {\r\n        // space has been guessed before\r\n        xRandom = Math.floor(Math.random() * max);\r\n        yRandom = Math.floor(Math.random() * max);\r\n      }\r\n    }\r\n    return [xRandom, yRandom];\r\n  }\r\n\r\n  return {\r\n    attack,\r\n    playerName,\r\n    computerTakeRandomGuess,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/shipFactory.js":
/*!**************************************!*\
  !*** ./src/factories/shipFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n// not an iife because we'll use it many times\r\n// ships are objects that include their length, where they’ve been hit and whether or not they’ve been sunk.\r\nconst Ship = function (aName, aLength, abeginningPosition, horizontal) {\r\n  let name = aName;\r\n  let length = aLength; //1,2,3,4,5\r\n  let beginningPosition = abeginningPosition;\r\n  let isHorizontal = horizontal;\r\n  let hits = Array(length).fill(null); //['','hit','']\r\n  // sets positionsOnBoard\r\n  let positionsOnBoard = [];\r\n  _findCoordsOfShipPieces();\r\n  // let positionsOnBoard = [beginningPosition, [1, 0], [2, 0]]; //[14,15,16]  //[2,12,22]\r\n\r\n  // let isSunk = false;\r\n\r\n  // takes a number and then marks that position as ‘hit’.\r\n  function hit(position) {\r\n    //0,1,2,3,4\r\n    hits[position] = 'hit';\r\n  }\r\n\r\n  // calculates is sunk based on their length and whether all of their positions are ‘hit’.\r\n  function isSunk() {\r\n    for (let i = 0; i < length; i++) {\r\n      if (hits[i] != 'hit') {\r\n        return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  function _findCoordsOfShipPieces() {\r\n    // assumes this is a legit placement already\r\n    positionsOnBoard.push(beginningPosition);\r\n    let beginningX = beginningPosition[0];\r\n    let beginningY = beginningPosition[1];\r\n    if (isHorizontal == true) {\r\n      for (let i = 1; i < length; i++) {\r\n        positionsOnBoard.push([beginningX + i, beginningY]);\r\n      }\r\n    } else {\r\n      // vertical orientation\r\n      for (let i = 1; i < length; i++) {\r\n        positionsOnBoard.push([beginningX, beginningY + i]);\r\n      }\r\n    }\r\n  }\r\n\r\n  // const ship = { length: 4, isHit: false, isSunk: false };\r\n  return {\r\n    name,\r\n    length,\r\n    hits,\r\n    isSunk,\r\n    hit,\r\n    positionsOnBoard,\r\n    isHorizontal,\r\n  };\r\n};\r\n\r\n// export { Ship };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/factories/shipFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _module_patterns_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-patterns/game.js */ \"./src/module-patterns/game.js\");\n\r\n\r\n// import Gameboard from './factories/gameboardFactory.js';\r\n// import dom from './module-patterns/dom.js';\r\n// import Player from './factories/player.js';\r\n// import Ship from './factories/shipFactory.js';\r\n\r\n\r\n_module_patterns_game_js__WEBPACK_IMPORTED_MODULE_1__.default.setupGame();\r\n_module_patterns_game_js__WEBPACK_IMPORTED_MODULE_1__.default.startGame();\r\n// game;\r\n// console.log(dom.domElements.gridA);\r\nconsole.log('asdf');\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/module-patterns/dom.js":
/*!************************************!*\
  !*** ./src/module-patterns/dom.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/module-patterns/game.js\");\n\r\n\r\n\r\n\r\nconst dom = (function () {\r\n  // let gridA = document.getElementById('gridA');\r\n  // let gridB = document.getElementById('gridB');\r\n  let maxNumberOfDivsXDirection = 10;\r\n\r\n  const domElements = {\r\n    gridA: document.getElementById('gridA'),\r\n    gridB: document.getElementById('gridB'),\r\n  };\r\n\r\n  // starting from top left, 100 divs are created 10 x 10\r\n  function createDivsInGrid(someGrid) {\r\n    for (let y = 0; y < maxNumberOfDivsXDirection; y++) {\r\n      for (let x = 0; x < maxNumberOfDivsXDirection; x++) {\r\n        let tempDiv = document.createElement('div');\r\n        tempDiv.dataset.id = x.toString() + y.toString();\r\n        tempDiv.classList.add('grid-square');\r\n        someGrid.appendChild(tempDiv);\r\n      }\r\n    }\r\n  }\r\n\r\n  function addShipClassesToBoard(someBoard, domGrid) {\r\n    // go through all ships on board\r\n    for (let i = 0; i < someBoard.arrayOfShips.length; i++) {\r\n      // go through all of the positions of that ship\r\n      for (\r\n        let j = 0;\r\n        j < someBoard.arrayOfShips[i].positionsOnBoard.length;\r\n        j++\r\n      ) {\r\n        let xPosition = someBoard.arrayOfShips[i].positionsOnBoard[j][0];\r\n        let yPosition = someBoard.arrayOfShips[i].positionsOnBoard[j][1];\r\n\r\n        // find the div with these coordinates\r\n        let selector = `[data-id=\"${xPosition}${yPosition}\"]`;\r\n        let thisDiv = domGrid.querySelector(selector);\r\n\r\n        thisDiv.classList.add('ship');\r\n      }\r\n    }\r\n  }\r\n\r\n  function maskGrid(gridToHide) {\r\n    for (let i = 0; i < gridToHide.children.length; i++) {\r\n      gridToHide.children[i].classList.add('mask');\r\n    }\r\n  }\r\n\r\n  function allowClickInGridA() {\r\n    for (let i = 0; i < gridA.children.length; i++) {\r\n      gridA.children[i].addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__.default.handleHitInGridA);\r\n    }\r\n  }\r\n  function allowClickInGridB() {\r\n    for (let i = 0; i < gridB.children.length; i++) {\r\n      gridB.children[i].addEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__.default.handleHitInGridB);\r\n    }\r\n  }\r\n  function disallowClickInGridA() {\r\n    for (let i = 0; i < gridA.children.length; i++) {\r\n      gridA.children[i].removeEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__.default.handleHitInGridA);\r\n    }\r\n  }\r\n  function disallowClickInGridB() {\r\n    for (let i = 0; i < gridB.children.length; i++) {\r\n      gridB.children[i].removeEventListener('click', _game_js__WEBPACK_IMPORTED_MODULE_0__.default.handleHitInGridB);\r\n    }\r\n  }\r\n\r\n  function showHit(x, y) {\r\n    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa show hit tbd');\r\n    let thisGrid = '';\r\n    if (_game_js__WEBPACK_IMPORTED_MODULE_0__.default.itsPlayerAsTurn) {\r\n      thisGrid = gridB;\r\n    } else {\r\n      thisGrid = gridA;\r\n    }\r\n    let selector = `[data-id=\"${x}${y}\"]`;\r\n    let thisDiv = thisGrid.querySelector(selector);\r\n    thisDiv.classList.remove('mask');\r\n    thisDiv.classList.add('hit');\r\n  }\r\n\r\n  function showMiss(x, y) {\r\n    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa show miss tbd');\r\n    let thisGrid = '';\r\n    if (_game_js__WEBPACK_IMPORTED_MODULE_0__.default.itsPlayerAsTurn) {\r\n      thisGrid = gridB;\r\n    } else {\r\n      thisGrid = gridA;\r\n    }\r\n    let selector = `[data-id=\"${x}${y}\"]`;\r\n    let thisDiv = thisGrid.querySelector(selector);\r\n    thisDiv.classList.remove('mask');\r\n    thisDiv.classList.add('miss');\r\n  }\r\n\r\n  return {\r\n    addShipClassesToBoard,\r\n    maskGrid,\r\n    allowClickInGridA,\r\n    allowClickInGridB,\r\n    disallowClickInGridA,\r\n    disallowClickInGridB,\r\n    createDivsInGrid,\r\n    domElements,\r\n    showHit,\r\n    showMiss,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\r\n\n\n//# sourceURL=webpack://battleship/./src/module-patterns/dom.js?");

/***/ }),

/***/ "./src/module-patterns/game.js":
/*!*************************************!*\
  !*** ./src/module-patterns/game.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/gameboardFactory.js */ \"./src/factories/gameboardFactory.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/module-patterns/dom.js\");\n/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/player.js */ \"./src/factories/player.js\");\n/* harmony import */ var _factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/shipFactory.js */ \"./src/factories/shipFactory.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst game = (function () {\r\n  let playerA = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_2__.default)('You');\r\n  let playerB = (0,_factories_player_js__WEBPACK_IMPORTED_MODULE_2__.default)('Computer');\r\n  let gameboardA = (0,_factories_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default.domElements.gridA);\r\n  let gameboardB = (0,_factories_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.default)(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default.domElements.gridB);\r\n  let itsPlayerAsTurn = true;\r\n\r\n  // setupGame();\r\n  function setupGame() {\r\n    let shipA = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('Bob', 3, [0, 0], true);\r\n    let shipB = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobB', 2, [0, 1], true);\r\n    let shipC = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobC', 3, [0, 2], true);\r\n    let shipD = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobD', 5, [0, 3], true);\r\n    let shipE = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobE', 3, [0, 4], true);\r\n    gameboardA.addShipToBoard(shipA);\r\n    gameboardA.addShipToBoard(shipB);\r\n    gameboardA.addShipToBoard(shipC);\r\n    gameboardA.addShipToBoard(shipD);\r\n    gameboardA.addShipToBoard(shipE);\r\n\r\n    let bShipA = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('Bob', 3, [0, 0], false);\r\n    let bShipB = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobB', 2, [1, 0], false);\r\n    let bShipC = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobC', 3, [2, 0], false);\r\n    let bShipD = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobD', 5, [3, 0], false);\r\n    let bShipE = (0,_factories_shipFactory_js__WEBPACK_IMPORTED_MODULE_3__.default)('BobE', 3, [4, 0], false);\r\n    gameboardB.addShipToBoard(bShipA);\r\n    gameboardB.addShipToBoard(bShipB);\r\n    gameboardB.addShipToBoard(bShipC);\r\n    gameboardB.addShipToBoard(bShipD);\r\n    gameboardB.addShipToBoard(bShipE);\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.createDivsInGrid(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default.domElements.gridA);\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.createDivsInGrid(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default.domElements.gridB);\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.addShipClassesToBoard(gameboardA, _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.domElements.gridA);\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.addShipClassesToBoard(gameboardB, _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.domElements.gridB);\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.maskGrid(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default.domElements.gridB);\r\n  }\r\n\r\n  let gameIsOver = false;\r\n  function startGame() {\r\n    playerAsTurn();\r\n  }\r\n\r\n  function playerAsTurn() {\r\n    game.itsPlayerAsTurn = true;\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.disallowClickInGridA();\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.allowClickInGridB();\r\n    // then you click in grid B,\r\n    // gridB has an eventlistener that says after click, go to\r\n    //    game.handleHitInGridB()\r\n  }\r\n\r\n  function playerBsTurn() {\r\n    // Computer turn\r\n    game.itsPlayerAsTurn = false;\r\n    //   - you should not be allowed to click.\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_1__.default.disallowClickInGridB();\r\n    // dom.allowClickInGridA();\r\n\r\n    // Computer takes a turn here\r\n    let newCoords = playerB.computerTakeRandomGuess();\r\n    playerB.attack(newCoords[0], newCoords[1], gameboardA);\r\n\r\n    //           - set a bit of a wait after computer's turn is over\r\n    //             setTimeout(console.log('waiting'), 1 * 3000);\r\n    //   - check GameOver\r\n    checkGameOver();\r\n    if (!gameIsOver) {\r\n      playerAsTurn();\r\n    }\r\n    //   - Switch whose turn\r\n  }\r\n\r\n  function checkGameOver() {\r\n    if (gameboardA.allShipsSunk()) {\r\n      gameIsOver = true;\r\n    }\r\n    if (gameboardB.allShipsSunk()) {\r\n      gameIsOver = true;\r\n    }\r\n  }\r\n\r\n  function handleHitInGridA(e) {\r\n    // find x and y of click\r\n    console.log(e.target);\r\n    let xCoord = e.target.dataset.id[0];\r\n    let yCoord = e.target.dataset.id[1];\r\n    playerB.attack(xCoord, yCoord, gameboardA);\r\n  }\r\n\r\n  function handleHitInGridB(e) {\r\n    let xCoord = e.target.dataset.id[0];\r\n    let yCoord = e.target.dataset.id[1];\r\n    playerA.attack(xCoord, yCoord, gameboardB);\r\n\r\n    checkGameOver();\r\n    if (!gameIsOver) {\r\n      playerBsTurn();\r\n    }\r\n  }\r\n\r\n  return {\r\n    handleHitInGridA,\r\n    handleHitInGridB,\r\n    setupGame,\r\n    startGame,\r\n    gameboardA,\r\n    gameboardB,\r\n    itsPlayerAsTurn,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\r\n\n\n//# sourceURL=webpack://battleship/./src/module-patterns/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
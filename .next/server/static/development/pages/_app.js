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

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import axios from 'axios';
const callNewsData = (q, page, from, to) => {
  const apiKey = '16e0ef998d404c258e85377281d4d735';
  const pageSize = 10;
  const language = 'ko';
  const sortBy = 'publishedAt';
  let query = `?pageSize=${pageSize}&language=${language}&apiKey=${apiKey}&sortBy=${sortBy}`;
  let qData;
  let pageData;
  let fromData;
  let toData;

  if (q === undefined || q === '') {
    qData = 'all';
  } else {
    qData = q;
  }

  query = `${query}&q=${qData}`;

  if (page === undefined) {
    pageData = 1;
  } else {
    pageData = page;
  }

  query = `${query}&page=${pageData}`;

  if (from === undefined) {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1);
    const yyyy = today.getFullYear();
    fromData = `${yyyy}-${mm}-${dd}`;
  } else {
    const fromDate = new Date(from);
    const dd = String(fromDate.getDate());
    const mm = String(fromDate.getMonth() + 1);
    const yyyy = fromDate.getFullYear();
    fromData = `${yyyy}-${mm}-${dd}`;
  }

  query = `${query}&from=${fromData}`;

  if (to === undefined) {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1);
    const yyyy = today.getFullYear();
    toData = `${yyyy}-${mm}-${dd}`;
  } else {
    const toDate = new Date(to);
    const dd = String(toDate.getDate());
    const mm = String(toDate.getMonth() + 1);
    const yyyy = toDate.getFullYear();
    toData = `${yyyy}-${mm}-${dd}`;
  }

  query = `${query}&to=${toData}`; // http://newsapi.org/v2/everything?q=all&language=ko&from=2020-04-01&to=2020-04-15&sortBy=publishedAt&pageSize=10&page=1&apiKey=16e0ef998d404c258e85377281d4d735

  const url = `http://newsapi.org/v2/everything${query}`;
  return url;
};

/* harmony default export */ __webpack_exports__["default"] = (callNewsData);

/***/ }),

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/devsol/Desktop/news_project/pages/_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */

/* eslint-disable no-shadow */


 // import PropTypes from 'prop-types';




const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
  *{
      margin: 0;
      padding: 0;
  }
`;

const RootApp = ({
  Component,
  store
}) => __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }
}, __jsx(Component, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}), __jsx(GlobalStyle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
})); // RootApp.propTypes = {
//   Component: PropTypes.node.isRequired,
//   store: PropTypes.node.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default()(() => _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"])(RootApp));

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsReducer */ "./redux/reducers/newsReducer.js");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  news: _newsReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/newsReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/newsReducer.js ***!
  \***************************************/
/*! exports provided: FETCH_NEWS_DATA_REQUEST, FETCH_NEWS_DATA_REQUEST_STARTED, FETCH_NEWS_DATA_SUCCESS, FETCH_NEWS_DATA_FAIL, CHANGE_SEARCH_VALUE, CHANGE_FROM_DATE_VALUE, CHANGE_TO_DATE_VALUE, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS_DATA_REQUEST", function() { return FETCH_NEWS_DATA_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS_DATA_REQUEST_STARTED", function() { return FETCH_NEWS_DATA_REQUEST_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS_DATA_SUCCESS", function() { return FETCH_NEWS_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS_DATA_FAIL", function() { return FETCH_NEWS_DATA_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SEARCH_VALUE", function() { return CHANGE_SEARCH_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_FROM_DATE_VALUE", function() { return CHANGE_FROM_DATE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_TO_DATE_VALUE", function() { return CHANGE_TO_DATE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const FETCH_NEWS_DATA_REQUEST = 'FETCH_NEWS_DATA_REQUEST';
const FETCH_NEWS_DATA_REQUEST_STARTED = 'FETCH_NEWS_DATA_REQUEST_STARTED';
const FETCH_NEWS_DATA_SUCCESS = 'FETCH_NEWS_DATA_SUCCESS';
const FETCH_NEWS_DATA_FAIL = 'FETCH_NEWS_DATA_FAIL';
const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
const CHANGE_FROM_DATE_VALUE = 'CHANGE_FROM_DATE_VALUE';
const CHANGE_TO_DATE_VALUE = 'CHANGE_TO_DATE_VALUE';
const initialState = {
  fetchState: undefined,
  news: [],
  currentPage: undefined,
  searchValue: '',
  from: undefined,
  to: undefined
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_DATA_REQUEST_STARTED:
      {
        return _objectSpread({}, state, {
          fetchState: 'fetch'
        });
      }

    case FETCH_NEWS_DATA_SUCCESS:
      {
        const {
          currentPage
        } = action;
        let currentPageData;

        if (currentPage === undefined) {
          currentPageData = 1;
        } else {
          currentPageData = currentPage;
        }

        return _objectSpread({}, state, {
          fetchState: 'success',
          news: action.result,
          currentPage: currentPageData
        });
      }

    case FETCH_NEWS_DATA_FAIL:
      {
        return _objectSpread({}, state, {
          fetchState: 'fail'
        });
      }

    case CHANGE_SEARCH_VALUE:
      {
        const {
          searchValue
        } = action;
        return _objectSpread({}, state, {
          searchValue
        });
      }

    case CHANGE_FROM_DATE_VALUE:
      {
        const {
          fromData
        } = action;
        return _objectSpread({}, state, {
          from: fromData
        });
      }

    case CHANGE_TO_DATE_VALUE:
      {
        const {
          toData
        } = action;
        return _objectSpread({}, state, {
          to: toData
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newsReducer);

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news */ "./redux/sagas/news.js");

 // all 함수를 통해 Saga들을 하나로 묶어줄수 있다.

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_news__WEBPACK_IMPORTED_MODULE_1__["watchNewsData"])()]);
}

/***/ }),

/***/ "./redux/sagas/news.js":
/*!*****************************!*\
  !*** ./redux/sagas/news.js ***!
  \*****************************/
/*! exports provided: fetchNewsData, watchNewsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNewsData", function() { return fetchNewsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchNewsData", function() { return watchNewsData; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_newsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/newsReducer */ "./redux/reducers/newsReducer.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");




const fetchNewsData = function* fetchNewsData(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_newsReducer__WEBPACK_IMPORTED_MODULE_2__["FETCH_NEWS_DATA_REQUEST_STARTED"]
    });
    const {
      currentPage,
      searchValue,
      from,
      to
    } = action;
    const q = searchValue;
    const url = Object(_lib_api__WEBPACK_IMPORTED_MODULE_3__["default"])(q, currentPage, from, to);
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])([axios__WEBPACK_IMPORTED_MODULE_1___default.a, 'get'], url);
    const result = data.data;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_newsReducer__WEBPACK_IMPORTED_MODULE_2__["FETCH_NEWS_DATA_SUCCESS"],
      result,
      currentPage
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_newsReducer__WEBPACK_IMPORTED_MODULE_2__["FETCH_NEWS_DATA_FAIL"]
    });
  }
};
const watchNewsData = function* watchNewsData() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_newsReducer__WEBPACK_IMPORTED_MODULE_2__["FETCH_NEWS_DATA_REQUEST"], fetchNewsData);
};

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./redux/sagas/index.js");





const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
const middlewares = [sagaMiddleware];
const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map
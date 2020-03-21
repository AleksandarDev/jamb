(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./.yarn/$$virtual/next-virtual-b443429368/0/cache/next-npm-9.3.1-25a6eb45dc-1.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Faleksandartoplek%2FDocuments%2Fjamb%2Fjambapp%2Fpages%2Findex.jsx!./":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/next-virtual-b443429368/0/cache/next-npm-9.3.1-25a6eb45dc-1.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Faleksandartoplek%2FDocuments%2Fjamb%2Fjambapp%2Fpages%2Findex.jsx ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.jsx */ "./pages/index.jsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./.yarn/cache/react-npm-16.13.1-56d408860d-1.zip/node_modules/react/index.js":
/*!******************************************************************************************************************************************!*\
  !*** delegated ./.yarn/cache/react-npm-16.13.1-56d408860d-1.zip/node_modules/react/index.js from dll-reference dll_39c7cba8761da30fa636 ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_39c7cba8761da30fa636 */ "dll-reference dll_39c7cba8761da30fa636"))("./.yarn/cache/react-npm-16.13.1-56d408860d-1.zip/node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-16.13.1-56d408860d-1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var data = {
  userName: "userName"
};
var apiBaseUrl = "https://jamb.azurewebsites.net";

function sendMessage(sender, messageText) {
  return axios.post("".concat(apiBaseUrl, "/api/messages"), {
    sender: sender,
    text: messageText
  }).then(function (resp) {
    return resp.data;
  });
}

var counter = 0;

function newMessage(message) {
  message.id = counter++; // vue transitions need an id

  data.messages.unshift(message);
}

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isReady = _useState[0],
      setIsReady = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var connection = new window.signalR.HubConnectionBuilder().withUrl("".concat(apiBaseUrl, "/api")).configureLogging(window.signalR.LogLevel.Information).build();
    connection.on('newMessage', newMessage);
    connection.onclose(function () {
      return console.log('disconnected');
    });
    connection.start().then(function () {
      return setIsReady(true);
    })["catch"](console.error);
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "Jamb"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, isReady ? "Spajanje..." : "Spojen"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 1:
/*!*********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Faleksandartoplek%2FDocuments%2Fjamb%2Fjambapp%2Fpages%2Findex.jsx ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Faleksandartoplek%2FDocuments%2Fjamb%2Fjambapp%2Fpages%2Findex.jsx! */"./.yarn/$$virtual/next-virtual-b443429368/0/cache/next-npm-9.3.1-25a6eb45dc-1.zip/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Faleksandartoplek%2FDocuments%2Fjamb%2Fjambapp%2Fpages%2Findex.jsx!./");


/***/ }),

/***/ "dll-reference dll_39c7cba8761da30fa636":
/*!*******************************************!*\
  !*** external "dll_39c7cba8761da30fa636" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_39c7cba8761da30fa636;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!****************************************************************************************************************************!*\
  !*** ./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_aleksandartoplek_Documents_jamb_jambapp_yarn_cache_babel_runtime_npm_7_7_2_f97af02eaa_1_zip_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./.yarn/cache/@babel-runtime-npm-7.7.2-f97af02eaa-1.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./.yarn/cache/react-npm-16.13.1-56d408860d-1.zip/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./.yarn/cache/axios-npm-0.19.2-e4e8599895-1.zip/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var data = {
  userName: "userName"
};
var apiBaseUrl = "https://jamb.azurewebsites.net";

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isReady = _useState[0],
      setIsReady = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      newMessageText = _useState3[0],
      setNewMessageText = _useState3[1];

  var sendMessageClick = function sendMessageClick() {
    sendMessage(data.userName, newMessageText);
  };

  function sendMessage(sender, messageText) {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(apiBaseUrl, "/api/messages"), {
      sender: sender,
      text: messageText
    }).then(function (resp) {
      return resp.data;
    });
  }

  var counter = 0;

  function newMessage(message) {
    message.id = counter++; // vue transitions need an id

    setMessages([message].concat(Object(_Users_aleksandartoplek_Documents_jamb_jambapp_yarn_cache_babel_runtime_npm_7_7_2_f97af02eaa_1_zip_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages)));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var connection = new window.signalR.HubConnectionBuilder().withUrl("".concat(apiBaseUrl, "/api")).configureLogging(window.signalR.LogLevel.Information).build();
    connection.on('newMessage', newMessage);
    connection.onclose(function () {
      return console.log('disconnected');
    });
    connection.start().then(function () {
      return setIsReady(true);
    })["catch"](function (err) {
      console.error(err);
      setIsReady(false);
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "Jamb"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, isReady ? "Spajanje..." : "Spojen"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("input", {
    value: newMessageText,
    onChange: function onChange(e) {
      return setNewMessageText(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return sendMessageClick();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Salji")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, messages.map(function (message) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, "(", message.id, ") ", message.text);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.04a2ceca50369f30623a.hot-update.js.map
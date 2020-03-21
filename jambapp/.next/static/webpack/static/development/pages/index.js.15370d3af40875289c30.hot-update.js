webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.15370d3af40875289c30.hot-update.js.map
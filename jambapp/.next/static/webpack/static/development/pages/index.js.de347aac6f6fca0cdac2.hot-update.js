webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Chat_ChatBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chat/ChatBox */ "./components/Chat/ChatBox.jsx");


var _this = undefined,
    _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function uuidv4() {
  return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var data = {
  userName: "guest-" + uuidv4()
};
var apiBaseUrl = "https://jamb.azurewebsites.net";

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isReady = _useState[0],
      setIsReady = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    sender: "test",
    text: 'bla bla'
  }]),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var sendMessageClick = function sendMessageClick(messageText) {
    sendMessage(data.userName, messageText);
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
    message.id = counter++;
    messages.unshift(message);
    setMessages(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(messages));
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
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "JAMB"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, data.userName), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, isReady ? "Connected" : "Loading..."), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_components_Chat_ChatBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    messages: messages,
    onSendMessage: sendMessageClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.de347aac6f6fca0cdac2.hot-update.js.map
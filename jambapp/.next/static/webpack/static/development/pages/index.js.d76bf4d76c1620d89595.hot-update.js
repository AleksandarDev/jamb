webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Chat/ChatBox.jsx":
/*!*************************************!*\
  !*** ./components/Chat/ChatBox.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatBox.module.scss */ "./components/Chat/ChatBox.module.scss");
/* harmony import */ var _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/components/Chat/ChatBox.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ChatBox = function ChatBox(props) {
  var messages = props.messages,
      onSendMessage = props.onSendMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      messageText = _useState[0],
      setMessageText = _useState[1];

  return __jsx("div", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, messages.map(function (message) {
    return __jsx("li", {
      key: message.id,
      className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.messageBlock,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.messageUser,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, message.sender), __jsx("span", {
      className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.messageContent,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, message.text));
  })), __jsx("div", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("input", {
    value: messageText,
    onChange: function onChange(e) {
      return setMessageText(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return onSendMessage(messageText);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Send")));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

/***/ })

})
//# sourceMappingURL=index.js.d76bf4d76c1620d89595.hot-update.js.map
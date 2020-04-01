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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Board/Board.jsx":
/*!************************************!*\
  !*** ./components/Board/Board.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.module.scss */ "./components/Board/Board.module.scss");
/* harmony import */ var _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/components/Board/Board.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ScoreCell = props => __jsx("td", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  onClick: e => props.value == null && props.hintValue != null && props.onSelect(e),
  className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.score, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreLarge, props.value == null && props.hintValue <= 0 && _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hintZero, props.value == null && props.hintValue > 0 && _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hint, props.selected && _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selected, props.disabled && _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreDisabled),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, props.value == null ? props.hintValue : props.value));

const ScoreRow = props => {
  const {
    className,
    index,
    values,
    disabled,
    hintValues,
    smallLabel,
    label,
    boardState,
    summarize,
    onCellClick
  } = props;
  const isValidHint = !disabled && [boardState.throwIndex > 0 && boardState.announcementIndex == null && boardState.downIndex >= index, boardState.throwIndex > 0 && boardState.announcementIndex == null && boardState.upIndex <= index, boardState.throwIndex > 0 && boardState.announcementIndex == null, boardState.throwIndex > 0 && (boardState.throwIndex <= 1 && boardState.announcementIndex == null || boardState.announcementIndex === index)];

  const handleSelect = i => {
    if (!isValidHint[i]) return;

    if (i < 3 || boardState.announcementIndex === index) {
      // Fill
      values[i] = hintValues[i];
      onCellClick({
        row: index,
        column: i,
        value: hintValues[i]
      });
    } else if (boardState.announcementIndex == null) {
      // Announcement
      onCellClick({
        row: index,
        column: i,
        value: null,
        isAnnouncement: true
      });
    }
  };

  return __jsx("tr", {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.score, !smallLabel && _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreLarge),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, label)), __jsx(ScoreCell, {
    value: values[0],
    disabled: disabled,
    hintValue: isValidHint[0] && hintValues[0],
    onSelect: () => handleSelect(0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx(ScoreCell, {
    value: values[1],
    disabled: disabled,
    hintValue: isValidHint[1] && hintValues[1],
    onSelect: () => handleSelect(1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx(ScoreCell, {
    value: values[2],
    disabled: disabled,
    hintValue: isValidHint[2] && hintValues[2],
    onSelect: () => handleSelect(2),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }), __jsx(ScoreCell, {
    value: values[3],
    disabled: disabled,
    hintValue: isValidHint[3] && hintValues[3],
    selected: !disabled && boardState.announcementIndex === index,
    onSelect: () => handleSelect(3),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), summarize && __jsx(ScoreCell, {
    value: values.reduce((sum, val) => sum + val, 0),
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }));
};

const Board = props => {
  const {
    boardValues,
    onBoardValuesChanged
  } = props;
  const diceValues = boardValues.diceValues;

  const handleCellClick = action => {
    onBoardValuesChanged(action, boardValues);
  };

  const numberScores = Array(6).fill(0).map((_, i) => diceValues.filter(d => d === i + 1).length * (i + 1));
  const diceValuesSum = diceValues.reduce((a, b) => a + b, 0);
  const minMaxScore = diceValuesSum;
  const diceValuesCount = Array(6).fill().map((_, i) => {
    return {
      value: i + 1,
      count: diceValues.filter(dv => dv === i + 1).length
    };
  });
  const diceValuesAboveTwo = diceValuesCount.filter(dvc => dvc.count >= 2);
  const diceValuesAboveThree = diceValuesCount.filter(dvc => dvc.count >= 3);
  const diceValuesAboveFour = diceValuesCount.filter(dvc => dvc.count >= 4);
  const diceValuesAboveFive = diceValuesCount.filter(dvc => dvc.count >= 5);
  const twoPairsScore = diceValuesAboveTwo.length >= 2 ? diceValuesAboveTwo[0].value * 2 + diceValuesAboveTwo[1].value * 2 + 10 : diceValuesAboveTwo.length === 1 && diceValuesAboveTwo[0].count >= 4 ? diceValuesAboveTwo[0].value * 4 + 10 : 0;
  const smallScaleScore = diceValuesAboveTwo.length <= 0 && diceValuesSum === 15 ? 35 : 0;
  const largeScaleScore = diceValuesAboveTwo.length <= 0 && diceValuesSum === 20 ? 45 : 0;
  const fullScore = diceValuesAboveThree.length > 0 && diceValuesAboveTwo.length > 1 ? diceValuesAboveThree[0].value * 3 + diceValuesAboveTwo.filter(dvat => dvat.value !== diceValuesAboveThree[0].value)[0].value * 2 + 20 : diceValuesAboveFive.length >= 1 ? diceValuesAboveFive[0].value * 5 + 20 : 0;
  const pokerScore = diceValuesAboveFour.length > 0 ? diceValuesAboveFour[0].value * 4 + 40 : 0;
  const yambScore = diceValuesAboveFive.length > 0 ? diceValuesAboveFour[0].value * 5 + 50 : 0;
  const boardState = {
    downIndex: boardValues.downIndex,
    upIndex: boardValues.upIndex,
    announcementIndex: boardValues.announcementIndex,
    throwIndex: boardValues.throwIndex
  }; // Sum

  const numbersSum = Array(4).fill().map((_, i) => {
    const sum = boardValues.numberScores.reduce((sum, item) => sum + item[i], 0);
    return sum >= 60 ? sum + 30 : sum;
  });
  const minMaxSum = Array(4).fill().map((_, i) => boardValues.max[i] != null && boardValues.min[i] != null && boardValues.numberScores[0][i] != null ? (boardValues.max[i] - boardValues.min[i]) * boardValues.numberScores[0][i] : null);
  const specialSum = Array(4).fill().map((_, i) => boardValues.twoPairs[i] + boardValues.scale[i] + boardValues.poker[i] + boardValues.full[i] + boardValues.yamb[i]);
  let rowIndex = 0;
  const diceStyles = [_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dice1, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dice2, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dice3, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dice4, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dice5, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dice6];
  return __jsx("div", {
    className: _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tableContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, __jsx("table", {
    className: _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.jambTable,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.score, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreLarge),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, "\u2B07")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.score, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreLarge),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }, "\u2B06")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.score, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreLarge),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 15
    }
  }, "\u2B07\u2B06")), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.score,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, "NAJAVA"))), Array(6).fill().map((_, i) => __jsx(ScoreRow, {
    index: rowIndex++,
    label: __jsx("div", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dice, diceStyles[i]),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 24
      }
    }),
    values: boardValues.numberScores[i],
    hintValues: Array(4).fill(numberScores[i]),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  })), __jsx(ScoreRow, {
    disabled: true,
    label: "\u2211",
    className: _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sum,
    values: numbersSum,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    index: rowIndex++,
    label: "MAX",
    smallLabel: true,
    values: boardValues.max,
    hintValues: Array(4).fill(minMaxScore),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    index: rowIndex++,
    label: "MIN",
    smallLabel: true,
    values: boardValues.min,
    hintValues: Array(4).fill(minMaxScore),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    disabled: true,
    label: "RAZLIKA X1",
    smallLabel: true,
    className: _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sum,
    values: minMaxSum,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    index: rowIndex++,
    label: "2 PARA",
    smallLabel: true,
    values: boardValues.twoPairs,
    hintValues: Array(4).fill(twoPairsScore),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    index: rowIndex++,
    label: "SKALA",
    smallLabel: true,
    values: boardValues.scale,
    hintValues: Array(4).fill(largeScaleScore || smallScaleScore),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    index: rowIndex++,
    label: "FULL",
    smallLabel: true,
    values: boardValues.full,
    hintValues: Array(4).fill(fullScore),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    index: rowIndex++,
    label: "POKER",
    smallLabel: true,
    values: boardValues.poker,
    hintValues: Array(4).fill(pokerScore),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    index: rowIndex++,
    label: "JAMB",
    smallLabel: true,
    values: boardValues.yamb,
    hintValues: Array(4).fill(yambScore),
    boardState: boardState,
    onCellClick: handleCellClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 11
    }
  }), __jsx(ScoreRow, {
    disabled: true,
    label: "\u2211",
    className: _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sum,
    values: specialSum,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 11
    }
  }), __jsx("tr", {
    className: _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sum,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }), __jsx("td", {
    colSpan: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.score, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreDisabled, _Board_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scoreLarge),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  }, numbersSum.reduce((sum, val) => sum + val, 0) + minMaxSum.reduce((sum, val) => sum + val, 0) + specialSum.reduce((sum, val) => sum + val, 0)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./components/Board/Board.module.scss":
/*!********************************************!*\
  !*** ./components/Board/Board.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tableContainer": "Board_tableContainer__11JPn",
	"jambTable": "Board_jambTable__2XNGH",
	"score": "Board_score__36vPV",
	"hintZero": "Board_hintZero__2Zy87",
	"hint": "Board_hint__pu2Gb",
	"selected": "Board_selected__1hRu4",
	"scoreDisabled": "Board_scoreDisabled__2WxYU",
	"scoreLarge": "Board_scoreLarge__1z0GB",
	"sum": "Board_sum__3Cd39",
	"dice": "Board_dice__1hDnr",
	"dice1": "Board_dice1__qJXDI",
	"dice2": "Board_dice2__z7rWp",
	"dice3": "Board_dice3__3YlGe",
	"dice4": "Board_dice4__30xjx",
	"dice5": "Board_dice5__1QMNN",
	"dice6": "Board_dice6__1Tekh"
};

/***/ }),

/***/ "./components/Chat/ChatBox.jsx":
/*!*************************************!*\
  !*** ./components/Chat/ChatBox.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatBox.module.scss */ "./components/Chat/ChatBox.module.scss");
/* harmony import */ var _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/components/Chat/ChatBox.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ChatBox = props => {
  const {
    messages,
    onSendMessage
  } = props;
  const {
    0: messageText,
    1: setMessageText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return __jsx("div", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, messages.map(message => __jsx("li", {
    key: message.id,
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.messageBlock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.messageUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, message.sender), __jsx("span", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.messageContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, message.text)))), __jsx("div", {
    className: _ChatBox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("input", {
    value: messageText,
    onChange: e => setMessageText(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: () => onSendMessage(messageText),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Send")));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatBox);

/***/ }),

/***/ "./components/Chat/ChatBox.module.scss":
/*!*********************************************!*\
  !*** ./components/Chat/ChatBox.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"root": "ChatBox_root__1Ovyr",
	"messageBlock": "ChatBox_messageBlock__8xkRO",
	"messageUser": "ChatBox_messageUser__26ol0"
};

/***/ }),

/***/ "./components/Dice/Dice.jsx":
/*!**********************************!*\
  !*** ./components/Dice/Dice.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dice.module.scss */ "./components/Dice/Dice.module.scss");
/* harmony import */ var _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dice_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/components/Dice/Dice.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Dice = props => {
  const {
    value,
    isSelected,
    isRolling
  } = props;
  let diceValueStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue0;

  switch (value) {
    case 1:
      diceValueStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue1;
      break;

    case 2:
      diceValueStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue2;
      break;

    case 3:
      diceValueStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue3;
      break;

    case 4:
      diceValueStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue4;
      break;

    case 5:
      diceValueStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue5;
      break;

    case 6:
      diceValueStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue6;
      break;

    default:
      break;
  }

  const rollingStyle = _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[`rollingStyle${Math.floor(Math.random() * 4)}`];
  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(isSelected && _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.selected, _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.selectionContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(_Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root, _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.diceValue, diceValueStyle, !isSelected && isRolling && _Dice_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rolling, !isSelected && isRolling && rollingStyle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dice);

/***/ }),

/***/ "./components/Dice/Dice.module.scss":
/*!******************************************!*\
  !*** ./components/Dice/Dice.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"root": "Dice_root__2XBSj",
	"selectionContainer": "Dice_selectionContainer___RHmx",
	"selected": "Dice_selected__3Y0D9",
	"diceValue0": "Dice_diceValue0__1C_xh",
	"diceValue1": "Dice_diceValue1__1QWIP",
	"diceValue2": "Dice_diceValue2__1Rm4t",
	"diceValue3": "Dice_diceValue3__2-R8d",
	"diceValue4": "Dice_diceValue4__2PGHg",
	"diceValue5": "Dice_diceValue5__2Y23A",
	"diceValue6": "Dice_diceValue6__2NtPW",
	"diceValue": "Dice_diceValue__V4uRP",
	"rollingStyle0": "Dice_rollingStyle0__9wK1t",
	"enlarge": "Dice_enlarge__1Cyku",
	"shake1": "Dice_shake1__1P9T9",
	"pulse0": "Dice_pulse0__1wKaT",
	"rollingStyle1": "Dice_rollingStyle1__1lA36",
	"pulse1": "Dice_pulse1__1VB4S",
	"rollingStyle2": "Dice_rollingStyle2__2nahU",
	"shake2": "Dice_shake2__2kmhQ",
	"pulse2": "Dice_pulse2__2Qrw0",
	"rollingStyle3": "Dice_rollingStyle3__2ZXFj",
	"pulse3": "Dice_pulse3__rJc6z",
	"rolling": "Dice_rolling__1ZreS"
};

/***/ }),

/***/ "./components/DiceSet/DiceSet.jsx":
/*!****************************************!*\
  !*** ./components/DiceSet/DiceSet.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dice_Dice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dice/Dice */ "./components/Dice/Dice.jsx");
/* harmony import */ var _DiceSet_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiceSet.module.scss */ "./components/DiceSet/DiceSet.module.scss");
/* harmony import */ var _DiceSet_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DiceSet_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/components/DiceSet/DiceSet.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






let roll1 = null;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const DiceSet = props => {
  const {
    currentRound,
    throwIndex,
    onDiceValueChange
  } = props;
  const {
    0: diceValues,
    1: setDiceValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    value: 0,
    isSelected: false
  }, {
    value: 0,
    isSelected: false
  }, {
    value: 0,
    isSelected: false
  }, {
    value: 0,
    isSelected: false
  }, {
    value: 0,
    isSelected: false
  }]);
  const {
    0: canThrow,
    1: setCanThrow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCanThrow(throwIndex < 3);
  }, [throwIndex]);
  const {
    0: round,
    1: setRound
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const reset = () => {
    for (let i = 0; i < diceValues.length; i++) {
      diceValues[i].value = 0;
      diceValues[i].isSelected = false;
    }

    setDiceValues([...diceValues]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentRound != round) {
      reset();
    }

    setRound(currentRound);
  }, [currentRound]);

  const handleDiceClick = i => {
    if (diceValues[i].value <= 0) return;
    diceValues[i].isSelected = !diceValues[i].isSelected;
    setDiceValues([...diceValues]);
  };

  const handleThrow = () => {
    for (let i = 0; i < diceValues.length; i++) {
      if (!diceValues[i].isSelected) {
        diceValues[i].value = getRandomInt(6) + 1;
      }
    }

    setDiceValues([...diceValues]);
    onDiceValueChange(diceValues.map(d => d.value)); // Roll dice

    setIsRolling(true);
    setTimeout(() => setIsRolling(false), 400); // Play sound

    if (roll1 == null) roll1 = new Audio("/static/roll1.mp3");
    roll1.play();
  };

  const {
    0: isRolling,
    1: setIsRolling
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    direction: "column",
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    direction: "column",
    alignItems: "center",
    justify: "flex-start",
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, diceValues.map((diceValue, i) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    onClick: () => handleDiceClick(i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(_Dice_Dice__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: "dice" + i,
    value: diceValue.value,
    isSelected: diceValue.isSelected,
    isRolling: isRolling,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, Array(3).fill(1).map((item, i) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_DiceSet_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.throwIndicatorStep, throwIndex > i && _DiceSet_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.throwIndicatorStepUsed),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, i + 1))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    className: _DiceSet_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.throwButton,
    onClick: handleThrow,
    disabled: !canThrow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/throw.png",
    width: 30,
    height: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DiceSet);

/***/ }),

/***/ "./components/DiceSet/DiceSet.module.scss":
/*!************************************************!*\
  !*** ./components/DiceSet/DiceSet.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"throwIndicatorStep": "DiceSet_throwIndicatorStep__zENPt",
	"throwIndicatorStepUsed": "DiceSet_throwIndicatorStepUsed__UcVBH"
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Chat_ChatBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Chat/ChatBox */ "./components/Chat/ChatBox.jsx");
/* harmony import */ var _components_Board_Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Board/Board */ "./components/Board/Board.jsx");
/* harmony import */ var _components_DiceSet_DiceSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DiceSet/DiceSet */ "./components/DiceSet/DiceSet.jsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ "./pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/aleksandartoplek/Documents/jamb/jambapp/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function uuidv4() {
  return "xxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

const data = {
  userName: "guest-" + uuidv4()
};
const apiBaseUrl = "https://jamb.azurewebsites.net";

const Index = () => {
  const {
    0: isReady,
    1: setIsReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: messages,
    1: setMessages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    sender: "test",
    text: "bla bla"
  }]);

  const sendMessageClick = messageText => {
    sendMessage(data.userName, messageText);
  };

  function sendMessage(sender, messageText) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${apiBaseUrl}/api/messages`, {
      sender: sender,
      text: messageText
    }).then(resp => resp.data);
  }

  let counter = 0;

  function newMessage(message) {
    message.id = counter++;
    messages.unshift(message);
    setMessages([...messages]);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const connection = new window.signalR.HubConnectionBuilder().withUrl(`${apiBaseUrl}/api`).configureLogging(window.signalR.LogLevel.Information).build();
    connection.on("newMessage", newMessage);
    connection.onclose(() => console.log("disconnected"));
    connection.start().then(() => setIsReady(true)).catch(err => {
      console.error(err);
      setIsReady(false);
    });
  }, []);

  const handleDiceValueChange = newDiceValues => {
    console.log("Throw", newDiceValues);
    setBoardValues(_objectSpread({}, boardValues, {
      diceValues: newDiceValues,
      throwIndex: boardValues.throwIndex + 1
    }));
  };

  let oldBoardValue = null;
  const localStorageBoardValue = window.localStorage && window.localStorage.getItem("boardData", boardValues);

  if (localStorageBoardValue) {
    try {
      oldBoardValue = JSON.parse(localStorageBoardValue);
      if (!(oldBoardValue && typeof oldBoardValue.round === "number")) oldBoardValue = null;
    } catch {}
  }

  const {
    0: boardValues,
    1: setBoardValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(oldBoardValue || {
    numberScores: [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]],
    min: [null, null, null, null],
    max: [null, null, null, null],
    twoPairs: [null, null, null, null],
    scale: [null, null, null, null],
    full: [null, null, null, null],
    poker: [null, null, null, null],
    yamb: [null, null, null, null],
    downIndex: 0,
    upIndex: 12,
    announcementIndex: null,
    round: 0,
    throwIndex: 0,
    diceValues: [0, 0, 0, 0, 0]
  });

  const handleBoardValueSet = (action, newBoardValues) => {
    console.log("Action", action);

    if (action.value != null) {
      setBoardValues(_objectSpread({}, newBoardValues, {
        downIndex: newBoardValues.downIndex + (action.column === 0 ? 1 : 0),
        upIndex: newBoardValues.upIndex - (action.column === 1 ? 1 : 0),
        announcementIndex: null,
        throwIndex: 0,
        round: boardValues.round + 1,
        diceValues: [0, 0, 0, 0, 0]
      }));
    } else if (action.isAnnouncement) {
      setBoardValues(_objectSpread({}, newBoardValues, {
        announcementIndex: action.row
      }));
    } else {
      console.warning("Ignored user action");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.localStorage != null && window.localStorage.setItem("boardData", JSON.stringify(boardValues));
  }, [boardValues]);
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    direction: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx(_components_Board_Board__WEBPACK_IMPORTED_MODULE_3__["default"], {
    boardValues: boardValues,
    onBoardValuesChanged: handleBoardValueSet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(_components_DiceSet_DiceSet__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentRound: boardValues.round,
    throwIndex: boardValues.throwIndex,
    onDiceValueChange: handleDiceValueChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksandartoplek/Documents/jamb/jambapp/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
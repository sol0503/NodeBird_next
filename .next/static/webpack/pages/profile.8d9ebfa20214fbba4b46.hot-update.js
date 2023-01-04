webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditFrom.js":
/*!****************************************!*\
  !*** ./components/NicknameEditFrom.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "C:\\Users\\jsk\\Desktop\\\uB9CC\uB4E0\uAC83\uB4E4\\visual code \uB9CC\uB4E0 \uAC83\uB4E4\\\uC778\uD504\uB7F0\\nodeBird\\ch1\\prepare\\front\\components\\NicknameEditFrom.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var NicknameEditFrom = function NicknameEditFrom() {
  _s();
  var style = useMemo(function () {
    return {
      marginButton: "20px",
      border: "1px,solid,#d9d9d9",
      padding: "20px"
    };
  });
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
    addonBefore: "\uB2C9\uB124\uC784",
    enterButton: "\uC218\uC815",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};
_s(NicknameEditFrom, "03TOej/Atx47IHUj0GasUXSIbAc=");
_c = NicknameEditFrom;
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditFrom);
var _c;
$RefreshReg$(_c, "NicknameEditFrom");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NicknameEditFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NicknameEditFrom */ "./components/NicknameEditFrom.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\jsk\\Desktop\\\uB9CC\uB4E0\uAC83\uB4E4\\visual code \uB9CC\uB4E0 \uAC83\uB4E4\\\uC778\uD504\uB7F0\\nodeBird\\ch1\\prepare\\front\\pages\\profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Profile = function Profile() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "\uB0B4 \uD504\uB85C\uD544 | NodeBird")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_components_NicknameEditFrom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(FollowList, {
    header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
    data: followingList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(FollowList, {
    header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
    data: follerList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })));
};
_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);
var _c;
$RefreshReg$(_c, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGcm9tLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZyb20iLCJzdHlsZSIsInVzZU1lbW8iLCJtYXJnaW5CdXR0b24iLCJib3JkZXIiLCJwYWRkaW5nIiwiUHJvZmlsZSIsImZvbGxvd2luZ0xpc3QiLCJmb2xsZXJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDVDtBQUUxQixJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCLEdBQVM7RUFBQTtFQUM3QixJQUFNQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQztJQUFBLE9BQU87TUFDM0JDLFlBQVksRUFBRSxNQUFNO01BQ3BCQyxNQUFNLEVBQUUsbUJBQW1CO01BQzNCQyxPQUFPLEVBQUU7SUFDWCxDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBQ0gsT0FDRSxNQUFDLHlDQUFJO0lBQUMsS0FBSyxFQUFFSixLQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDakIsTUFBQywwQ0FBSyxDQUFDLE1BQU07SUFBQyxXQUFXLEVBQUMsb0JBQUs7SUFBQyxXQUFXLEVBQUMsY0FBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDOUM7QUFFWCxDQUFDO0FBQUMsR0FYSUQsZ0JBQWdCO0FBQUEsS0FBaEJBLGdCQUFnQjtBQVlQQSwrRUFBZ0IsRUFBQztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmdCO0FBQ25CO0FBQ2lDO0FBQzlELElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQVM7RUFDcEIsT0FDRTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZ0RBQUk7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNIO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMENBQStCLENBQzFCLEVBQ1AsTUFBQyw2REFBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ1IsTUFBQyxvRUFBZ0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3BCLE1BQUMsVUFBVTtJQUFDLE1BQU0sRUFBQyxpQ0FBUTtJQUFDLElBQUksRUFBRUMsYUFBYztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDbkQsTUFBQyxVQUFVO0lBQUMsTUFBTSxFQUFDLGlDQUFRO0lBQUMsSUFBSSxFQUFFQyxVQUFXO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUN0QyxDQUNYO0FBRVAsQ0FBQztBQUFDLEtBYklGLE9BQU87QUFjRUEsc0VBQU8sRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS44ZDllYmZhMjAyMTRmYmJhNGI0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOaWNrbmFtZUVkaXRGcm9tID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgbWFyZ2luQnV0dG9uOiBcIjIwcHhcIixcclxuICAgIGJvcmRlcjogXCIxcHgsc29saWQsI2Q5ZDlkOVwiLFxyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgfSkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICA8SW5wdXQuU2VhcmNoIGFkZG9uQmVmb3JlPVwi64uJ64Sk7J6EXCIgZW50ZXJCdXR0b249XCLsiJjsoJVcIiAvPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZyb207XHJcbiIsImltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZyb20gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0RnJvbVwiO1xyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+64K0IO2UhOuhnO2VhCB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIDxOaWNrbmFtZUVkaXRGcm9tIC8+XHJcbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2luZ0xpc3R9IC8+XHJcbiAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e2ZvbGxlckxpc3R9IC8+XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/signup",{

/***/ "./components/LoginFrom.js":
/*!*********************************!*\
  !*** ./components/LoginFrom.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject,
  _this = undefined,
  _jsxFileName = "C:\\Users\\jsk\\Desktop\\\uB9CC\uB4E0\uAC83\uB4E4\\visual code \uB9CC\uB4E0 \uAC83\uB4E4\\\uC778\uD504\uB7F0\\nodeBird\\ch1\\prepare\\front\\components\\LoginFrom.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 10px;\n"])));
_c = ButtonWrapper;
var LoginForm = function LoginForm(_ref) {
  _s();
  var setIsLoggedIn = _ref.setIsLoggedIn;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
    id = _useState[0],
    setId = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
    password = _useState2[0],
    setPassword = _useState2[1];
  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      marginTop: 10
    };
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return __jsx(FromWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    value: password,
    type: "password",
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx(ButtonWrapper, {
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};
_s(LoginForm, "1aGHXfZCOYC4HpSOEYiklXguE3Y=");
_c2 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var _c, _c2;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZyb20uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwib25DaGFuZ2VJZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VQYXNzd29yZCIsInN0eWxlIiwidXNlTWVtbyIsIm1hcmdpblRvcCIsIm9uU3VibWl0Rm9ybSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNuQjtBQUNkO0FBQ1U7QUFFdkMsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLHNLQUUvQjtBQUFDLEtBRklGLGFBQWE7QUFJbkIsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVMsT0FBMEI7RUFBQTtFQUFBLElBQXBCQyxhQUFhLFFBQWJBLGFBQWE7RUFDaEMsZ0JBQW9CQyxzREFBUSxDQUFDLEVBQUUsQ0FBQztJQUF6QkMsRUFBRTtJQUFFQyxLQUFLO0VBQ2hCLGlCQUFnQ0Ysc0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBckNHLFFBQVE7SUFBRUMsV0FBVztFQUM1QixJQUFNQyxVQUFVLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBQyxFQUFLO0lBQ3BDTCxLQUFLLENBQUNLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQU1DLGdCQUFnQixHQUFHSix5REFBVyxDQUFDLFVBQUNDLENBQUMsRUFBSztJQUMxQ0gsV0FBVyxDQUFDRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQzdCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixJQUFNRSxLQUFLLEdBQUdDLHFEQUFPLENBQ25CO0lBQUEsT0FBTztNQUNMQyxTQUFTLEVBQUU7SUFDYixDQUFDO0VBQUEsQ0FBQyxFQUNGLEVBQUUsQ0FDSDtFQUNELElBQU1DLFlBQVksR0FBR1IseURBQVcsQ0FDOUIsVUFBQ0MsQ0FBQyxFQUFLO0lBQ0xRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixFQUFFLEVBQUVFLFFBQVEsQ0FBQztJQUN6QkosYUFBYSxDQUFDLElBQUksQ0FBQztFQUNyQixDQUFDLEVBQ0QsQ0FBQ0UsRUFBRSxFQUFFRSxRQUFRLENBQUMsQ0FDZjtFQUNELE9BQ0UsTUFBQyxXQUFXO0lBQUMsUUFBUSxFQUFFVyxZQUFhO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDbEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQU8sT0FBTyxFQUFDLFNBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx3QkFBWSxFQUNwQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQU0sRUFDTixNQUFDLDBDQUFLO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUViLEVBQUc7SUFBQyxRQUFRLEVBQUVJLFVBQVc7SUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUM5RCxFQUNOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLE9BQU8sRUFBQyxlQUFlO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBQWEsRUFDM0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFNLEVBQ04sTUFBQywwQ0FBSztJQUNKLElBQUksRUFBQyxlQUFlO0lBQ3BCLEtBQUssRUFBRUYsUUFBUztJQUNoQixJQUFJLEVBQUMsVUFBVTtJQUNmLFFBQVEsRUFBRU8sZ0JBQWlCO0lBQzNCLFFBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNSLENBQ0UsRUFDTixNQUFDLGFBQWE7SUFBQyxLQUFLLEVBQUVDLEtBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMxQixNQUFDLDJDQUFNO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxRQUFRLEVBQUMsUUFBUTtJQUFDLE9BQU8sRUFBRSxLQUFNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0JBRS9DLEVBQ1QsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDbEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsMkNBQU07SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFBYyxDQUNuQixDQUNDLENBQ08sQ0FDSjtBQUVsQixDQUFDO0FBQUMsR0FwREliLFNBQVM7QUFBQSxNQUFUQSxTQUFTO0FBcURBQSx3RUFBUyxFQUFDO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC44MmIxMmQ4YjFlNjE4MmRkOWU3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7IHNldElzTG9nZ2VkSW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCk7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgW2lkLCBwYXNzd29yZF1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJvbVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbldyYXBwZXIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtmYWxzZX0+XHJcbiAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICA8L0Zyb21XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
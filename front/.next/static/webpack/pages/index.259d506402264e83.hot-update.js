"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./app/components/layout/Navigation/MenuContainer/Menu.tsx":
/*!*****************************************************************!*\
  !*** ./app/components/layout/Navigation/MenuContainer/Menu.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MenuContainer_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuContainer.module.sass */ \"./app/components/layout/Navigation/MenuContainer/MenuContainer.module.sass\");\n/* harmony import */ var _MenuContainer_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MenuContainer_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_AuthItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/AuthItems */ \"./app/components/layout/Navigation/MenuContainer/auth/AuthItems.tsx\");\n\n\n\nconst Menu = (param)=>{\n    let { menu: { items , title  }  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_MenuContainer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().menu),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MenuContainer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Рабочий стол\\\\Blub\\\\Sites\\\\ReactSites\\\\next\\\\online-cinema\\\\front\\\\app\\\\components\\\\layout\\\\Navigation\\\\MenuContainer\\\\Menu.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_MenuContainer_module_sass__WEBPACK_IMPORTED_MODULE_2___default().ul),\n                children: title === \"General\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_AuthItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Рабочий стол\\\\Blub\\\\Sites\\\\ReactSites\\\\next\\\\online-cinema\\\\front\\\\app\\\\components\\\\layout\\\\Navigation\\\\MenuContainer\\\\Menu.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 28\n                }, undefined) : null\n            }, void 0, false, {\n                fileName: \"D:\\\\Рабочий стол\\\\Blub\\\\Sites\\\\ReactSites\\\\next\\\\online-cinema\\\\front\\\\app\\\\components\\\\layout\\\\Navigation\\\\MenuContainer\\\\Menu.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Рабочий стол\\\\Blub\\\\Sites\\\\ReactSites\\\\next\\\\online-cinema\\\\front\\\\app\\\\components\\\\layout\\\\Navigation\\\\MenuContainer\\\\Menu.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvTmF2aWdhdGlvbi9NZW51Q29udGFpbmVyL01lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRWdEO0FBRVI7QUFHeEMsTUFBTUUsT0FBNEIsU0FBZ0M7UUFBL0IsRUFBRUMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRSxHQUFFO0lBQzVELHFCQUNDLDhEQUFDQztRQUFJQyxXQUFXUCx3RUFBVzs7MEJBQzFCLDhEQUFDTTtnQkFBSUMsV0FBV1AsMkVBQWM7MEJBQUdLOzs7Ozs7MEJBQ2pDLDhEQUFDSTtnQkFBR0YsV0FBV1Asc0VBQVM7MEJBQ3RCSyxVQUFVLDBCQUFZLDhEQUFDSix1REFBU0E7Ozs7Z0NBQU0sSUFBSTs7Ozs7Ozs7Ozs7O0FBSS9DO0tBVE1DO0FBV04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbGF5b3V0L05hdmlnYXRpb24vTWVudUNvbnRhaW5lci9NZW51LnRzeD84OGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVudUNvbnRhaW5lci5tb2R1bGUuc2FzcydcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXHJcbmltcG9ydCBBdXRoSXRlbXMgZnJvbSAnLi9hdXRoL0F1dGhJdGVtcydcclxuaW1wb3J0IHsgSU1lbnUgfSBmcm9tICcuL21lbnUuaW50ZXJmYWNlJ1xyXG5cclxuY29uc3QgTWVudTogRkM8eyBtZW51OiBJTWVudSB9PiA9ICh7IG1lbnU6IHsgaXRlbXMsIHRpdGxlIH0gfSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9Pnt0aXRsZX08L2Rpdj5cclxuXHRcdFx0PHVsIGNsYXNzTmFtZT17c3R5bGVzLnVsfT5cclxuXHRcdFx0XHR7dGl0bGUgPT09ICdHZW5lcmFsJyA/IDxBdXRoSXRlbXMgLz4gOiBudWxsfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJBdXRoSXRlbXMiLCJNZW51IiwibWVudSIsIml0ZW1zIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkaW5nIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/layout/Navigation/MenuContainer/Menu.tsx\n"));

/***/ })

});
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

/***/ "./app/config/api.config.ts":
/*!**********************************!*\
  !*** ./app/config/api.config.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": function() { return /* binding */ API_URL; },\n/* harmony export */   \"getActorsUrl\": function() { return /* binding */ getActorsUrl; },\n/* harmony export */   \"getAuthUrl\": function() { return /* binding */ getAuthUrl; },\n/* harmony export */   \"getGenresUrl\": function() { return /* binding */ getGenresUrl; },\n/* harmony export */   \"getMoviesUrl\": function() { return /* binding */ getMoviesUrl; },\n/* harmony export */   \"getRatingUrl\": function() { return /* binding */ getRatingUrl; },\n/* harmony export */   \"getUserUrl\": function() { return /* binding */ getUserUrl; }\n/* harmony export */ });\nconst API_URL = \"\".concat(\"http://localhost:3000\", \"/api\");\nconst getAuthUrl = (string)=>\"/auth/\".concat(string);\nconst getUserUrl = (string)=>\"/users/\".concat(string);\nconst getGenresUrl = (string)=>\"/genres/\".concat(string);\nconst getMoviesUrl = (string)=>\"/movies/\".concat(string);\nconst getActorsUrl = (string)=>\"/actors/\".concat(string);\nconst getRatingUrl = (string)=>\"/ratings/\".concat(string);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29uZmlnL2FwaS5jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLE1BQU1BLFVBQVUsR0FBdUIsT0FBcEJDLHVCQUFtQixFQUFDLFFBQUs7QUFFNUMsTUFBTUcsYUFBYSxDQUFDQyxTQUFtQixTQUFnQixPQUFQQSxRQUFRO0FBQ3hELE1BQU1DLGFBQWEsQ0FBQ0QsU0FBbUIsVUFBaUIsT0FBUEEsUUFBUTtBQUN6RCxNQUFNRSxlQUFlLENBQUNGLFNBQW1CLFdBQWtCLE9BQVBBLFFBQVE7QUFDNUQsTUFBTUcsZUFBZSxDQUFDSCxTQUFtQixXQUFrQixPQUFQQSxRQUFRO0FBQzVELE1BQU1JLGVBQWUsQ0FBQ0osU0FBbUIsV0FBa0IsT0FBUEEsUUFBUTtBQUM1RCxNQUFNSyxlQUFlLENBQUNMLFNBQW1CLFlBQW1CLE9BQVBBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbmZpZy9hcGkuY29uZmlnLnRzPzUzZjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBgJHtwcm9jZXNzLmVudi5BUFBfVVJMfS9hcGlgXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QXV0aFVybCA9IChzdHJpbmc6IHN0cmluZykgPT4gYC9hdXRoLyR7c3RyaW5nfWBcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJVcmwgPSAoc3RyaW5nOiBzdHJpbmcpID0+IGAvdXNlcnMvJHtzdHJpbmd9YFxyXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgL2dlbnJlcy8ke3N0cmluZ31gXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZpZXNVcmwgPSAoc3RyaW5nOiBzdHJpbmcpID0+IGAvbW92aWVzLyR7c3RyaW5nfWBcclxuZXhwb3J0IGNvbnN0IGdldEFjdG9yc1VybCA9IChzdHJpbmc6IHN0cmluZykgPT4gYC9hY3RvcnMvJHtzdHJpbmd9YFxyXG5leHBvcnQgY29uc3QgZ2V0UmF0aW5nVXJsID0gKHN0cmluZzogc3RyaW5nKSA9PiBgL3JhdGluZ3MvJHtzdHJpbmd9YFxyXG4iXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJBUFBfVVJMIiwiZ2V0QXV0aFVybCIsInN0cmluZyIsImdldFVzZXJVcmwiLCJnZXRHZW5yZXNVcmwiLCJnZXRNb3ZpZXNVcmwiLCJnZXRBY3RvcnNVcmwiLCJnZXRSYXRpbmdVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/config/api.config.ts\n"));

/***/ })

});
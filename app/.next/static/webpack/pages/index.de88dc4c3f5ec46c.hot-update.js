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

/***/ "./components/Banner.tsx":
/*!*******************************!*\
  !*** ./components/Banner.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/movie */ \"./constants/movie.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Banner(param) {\n    var netflixOriginals = param.netflixOriginals;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), movie = ref[0], setMovie = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);\n    }, [\n        netflixOriginals\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 lef-0 -z-10 h-[95vh] w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"\".concat(_constants_movie__WEBPACK_IMPORTED_MODULE_3__.baseUrl).concat((movie === null || movie === void 0 ? void 0 : movie.backdrop_path) || (movie === null || movie === void 0 ? void 0 : movie.poster_path)),\n                    layout: \"fill\",\n                    objectFit: \"cover\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold lg:text-7xl md:text-4xl\",\n                children: (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.original_name)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl\",\n                children: movie === null || movie === void 0 ? void 0 : movie.overview\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bannerButton\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FaPlay, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 46\n                            }, this),\n                            \"Play\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bannerButton\",\n                        children: \"More Info\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mwtel\\\\OneDrive\\\\Documentos\\\\Projetos\\\\Projetos Portif\\xf3lio\\\\Netflix\\\\app\\\\components\\\\Banner.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVjO0FBQ0M7O0FBTTdDLFNBQVNJLE1BQU0sQ0FBRSxLQUEyQixFQUFFO1FBQTdCLGdCQUFrQixHQUFsQixLQUEyQixDQUF6QkMsZ0JBQWdCOztJQUUvQixJQUEwQkgsR0FBNEIsR0FBNUJBLCtDQUFRLENBQWUsSUFBSSxDQUFDLEVBWDFELEtBV2dCLEdBQWNBLEdBQTRCLEdBQTFDLEVBWGhCLFFBVzBCLEdBQUlBLEdBQTRCLEdBQWhDO0lBRXRCRCxnREFBUyxDQUFDLFdBQU07UUFDWk0sUUFBUSxDQUNKRixnQkFBZ0IsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdMLGdCQUFnQixDQUFDTSxNQUFNLENBQUMsQ0FBQyxDQUNwRTtLQUNSLEVBQUU7UUFBQ04sZ0JBQWdCO0tBQUMsQ0FBQztJQUV4QixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0ZBQWdGOzswQkFDM0YsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7MEJBQ3pELDRFQUFDYixtREFBSztvQkFDTmMsR0FBRyxFQUFFLEVBQUMsQ0FBWVIsTUFBMEMsQ0FBcERILHFEQUFPLENBQThDLFFBQTNDRyxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBZSxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLEtBQUssQ0FBRVMsYUFBYSxLQUFJVCxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBYSxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLEtBQUssQ0FBRVUsV0FBVyxFQUFFO29CQUM5REMsTUFBTSxFQUFDLE1BQU07b0JBQ2JDLFNBQVMsRUFBQyxPQUFPOzs7Ozt3QkFDZjs7Ozs7b0JBQ0E7MEJBRU4sOERBQUNDLElBQUU7Z0JBQUNOLFNBQVMsRUFBQyw0Q0FBNEM7MEJBQ3JEUCxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLEtBQUssQ0FBRWMsS0FBSyxLQUFJZCxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTSxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLEtBQUssQ0FBRWUsSUFBSSxLQUFJZixDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBZSxHQUFwQkEsS0FBQUEsQ0FBb0IsR0FBcEJBLEtBQUssQ0FBRWdCLGFBQWE7Ozs7O29CQUNuRDswQkFDTCw4REFBQ0MsR0FBQztnQkFBQ1YsU0FBUyxFQUFDLGtFQUFrRTswQkFBRVAsS0FBSyxhQUFMQSxLQUFLLFdBQVUsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxLQUFLLENBQUVrQixRQUFROzs7OztvQkFBSzswQkFFckcsOERBQUNaLEtBQUc7O2tDQUNBLDhEQUFDYSxRQUFNO3dCQUFDWixTQUFTLEVBQUMsY0FBYzs7MENBQUMsOERBQUNhLE1BQU07Ozs7b0NBQUc7NEJBQUEsTUFBSTs7Ozs7OzRCQUFTO2tDQUN4RCw4REFBQ0QsUUFBTTt3QkFBQ1osU0FBUyxFQUFDLGNBQWM7a0NBQUMsV0FBUzs7Ozs7NEJBQVM7Ozs7OztvQkFDakQ7Ozs7OztZQUNKLENBQ1A7Q0FDRjtHQS9CUVQsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBaUNmLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFubmVyLnRzeD9hYzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy4uL3R5cGluZ3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJhc2VVcmwgfSBmcm9tICcuLi9jb25zdGFudHMvbW92aWUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIG5ldGZsaXhPcmlnaW5hbHM6IE1vdmllW11cclxufVxyXG5cclxuZnVuY3Rpb24gQmFubmVyKCB7IG5ldGZsaXhPcmlnaW5hbHMgfTogUHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlPE1vdmllIHwgbnVsbD4obnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldE1vdmllKFxyXG4gICAgICAgICAgICBuZXRmbGl4T3JpZ2luYWxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5ldGZsaXhPcmlnaW5hbHMubGVuZ3RoKV1cclxuICAgICAgICAgICAgKVxyXG4gICAgfSwgW25ldGZsaXhPcmlnaW5hbHNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS0yIHB5LTE2IG1kOnNwYWNlLXktNCBsZzpoLVs2NXZoXSBsZzpqdXN0aWZ5LWVuZCBsZzpwYi0xMic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIGxlZi0wIC16LTEwIGgtWzk1dmhdIHctc2NyZWVuJz5cclxuICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICBzcmM9e2Ake2Jhc2VVcmx9JHttb3ZpZT8uYmFja2Ryb3BfcGF0aCB8fCBtb3ZpZT8ucG9zdGVyX3BhdGh9YH1cclxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgIG9iamVjdEZpdD0nY292ZXInXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCBsZzp0ZXh0LTd4bCBtZDp0ZXh0LTR4bCc+XHJcbiAgICAgICAgICAgIHttb3ZpZT8udGl0bGUgfHwgbW92aWU/Lm5hbWUgfHwgbW92aWU/Lm9yaWdpbmFsX25hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J21heC13LXhzIHRleHQteHMgbWQ6bWF4LXctbGcgbWQ6dGV4dC1sZyBsZzptYXgtdy0yeGwgbGc6dGV4dC0yeGwnPnttb3ZpZT8ub3ZlcnZpZXd9PC9wPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmFubmVyQnV0dG9uJz48RmFQbGF5IC8+UGxheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmFubmVyQnV0dG9uJz5Nb3JlIEluZm88L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJiYXNlVXJsIiwiQmFubmVyIiwibmV0ZmxpeE9yaWdpbmFscyIsIm1vdmllIiwic2V0TW92aWUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJiYWNrZHJvcF9wYXRoIiwicG9zdGVyX3BhdGgiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJoMSIsInRpdGxlIiwibmFtZSIsIm9yaWdpbmFsX25hbWUiLCJwIiwib3ZlcnZpZXciLCJidXR0b24iLCJGYVBsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Banner.tsx\n");

/***/ })

});
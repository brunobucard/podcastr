webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/media/bruno/E2CE6648CE6614D7/NLW5 - reactjs/nlw5-reactjs/podcastr/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPLaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function tooglePlay() {\n    setIsPlaying(!isPLaying);\n  }\n\n  function toogleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toogleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  function clearPlayerState() {\n    setEpisodeList([]);\n    setCurrentEpisodeIndex(0);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPLaying: isPLaying,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      tooglePlay: tooglePlay,\n      setPlayingState: setPlayingState,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toogleLoop: toogleLoop,\n      toogleShuffle: toogleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"n1xOvxnjQgO/vYEist7rJPOJ07E=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQTGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJzZXRJc1NodWZmbGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b29nbGVQbGF5IiwidG9vZ2xlTG9vcCIsInRvb2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJzdGF0ZSIsImNsZWFyUGxheWVyU3RhdGUiLCJoYXNQcmV2aW91cyIsImhhc05leHQiLCJsZW5ndGgiLCJwbGF5TmV4dCIsIm5leHRSYW5kb21FcGlzb2RlSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBNEJPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLFNBQVNDLHFCQUFULE9BQXlFO0FBQUE7O0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3Qzs7QUFBQSxrQkFDeENDLHNEQUFRLENBQUMsRUFBRCxDQURnQztBQUFBLE1BQ3ZFQyxXQUR1RTtBQUFBLE1BQzFEQyxjQUQwRDs7QUFBQSxtQkFFeEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZnQjtBQUFBLE1BRXZFRyxtQkFGdUU7QUFBQSxNQUVsREMsc0JBRmtEOztBQUFBLG1CQUc1Q0osc0RBQVEsQ0FB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QUFBOztBQUM3QixTQUFPQyx3REFBVSxDQUFDcEMsYUFBRCxDQUFqQjtBQUNELENBRk07O0lBQU1tQyxTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVtYmVyczogc3RyaW5nO1xuICAgIHRodW1ibmFpbDogc3RyaW5nO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG59O1xuXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xuICAgIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XG4gICAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xuICAgIGlzUExheWluZzogYm9vbGVhbjtcbiAgICBpc0xvb3Bpbmc6IGJvb2xlYW47XG4gICAgaXNTaHVmZmxpbmc6IGJvb2xlYW47XG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpID0+IHZvaWQ7XG4gICAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgdG9vZ2xlUGxheTogKCkgPT4gdm9pZDtcbiAgICB0b29nbGVMb29wOiAoKSA9PiB2b2lkO1xuICAgIHRvb2dsZVNodWZmbGU6ICgpID0+IHZvaWQ7XG4gICAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XG4gICAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xuICAgIGhhc05leHQ6IGJvb2xlYW47XG4gICAgaGFzUHJldmlvdXM6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xuXG50eXBlIFBsYXllckNvbnRleHRQcm92aWRlclByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BMYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSkge1xuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b29nbGVQbGF5KCkge1xuICAgIHNldElzUGxheWluZyghaXNQTGF5aW5nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvb2dsZUxvb3AoKSB7XG4gICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9vZ2xlU2h1ZmZsZSgpIHtcbiAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpO1xuICB9XG5cblxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJQbGF5ZXJTdGF0ZSgpIHtcbiAgICBzZXRFcGlzb2RlTGlzdChbXSk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgfVxuXG4gIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XG4gIGNvbnN0IGhhc05leHQgPSBpc1NodWZmbGluZyB8fCAoY3VycmVudEVwaXNvZGVJbmRleCArIDEpIDwgZXBpc29kZUxpc3QubGVuZ3RoO1xuXG5cbiAgZnVuY3Rpb24gcGxheU5leHQoKSB7IFxuICAgIGlmIChpc1NodWZmbGluZykge1xuICAgICAgY29uc3QgbmV4dFJhbmRvbUVwaXNvZGVJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVwaXNvZGVMaXN0Lmxlbmd0aClcblxuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChuZXh0UmFuZG9tRXBpc29kZUluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGhhc05leHQpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICBpZiAoaGFzUHJldmlvdXMpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGVwaXNvZGVMaXN0LFxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgICBwbGF5LFxuICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgcGxheU5leHQsXG4gICAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgICAgaXNQTGF5aW5nLFxuICAgICAgICBpc0xvb3BpbmcsXG4gICAgICAgIGlzU2h1ZmZsaW5nLFxuICAgICAgICB0b29nbGVQbGF5LFxuICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXG4gICAgICAgIGhhc05leHQsXG4gICAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgICB0b29nbGVMb29wLFxuICAgICAgICB0b29nbGVTaHVmZmxlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})
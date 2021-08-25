module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./pages/api/loginUser.js":
/*!********************************!*\
  !*** ./pages/api/loginUser.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoginUser; });\n/* harmony import */ var _static_example_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/example_data */ \"./static/example_data.js\");\n\nconst loginUser = _static_example_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"] === null || _static_example_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"] === void 0 ? void 0 : _static_example_data__WEBPACK_IMPORTED_MODULE_0__[\"data\"].loginUser;\nfunction LoginUser(req, res) {\n  res.statusCode = 200;\n  res.setHeader(\"Content-Type\", \"application/json\");\n  res.end(JSON.stringify(loginUser));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW5Vc2VyLmpzPzU5OWQiXSwibmFtZXMiOlsibG9naW5Vc2VyIiwiZGF0YSIsIkxvZ2luVXNlciIsInJlcSIsInJlcyIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE1BQU1BLFNBQVMsR0FBR0MseURBQUgsYUFBR0EseURBQUgsdUJBQUdBLHlEQUFJLENBQUVELFNBQXhCO0FBRWUsU0FBU0UsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQzFDQSxLQUFHLENBQUNDLFVBQUosR0FBaUIsR0FBakI7QUFDQUQsS0FBRyxDQUFDRSxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQUYsS0FBRyxDQUFDRyxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxTQUFmLENBQVI7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9sb2dpblVzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL3N0YXRpYy9leGFtcGxlX2RhdGFcIjtcbmNvbnN0IGxvZ2luVXNlciA9IGRhdGE/LmxvZ2luVXNlcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Vc2VyKHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShsb2dpblVzZXIpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/loginUser.js\n");

/***/ }),

/***/ "./static/example_data.js":
/*!********************************!*\
  !*** ./static/example_data.js ***!
  \********************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nconst data = {\n  loginUser: {\n    username: \"marcoamodio\",\n    name: \"Marco Amodio\",\n    image: \"https://media-exp1.licdn.com/dms/image/C4D03AQGmyEkhGkutaQ/profile-displayphoto-shrink_400_400/0/1626464841094?e=1632960000&v=beta&t=PfxRpjmK5UHw7xi2b3UWMgzXYTYjgzknWAPPpQ8YtoQ\"\n  },\n  feed: [{\n    photos: [\"https://source.unsplash.com/WLUHO9A_xik/1600x900\", \"https://source.unsplash.com/1600x900/?nature,water\", \"https://source.unsplash.com/WLUHO9A_xik/1600x900\", \"https://source.unsplash.com/collection/190727/1600x900\", \"https://source.unsplash.com/user/jackie/likes/1600x900\"],\n    user: {\n      username: \"user_1\",\n      image: \"https://picsum.photos/id/217/600/600\"\n    },\n    likeCount: 6,\n    commentCount: 12,\n    pid: 516161646546,\n    description: \"Hello guys there are my new photos\",\n    popularComments: [{\n      username: \"ronaldo\",\n      description: \"bella foto!\"\n    }, {\n      username: \"giovinco\",\n      description: \"ciao!\"\n    }],\n    time: \"12 hours ago\"\n  }, {\n    photos: [\"https://source.unsplash.com/1600x900/?nature,water\"],\n    user: {\n      username: \"user_2\",\n      image: \"https://picsum.photos/id/219/600/600\"\n    },\n    likeCount: 121,\n    commentCount: 22,\n    pid: 1131235616,\n    description: \"Ciao da Napoli!\",\n    popularComments: [{\n      username: \"girl_12\",\n      description: \"You are so handsome!!\"\n    }, {\n      username: \"brobean\",\n      description: \"Hi bro, nice boat\"\n    }],\n    time: \"13 hours ago\"\n  }, {\n    photos: [\"https://source.unsplash.com/1600x900/?nature,water\", \"https://source.unsplash.com/WLUHO9A_xik/1600x900\", \"https://source.unsplash.com/WLUHO9A_xik/1600x900\"],\n    user: {\n      username: \"user_3\",\n      image: \"https://picsum.photos/id/217/600/600\"\n    },\n    likeCount: 13,\n    commentCount: 15,\n    pid: 61656556161,\n    description: \"New React update is awesome!\",\n    popularComments: [{\n      username: \"react_fanboy\",\n      description: \"WWOOOWWW!\"\n    }, {\n      username: \"frontend-guy223\",\n      description: \"Good to hear!\"\n    }],\n    time: \"15 hours ago\"\n  }, {\n    photos: [\"https://source.unsplash.com/WLUHO9A_xik/1600x900\", \"https://source.unsplash.com/1600x900/?nature,water\", \"https://source.unsplash.com/WLUHO9A_xik/1600x900\", \"https://source.unsplash.com/collection/190727/1600x900\", \"https://source.unsplash.com/user/jackie/likes/1600x900\"],\n    user: {\n      username: \"user_4\",\n      image: \"https://source.unsplash.com/collection/190727/1600x900\"\n    },\n    likeCount: 626,\n    commentCount: 152,\n    pid: 1616448151,\n    description: \"My new music is on road!\",\n    popularComments: [{\n      username: \"lorem2\",\n      description: \"prova!\"\n    }, {\n      username: \"lorem\",\n      description: \"Forza Napoli!\"\n    }],\n    time: \"16 hours ago\"\n  }, {\n    photos: [\"https://source.unsplash.com/collection/190727/1600x900\", \"https://source.unsplash.com/user/jackie/likes/1600x900\"],\n    user: {\n      username: \"user_5\",\n      image: \"https://picsum.photos/id/217/600/600\"\n    },\n    likeCount: 10,\n    commentCount: 5,\n    pid: 616984333121,\n    description: \"Here is my new food\",\n    popularComments: [{\n      username: \"test\",\n      description: \"funziona!\"\n    }, {\n      username: \"test5\",\n      description: \"sì!\"\n    }],\n    time: \"22 hours ago\"\n  }],\n  stories: [{\n    username: \"maradona\",\n    image: \"https://picsum.photos/id/237/200/200\"\n  }, {\n    username: \"pele\",\n    image: \"https://picsum.photos/id/236/200/200\"\n  }, {\n    username: \"inzaghi\",\n    image: \"https://picsum.photos/id/238/200/200\"\n  }, {\n    username: \"baggio\",\n    image: \"https://picsum.photos/id/239/200/200\"\n  }, {\n    username: \"weah\",\n    image: \"https://picsum.photos/id/227/200/200\"\n  }, {\n    username: \"pirlo\",\n    image: \"https://picsum.photos/id/229/200/200\"\n  }, {\n    username: \"chiellini\",\n    image: \"https://picsum.photos/id/247/200/200\"\n  }, {\n    username: \"ronaldo\",\n    image: \"https://picsum.photos/id/257/200/200\"\n  }, {\n    username: \"bonucci\",\n    image: \"https://picsum.photos/id/256/200/200\"\n  }, {\n    username: \"buffon\",\n    image: \"https://picsum.photos/id/267/200/200\"\n  }, {\n    username: \"totti\",\n    image: \"https://picsum.photos/id/266/200/200\"\n  }, {\n    username: \"montella\",\n    image: \"https://picsum.photos/id/261/200/200\"\n  }, {\n    username: \"cambiasso\",\n    image: \"https://picsum.photos/id/260/200/200\"\n  }]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvZXhhbXBsZV9kYXRhLmpzPzVlMDIiXSwibmFtZXMiOlsiZGF0YSIsImxvZ2luVXNlciIsInVzZXJuYW1lIiwibmFtZSIsImltYWdlIiwiZmVlZCIsInBob3RvcyIsInVzZXIiLCJsaWtlQ291bnQiLCJjb21tZW50Q291bnQiLCJwaWQiLCJkZXNjcmlwdGlvbiIsInBvcHVsYXJDb21tZW50cyIsInRpbWUiLCJzdG9yaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxXQUFTLEVBQUU7QUFDVEMsWUFBUSxFQUFFLGFBREQ7QUFFVEMsUUFBSSxFQUFFLGNBRkc7QUFHVEMsU0FBSyxFQUNIO0FBSk8sR0FETztBQU9sQkMsTUFBSSxFQUFFLENBQ0o7QUFDRUMsVUFBTSxFQUFFLENBQ04sa0RBRE0sRUFFTixvREFGTSxFQUdOLGtEQUhNLEVBSU4sd0RBSk0sRUFLTix3REFMTSxDQURWO0FBUUVDLFFBQUksRUFBRTtBQUNKTCxjQUFRLEVBQUUsUUFETjtBQUVKRSxXQUFLLEVBQUU7QUFGSCxLQVJSO0FBWUVJLGFBQVMsRUFBRSxDQVpiO0FBYUVDLGdCQUFZLEVBQUUsRUFiaEI7QUFjRUMsT0FBRyxFQUFFLFlBZFA7QUFlRUMsZUFBVyxFQUFFLG9DQWZmO0FBZ0JFQyxtQkFBZSxFQUFFLENBQ2Y7QUFBRVYsY0FBUSxFQUFFLFNBQVo7QUFBdUJTLGlCQUFXLEVBQUU7QUFBcEMsS0FEZSxFQUVmO0FBQUVULGNBQVEsRUFBRSxVQUFaO0FBQXdCUyxpQkFBVyxFQUFFO0FBQXJDLEtBRmUsQ0FoQm5CO0FBb0JFRSxRQUFJLEVBQUU7QUFwQlIsR0FESSxFQXVCSjtBQUNFUCxVQUFNLEVBQUUsQ0FBQyxvREFBRCxDQURWO0FBRUVDLFFBQUksRUFBRTtBQUNKTCxjQUFRLEVBQUUsUUFETjtBQUVKRSxXQUFLLEVBQUU7QUFGSCxLQUZSO0FBTUVJLGFBQVMsRUFBRSxHQU5iO0FBT0VDLGdCQUFZ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Q0VGLFlBQVEsRUFBRSxTQURaO0FBRUVFLFNBQUssRUFBRTtBQUZULEdBakNPLEVBcUNQO0FBQ0VGLFlBQVEsRUFBRSxRQURaO0FBRUVFLFNBQUssRUFBRTtBQUZULEdBckNPLEVBeUNQO0FBQ0VGLFlBQVEsRUFBRSxPQURaO0FBRUVFLFNBQUssRUFBRTtBQUZULEdBekNPLEVBNkNQO0FBQ0VGLFlBQVEsRUFBRSxVQURaO0FBRUVFLFNBQUssRUFBRTtBQUZULEdBN0NPLEVBaURQO0FBQ0VGLFlBQVEsRUFBRSxXQURaO0FBRUVFLFNBQUssRUFBRTtBQUZULEdBakRPO0FBNUdTLENBQWIiLCJmaWxlIjoiLi9zdGF0aWMvZXhhbXBsZV9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIGxvZ2luVXNlcjoge1xuICAgIHVzZXJuYW1lOiBcIm1hcmNvYW1vZGlvXCIsXG4gICAgbmFtZTogXCJNYXJjbyBBbW9kaW9cIixcbiAgICBpbWFnZTpcbiAgICAgIFwiaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzREMDNBUUdteUVraEdrdXRhUS9wcm9maWxlLWRpc3BsYXlwaG90by1zaHJpbmtfNDAwXzQwMC8wLzE2MjY0NjQ4NDEwOTQ/ZT0xNjMyOTYwMDAwJnY9YmV0YSZ0PVBmeFJwam1LNVVIdzd4aTJiM1VXTWd6WFlUWWpnemtuV0FQUHBROFl0b1FcIixcbiAgfSxcbiAgZmVlZDogW1xuICAgIHtcbiAgICAgIHBob3RvczogW1xuICAgICAgICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9XTFVITzlBX3hpay8xNjAweDkwMFwiLFxuICAgICAgICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xNjAweDkwMC8/bmF0dXJlLHdhdGVyXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1dMVUhPOUFfeGlrLzE2MDB4OTAwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL2NvbGxlY3Rpb24vMTkwNzI3LzE2MDB4OTAwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3VzZXIvamFja2llL2xpa2VzLzE2MDB4OTAwXCIsXG4gICAgICBdLFxuICAgICAgdXNlcjoge1xuICAgICAgICB1c2VybmFtZTogXCJ1c2VyXzFcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIxNy82MDAvNjAwXCIsXG4gICAgICB9LFxuICAgICAgbGlrZUNvdW50OiA2LFxuICAgICAgY29tbWVudENvdW50OiAxMixcbiAgICAgIHBpZDogNTE2MTYxNjQ2NTQ2LFxuICAgICAgZGVzY3JpcHRpb246IFwiSGVsbG8gZ3V5cyB0aGVyZSBhcmUgbXkgbmV3IHBob3Rvc1wiLFxuICAgICAgcG9wdWxhckNvbW1lbnRzOiBbXG4gICAgICAgIHsgdXNlcm5hbWU6IFwicm9uYWxkb1wiLCBkZXNjcmlwdGlvbjogXCJiZWxsYSBmb3RvIVwiIH0sXG4gICAgICAgIHsgdXNlcm5hbWU6IFwiZ2lvdmluY29cIiwgZGVzY3JpcHRpb246IFwiY2lhbyFcIiB9LFxuICAgICAgXSxcbiAgICAgIHRpbWU6IFwiMTIgaG91cnMgYWdvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwaG90b3M6IFtcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xNjAweDkwMC8/bmF0dXJlLHdhdGVyXCJdLFxuICAgICAgdXNlcjoge1xuICAgICAgICB1c2VybmFtZTogXCJ1c2VyXzJcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIxOS82MDAvNjAwXCIsXG4gICAgICB9LFxuICAgICAgbGlrZUNvdW50OiAxMjEsXG4gICAgICBjb21tZW50Q291bnQ6IDIyLFxuICAgICAgcGlkOiAxMTMxMjM1NjE2LFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2lhbyBkYSBOYXBvbGkhXCIsXG4gICAgICBwb3B1bGFyQ29tbWVudHM6IFtcbiAgICAgICAgeyB1c2VybmFtZTogXCJnaXJsXzEyXCIsIGRlc2NyaXB0aW9uOiBcIllvdSBhcmUgc28gaGFuZHNvbWUhIVwiIH0sXG4gICAgICAgIHsgdXNlcm5hbWU6IFwiYnJvYmVhblwiLCBkZXNjcmlwdGlvbjogXCJIaSBicm8sIG5pY2UgYm9hdFwiIH0sXG4gICAgICBdLFxuICAgICAgdGltZTogXCIxMyBob3VycyBhZ29cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBob3RvczogW1xuICAgICAgICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xNjAweDkwMC8/bmF0dXJlLHdhdGVyXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1dMVUhPOUFfeGlrLzE2MDB4OTAwXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1dMVUhPOUFfeGlrLzE2MDB4OTAwXCIsXG4gICAgICBdLFxuICAgICAgdXNlcjoge1xuICAgICAgICB1c2VybmFtZTogXCJ1c2VyXzNcIixcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIxNy82MDAvNjAwXCIsXG4gICAgICB9LFxuICAgICAgbGlrZUNvdW50OiAxMyxcbiAgICAgIGNvbW1lbnRDb3VudDogMTUsXG4gICAgICBwaWQ6IDYxNjU2NTU2MTYxLFxuICAgICAgZGVzY3JpcHRpb246IFwiTmV3IFJlYWN0IHVwZGF0ZSBpcyBhd2Vzb21lIVwiLFxuICAgICAgcG9wdWxhckNvbW1lbnRzOiBbXG4gICAgICAgIHsgdXNlcm5hbWU6IFwicmVhY3RfZmFuYm95XCIsIGRlc2NyaXB0aW9uOiBcIldXT09PV1dXIVwiIH0sXG4gICAgICAgIHsgdXNlcm5hbWU6IFwiZnJvbnRlbmQtZ3V5MjIzXCIsIGRlc2NyaXB0aW9uOiBcIkdvb2QgdG8gaGVhciFcIiB9LFxuICAgICAgXSxcbiAgICAgIHRpbWU6IFwiMTUgaG91cnMgYWdvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwaG90b3M6IFtcbiAgICAgICAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vV0xVSE85QV94aWsvMTYwMHg5MDBcIixcbiAgICAgICAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMTYwMHg5MDAvP25hdHVyZSx3YXRlclwiLFxuICAgICAgICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9XTFVITzlBX3hpay8xNjAweDkwMFwiLFxuICAgICAgICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzE5MDcyNy8xNjAweDkwMFwiLFxuICAgICAgICBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS91c2VyL2phY2tpZS9saWtlcy8xNjAweDkwMFwiLFxuICAgICAgXSxcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgdXNlcm5hbWU6IFwidXNlcl80XCIsXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9jb2xsZWN0aW9uLzE5MDcyNy8xNjAweDkwMFwiLFxuICAgICAgfSxcbiAgICAgIGxpa2VDb3VudDogNjI2LFxuICAgICAgY29tbWVudENvdW50OiAxNTIsXG4gICAgICBwaWQ6IDE2MTY0NDgxNTEsXG4gICAgICBkZXNjcmlwdGlvbjogXCJNeSBuZXcgbXVzaWMgaXMgb24gcm9hZCFcIixcbiAgICAgIHBvcHVsYXJDb21tZW50czogW1xuICAgICAgICB7IHVzZXJuYW1lOiBcImxvcmVtMlwiLCBkZXNjcmlwdGlvbjogXCJwcm92YSFcIiB9LFxuICAgICAgICB7IHVzZXJuYW1lOiBcImxvcmVtXCIsIGRlc2NyaXB0aW9uOiBcIkZvcnphIE5hcG9saSFcIiB9LFxuICAgICAgXSxcbiAgICAgIHRpbWU6IFwiMTYgaG91cnMgYWdvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwaG90b3M6IFtcbiAgICAgICAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vY29sbGVjdGlvbi8xOTA3MjcvMTYwMHg5MDBcIixcbiAgICAgICAgXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vdXNlci9qYWNraWUvbGlrZXMvMTYwMHg5MDBcIixcbiAgICAgIF0sXG4gICAgICB1c2VyOiB7XG4gICAgICAgIHVzZXJuYW1lOiBcInVzZXJfNVwiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjE3LzYwMC82MDBcIixcbiAgICAgIH0sXG4gICAgICBsaWtlQ291bnQ6IDEwLFxuICAgICAgY29tbWVudENvdW50OiA1LFxuICAgICAgcGlkOiA2MTY5ODQzMzMxMjEsXG4gICAgICBkZXNjcmlwdGlvbjogXCJIZXJlIGlzIG15IG5ldyBmb29kXCIsXG4gICAgICBwb3B1bGFyQ29tbWVudHM6IFtcbiAgICAgICAgeyB1c2VybmFtZTogXCJ0ZXN0XCIsIGRlc2NyaXB0aW9uOiBcImZ1bnppb25hIVwiIH0sXG4gICAgICAgIHsgdXNlcm5hbWU6IFwidGVzdDVcIiwgZGVzY3JpcHRpb246IFwic8OsIVwiIH0sXG4gICAgICBdLFxuICAgICAgdGltZTogXCIyMiBob3VycyBhZ29cIixcbiAgICB9LFxuICBdLFxuICBzdG9yaWVzOiBbXG4gICAge1xuICAgICAgdXNlcm5hbWU6IFwibWFyYWRvbmFcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8yMzcvMjAwLzIwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdXNlcm5hbWU6IFwicGVsZVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNi8yMDAvMjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB1c2VybmFtZTogXCJpbnphZ2hpXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM4LzIwMC8yMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcImJhZ2dpb1wiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzOS8yMDAvMjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB1c2VybmFtZTogXCJ3ZWFoXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjI3LzIwMC8yMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcInBpcmxvXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjI5LzIwMC8yMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcImNoaWVsbGluaVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzI0Ny8yMDAvMjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB1c2VybmFtZTogXCJyb25hbGRvXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjU3LzIwMC8yMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcImJvbnVjY2lcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8yNTYvMjAwLzIwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdXNlcm5hbWU6IFwiYnVmZm9uXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjY3LzIwMC8yMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcInRvdHRpXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjY2LzIwMC8yMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcIm1vbnRlbGxhXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjYxLzIwMC8yMDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcImNhbWJpYXNzb1wiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzI2MC8yMDAvMjAwXCIsXG4gICAgfSxcbiAgXSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/example_data.js\n");

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/api/loginUser.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcoamodio/Desktop/nextjs-clone-instagram/pages/api/loginUser.js */"./pages/api/loginUser.js");


/***/ })

/******/ });
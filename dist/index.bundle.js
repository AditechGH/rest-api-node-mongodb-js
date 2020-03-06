module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: \"mongodb://localhost/goosendr-dev\",\n  JWT_SECRET: process.env.SECRET || \"Aditek\",\n  url: 'http://localhost:3000'\n};\nconst testConfig = {\n  MONGO_URL: \"mongodb://localhost/goosendr-test\",\n  JWT_SECRET: process.env.SECRET || \"Aditek\"\n};\nconst prodConfig = {\n  MONGO_URL: \"mongodb://localhost/goosendr-prod\",\n  JWT_SECRET: process.env.SECRET || \"Aditek\",\n  url: 'http://52.14.168.100:3000'\n};\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000,\n  twilio: {\n    number: '+12057429662',\n    accountSid: 'AC8a5fea6fb2f049b05bcbf3eaf330c38d',\n    authToken: 'b7bd7d0c620a0342b8a16bd0dfefde88',\n    authyKey: 'eXzYv8A8y5pn6q8W2taH67zBqhqsDtug'\n  },\n  no_reply: 'no_reply@halalclothingonline.com',\n  amazon: {\n    AccessKeyID: 'AKIAJRZ5NEHVHRBCCRQA',\n    SecretAccessKey: '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',\n    region: 'us-east-1'\n  }\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case \"development\":\n      return devConfig;\n\n    case \"test\":\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = { ...defaultConfig,\n  ...envConfig(\"development\")\n};\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-console */\n_mongoose2.default.Promise = global.Promise;\n\ntry {\n  _mongoose2.default.connect(_constants2.default.MONGO_URL, {\n    useNewUrlParser: true,\n    useCreateIndex: true\n  });\n} catch (err) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);\n}\n\n_mongoose2.default.connection.once(\"open\", () => console.log(\"MongoDB Running\")).on(\"error\", e => {\n  throw e;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _swaggerUiExpress = __webpack_require__(/*! swagger-ui-express */ \"swagger-ui-express\");\n\nvar _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);\n\nvar _swagger = __webpack_require__(/*! ./swagger.json */ \"./src/config/swagger.json\");\n\nvar _swagger2 = _interopRequireDefault(_swagger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst options = {\n  customCss: '.swagger-ui .topbar { display: none }'\n};\nconst isDev = \"development\" === \"development\";\nconst isProd = \"development\" === \"production\";\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n\n  app.use((0, _bodyParser.json)());\n  app.use((0, _bodyParser.urlencoded)({\n    extended: true\n  }));\n  app.use((0, _cors2.default)({\n    credentials: true,\n    origin: true\n  }));\n  app.use(_passport2.default.initialize());\n  app.use(\"/api-docs\", _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, options));\n\n  if (isDev) {\n    app.use((0, _morgan2.default)(\"dev\"));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/config/swagger.json":
/*!*********************************!*\
  !*** ./src/config/swagger.json ***!
  \*********************************/
/*! exports provided: swagger, info, host, basePath, tags, schemes, paths, securityDefinitions, definitions, default */
/***/ (function(module) {

eval("module.exports = {\"swagger\":\"2.0\",\"info\":{\"description\":\"Api documentation for GooSendr. A logistics application.<br><br><br> <b>NEW</b><br> 1. Removal of username field <br> 2. Addition of the courier api<br><br>\",\"version\":\"1.0.0\",\"title\":\"GooSendr Api Documentation\",\"termsOfService\":\"\",\"customeSiteTitle\":\"GooSendr Api Docs\",\"contact\":{\"email\":\"aditech5170@gmail.com\"}},\"host\":\"52.14.168.100:3000\",\"basePath\":\"/api/v1\",\"tags\":[{\"name\":\"user\",\"description\":\"\",\"externalDocs\":{\"description\":\"\",\"url\":\"http://52.14.168.100:3000\"}},{\"name\":\"courier\",\"externalDocs\":{\"description\":\"\",\"url\":\"http://52.14.168.100:3000\"}},{\"name\":\"user address book\",\"externalDocs\":{\"description\":\"\",\"url\":\"http://52.14.168.100:3000/address\"}}],\"schemes\":[\"http\"],\"paths\":{\"/user/register\":{\"post\":{\"tags\":[\"user\"],\"summary\":\"Create user\",\"description\":\"Registering a new user.\",\"operationId\":\"createUser\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"Created user object\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/registration.model\"}}],\"responses\":{\"201\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/auth.model\"}},\"400\":{\"description\":\"\"}}}},\"/user/resend/{id}\":{\"get\":{\"tags\":[\"user\"],\"summary\":\"Resend sms auth-token\",\"description\":\"\",\"operationId\":\"resend\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/user/verify/{id}\":{\"put\":{\"tags\":[\"user\"],\"summary\":\"Send verification code\",\"description\":\"\",\"operationId\":\"verify\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"body\",\"description\":\"code received on phone\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/verificationCode.model\"}}],\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"$ref\":\"#/definitions/auth.model\"}},\"400\":{\"description\":\"invalid code\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/user/login\":{\"post\":{\"tags\":[\"user\"],\"summary\":\"Logs user into the system\",\"description\":\"\",\"operationId\":\"loginUser\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"user login information\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/login.model\"}}],\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"$ref\":\"#/definitions/auth.model\"}},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/user/forgot-password\":{\"post\":{\"tags\":[\"user\"],\"summary\":\"Forgot password\",\"description\":\"\",\"operationId\":\"forgotPassword\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"The user email registered in the system. \",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/forgotPassword.model\"}}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"UNAUTHORIZED\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/user/reset-password\":{\"post\":{\"tags\":[\"user\"],\"summary\":\"Reset password with token from user's email\",\"description\":\"\",\"operationId\":\"resetPassword\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"Token and Password\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/resetPassword.model\"}}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/user/change-password\":{\"patch\":{\"tags\":[\"user\"],\"summary\":\"Changing of password\",\"description\":\"This can only be done by the logged in user.\",\"operationId\":\"changePassword\",\"produces\":[\"application/json\"],\"parameters\":[{\"name\":\"body\",\"in\":\"body\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/changePassword.model\"}}],\"security\":[{\"userToken\":[]}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"invalid old password\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/user/update-user\":{\"patch\":{\"tags\":[\"user\"],\"summary\":\"Update user Information\",\"description\":\"This can only be done by the logged in user.\",\"operationId\":\"updateUser\",\"produces\":[\"application/json\"],\"parameters\":[{\"name\":\"body\",\"in\":\"body\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/updateInfo.model\"}}],\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/info.model\"}},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"UNAUTHORIZED\"}},\"security\":[{\"userToken\":[]}]}},\"/courier/register\":{\"post\":{\"tags\":[\"courier\"],\"summary\":\"Create user\",\"description\":\"Registering a new user.\",\"operationId\":\"createCourierUser\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"Created user object\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/courierRegistration.model\"}}],\"responses\":{\"201\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/courierAuth.model\"}},\"400\":{\"description\":\"\"}}}},\"/courier/resend/{id}\":{\"get\":{\"tags\":[\"courier\"],\"summary\":\"Resend sms auth-token\",\"description\":\"\",\"operationId\":\"courierResend\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/verify/{id}\":{\"put\":{\"tags\":[\"courier\"],\"summary\":\"Send verification code\",\"description\":\"\",\"operationId\":\"courierVerify\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"body\",\"description\":\"code received on phone\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/verificationCode.model\"}}],\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"$ref\":\"#/definitions/courierAuth.model\"}},\"400\":{\"description\":\"invalid code\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/resend-email/{id}\":{\"get\":{\"tags\":[\"courier\"],\"summary\":\"Resend email for confirmation\",\"description\":\"\",\"operationId\":\"courierResendEmail\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/confirm-email/{id}\":{\"put\":{\"tags\":[\"courier\"],\"summary\":\"Send verification code\",\"description\":\"\",\"operationId\":\"courierConfirmEmail\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"body\",\"description\":\"code received on phone\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/emailconfimation.model\"}}],\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"$ref\":\"#/definitions/courierInfo.model\"}},\"400\":{\"description\":\"invalid code\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/login\":{\"post\":{\"tags\":[\"courier\"],\"summary\":\"Logs courier into the system\",\"description\":\"\",\"operationId\":\"loginCourier\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"user login information\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/login.model\"}}],\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"$ref\":\"#/definitions/courierAuth.model\"}},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/forgot-password\":{\"post\":{\"tags\":[\"courier\"],\"summary\":\"Forgot password\",\"description\":\"\",\"operationId\":\"courierForgotPassword\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"The user email registered in the system. \",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/forgotPassword.model\"}}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"UNAUTHORIZED\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/reset-password\":{\"post\":{\"tags\":[\"courier\"],\"summary\":\"Reset password with token from user's email\",\"description\":\"\",\"operationId\":\"courierResetPassword\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"Token and Password\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/resetPassword.model\"}}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/change-password\":{\"patch\":{\"tags\":[\"courier\"],\"summary\":\"Changing of password\",\"description\":\"This can only be done by the logged in user.\",\"operationId\":\"courierChangePassword\",\"produces\":[\"application/json\"],\"parameters\":[{\"name\":\"body\",\"in\":\"body\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/changePassword.model\"}}],\"security\":[{\"courierToken\":[]}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"invalid old password\"},\"401\":{\"description\":\"UNAUTHORIZED\"}}}},\"/courier/update-user\":{\"patch\":{\"tags\":[\"courier\"],\"summary\":\"Update courier Information\",\"description\":\"This can only be done by the logged in user.\",\"operationId\":\"courierUpdateUser\",\"produces\":[\"application/json\"],\"parameters\":[{\"name\":\"body\",\"in\":\"body\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/courierUpdateInfo.model\"}}],\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/courierInfo.model\"}},\"400\":{\"description\":\"\"},\"401\":{\"description\":\"UNAUTHORIZED\"}},\"security\":[{\"courierToken\":[]}]}},\"/address\":{\"post\":{\"tags\":[\"user address book\"],\"summary\":\"Add new address\",\"description\":\"auto populate the name, phone number and countryCode fields with the details from the <b>logged in</b> user. those fields can be changed by the user per address\",\"operationId\":\"register Address\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"body\",\"name\":\"body\",\"description\":\"address object\",\"required\":true,\"schema\":{\"$ref\":\"#/definitions/address.model\"}}],\"responses\":{\"201\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/addressOutput.model\"}},\"400\":{\"description\":\"UNAUTHORIZED\"}},\"security\":[{\"userToken\":[]}]},\"get\":{\"tags\":[\"user address book\"],\"summary\":\"get user addresses\",\"description\":\"\",\"operationId\":\"getAddresses\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"query\",\"name\":\"page\",\"description\":\"page\",\"required\":true,\"type\":\"string\"},{\"in\":\"query\",\"name\":\"limit\",\"description\":\"limit\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/addressOutput2.model\"}},\"400\":{\"description\":\"UNAUTHORIZED\"}},\"security\":[{\"userToken\":[]}]}},\"/address/{id}\":{\"get\":{\"tags\":[\"user address book\"],\"summary\":\"get user individual address\",\"description\":\"\",\"operationId\":\"getAddress\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/addressOutput.model\"}},\"400\":{\"description\":\"UNAUTHORIZED\"}},\"security\":[{\"userToken\":[]}]},\"patch\":{\"tags\":[\"user address book\"],\"summary\":\"update individual address\",\"description\":\"\",\"operationId\":\"updateAddress\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"$ref\":\"#/definitions/addressOutput.model\"}},\"400\":{\"description\":\"UNAUTHORIZED\"}},\"security\":[{\"userToken\":[]}]},\"delete\":{\"tags\":[\"user address book\"],\"summary\":\"delete individual address\",\"description\":\"\",\"operationId\":\"delete_Address\",\"produces\":[\"application/json\"],\"parameters\":[{\"in\":\"path\",\"name\":\"id\",\"description\":\"id of registered user\",\"required\":true,\"type\":\"string\"}],\"responses\":{\"200\":{\"description\":\"OK\"},\"400\":{\"description\":\"UNAUTHORIZED\"}},\"security\":[{\"userToken\":[]}]}}},\"securityDefinitions\":{\"userToken\":{\"type\":\"apiKey\",\"name\":\"Authorization\",\"in\":\"header\"},\"courierToken\":{\"type\":\"apiKey\",\"name\":\"Authorization\",\"in\":\"header\"}},\"definitions\":{\"registration.model\":{\"type\":\"object\",\"properties\":{\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\",\"description\":\"eg +233\"},\"avatar\":{\"type\":\"object\"}}},\"courierRegistration.model\":{\"type\":\"object\",\"properties\":{\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\",\"description\":\"eg +233\"},\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\",\"description\":\"optional\"},\"avatar\":{\"type\":\"object\"}}},\"updateInfo.model\":{\"type\":\"object\",\"properties\":{\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"facebook\":{\"type\":\"object\"},\"google\":{\"type\":\"object\"},\"countryCode\":{\"type\":\"string\",\"description\":\"eg +233\"},\"avatar\":{\"type\":\"object\"}}},\"courierUpdateInfo.model\":{\"type\":\"object\",\"properties\":{\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\",\"description\":\"optional\"},\"countryCode\":{\"type\":\"string\",\"description\":\"eg +233\"},\"avatar\":{\"type\":\"object\"}}},\"info.model\":{\"type\":\"object\",\"properties\":{\"_id\":{\"type\":\"string\"},\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"facebook\":{\"type\":\"object\"},\"google\":{\"type\":\"object\"},\"avatar\":{\"type\":\"object\"}}},\"courierInfo.model\":{\"type\":\"object\",\"properties\":{\"_id\":{\"type\":\"string\"},\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\"},\"avatar\":{\"type\":\"object\"}}},\"auth.model\":{\"type\":\"object\",\"properties\":{\"_id\":{\"type\":\"string\"},\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"facebook\":{\"type\":\"object\"},\"google\":{\"type\":\"object\"},\"avatar\":{\"type\":\"object\"},\"token\":{\"type\":\"string\"}}},\"courierAuth.model\":{\"type\":\"object\",\"properties\":{\"_id\":{\"type\":\"string\"},\"fullName\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\"},\"avatar\":{\"type\":\"object\"},\"token\":{\"type\":\"string\"}}},\"verificationCode.model\":{\"type\":\"object\",\"properties\":{\"code\":{\"type\":\"string\"}}},\"emailconfimation.model\":{\"type\":\"object\",\"properties\":{\"token\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"}}},\"resetPassword.model\":{\"type\":\"object\",\"properties\":{\"token\":{\"type\":\"string\"},\"newPassword\":{\"type\":\"string\"},\"verifyPassword\":{\"type\":\"string\"}}},\"changePassword.model\":{\"type\":\"object\",\"properties\":{\"newPassword\":{\"type\":\"string\"},\"oldPassword\":{\"type\":\"string\"}}},\"login.model\":{\"type\":\"object\",\"properties\":{\"email\":{\"type\":\"string\"},\"password\":{\"type\":\"string\"}}},\"forgotPassword.model\":{\"type\":\"object\",\"properties\":{\"email\":{\"type\":\"string\"}}},\"address.model\":{\"type\":\"object\",\"properties\":{\"fullName\":{\"type\":\"string\"},\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\"},\"district\":{\"type\":\"string\"},\"region\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"phone2\":{\"type\":\"string\"},\"countryCode2\":{\"type\":\"string\"}}},\"addressOutput.model\":{\"type\":\"object\",\"properties\":{\"_id\":{\"type\":\"string\"},\"fullName\":{\"type\":\"string\"},\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\"},\"district\":{\"type\":\"string\"},\"region\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"phone2\":{\"type\":\"string\"},\"countryCode2\":{\"type\":\"string\"},\"createdAt\":{\"type\":\"string\"},\"user\":{\"type\":\"object\"}}},\"addressOutput2.model\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"_id\":{\"type\":\"string\"},\"fullName\":{\"type\":\"string\"},\"address1\":{\"type\":\"string\"},\"address2\":{\"type\":\"string\"},\"district\":{\"type\":\"string\"},\"region\":{\"type\":\"string\"},\"phone\":{\"type\":\"string\"},\"countryCode\":{\"type\":\"string\"},\"phone2\":{\"type\":\"string\"},\"countryCode2\":{\"type\":\"string\"},\"createdAt\":{\"type\":\"string\"},\"user\":{\"type\":\"object\"}}}}}};\n\n//# sourceURL=webpack:///./src/config/swagger.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middleware = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n\nvar _middleware2 = _interopRequireDefault(_middleware);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-console */\nconst app = (0, _express2.default)();\n(0, _middleware2.default)(app);\napp.get(\"/\", (req, res) => {\n  res.send(\"Hello world!\");\n});\napp.get(\"/reset-password\", (req, res) => {\n  res.send(`token: ${req.query.token}`);\n});\napp.get(\"/email-verification\", (req, res) => {\n  res.send(`token: ${req.query.token}, email: ${req.query.email}`);\n});\napp.post('/email-notifications', (req, res) => {\n  console.log(req.headers);\n  res.status(200).json();\n});\n(0, _modules2.default)(app);\napp.listen(_constants2.default.PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(`Server running on port: ${_constants2.default.PORT} - Running on ${\"development\"}`);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/address/address.controllers.js":
/*!****************************************************!*\
  !*** ./src/modules/address/address.controllers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createAddress = createAddress;\nexports.getAddressById = getAddressById;\nexports.getUserAddresses = getUserAddresses;\nexports.updateAddress = updateAddress;\nexports.deleteAddress = deleteAddress;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _address = __webpack_require__(/*! ./address.model */ \"./src/modules/address/address.model.js\");\n\nvar _address2 = _interopRequireDefault(_address);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createAddress(req, res) {\n  try {\n    return res.status(_httpStatus2.default.CREATED).json((await _address2.default.createAddress(req.body, req.user)));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getAddressById(req, res) {\n  try {\n    return res.status(_httpStatus2.default.OK).json((await _address2.default.findById(req.params.id).populate(\"user\")));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function getUserAddresses(req, res) {\n  const limit = req.query.limit ? parseInt(req.query.limit, 0) : 5;\n  const page = req.query.page ? parseInt(req.query.page, 0) : 1;\n\n  try {\n    return res.status(_httpStatus2.default.OK).json((await _address2.default.paginate({\n      user: req.params.id\n    }, {\n      page,\n      limit,\n      populate: \"user\"\n    })));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function updateAddress(req, res) {\n  try {\n    const address = await _address2.default.findById(req.params.id);\n\n    if (!address.user.equals(req.user._id)) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    Object.keys(req.body).forEach(key => {\n      address[key] = req.body[key];\n    });\n    return res.status(_httpStatus2.default.OK).json((await address.save()));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function deleteAddress(req, res) {\n  try {\n    const address = await _address2.default.findById(req.params.id);\n\n    if (!address.user.equals(req.user._id)) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    await address.remove();\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/address/address.controllers.js?");

/***/ }),

/***/ "./src/modules/address/address.model.js":
/*!**********************************************!*\
  !*** ./src/modules/address/address.model.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _mongoosePaginate = __webpack_require__(/*! mongoose-paginate */ \"mongoose-paginate\");\n\nvar _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Schema = _mongoose2.default.Schema({\n  fullName: {\n    type: String,\n    required: [true, \"name is required!\"],\n    trim: true\n  },\n  address1: {\n    type: String,\n    required: [true, \"Address is required!\"],\n    trim: true\n  },\n  address2: {\n    type: String,\n    trim: true\n  },\n  district: {\n    type: String,\n    required: [true, \"district is required!\"],\n    trim: true\n  },\n  region: {\n    type: String,\n    required: [true, \"region is required!\"],\n    trim: true\n  },\n  phone: {\n    type: String,\n    trim: true\n  },\n  countryCode: {\n    type: String,\n    trim: true\n  },\n  phone2: {\n    type: String,\n    trim: true\n  },\n  countryCode2: {\n    type: String,\n    trim: true\n  },\n  user: {\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: \"User\"\n  }\n}, {\n  timestamps: true\n});\n\nSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: \"{VALUE} already taken!\"\n});\nSchema.methods = {\n  toJSON() {\n    return {\n      _id: this._id,\n      fullName: this.fullName,\n      address1: this.address1,\n      address2: this.address2,\n      district: this.district,\n      region: this.region,\n      phone: this.phone,\n      countryCode: this.countryCode,\n      phone2: this.phone2,\n      countryCode2: this.countryCode2,\n      createdAt: this.createdAt,\n      user: this.user\n    };\n  }\n\n};\nSchema.statics = {\n  createAddress(args, user) {\n    return this.create({ ...user.toUserJson(),\n      ...args\n    });\n  }\n\n};\nSchema.plugin(_mongoosePaginate2.default);\nexports.default = _mongoose2.default.model(\"Address\", Schema);\n\n//# sourceURL=webpack:///./src/modules/address/address.model.js?");

/***/ }),

/***/ "./src/modules/address/address.routes.js":
/*!***********************************************!*\
  !*** ./src/modules/address/address.routes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _address = __webpack_require__(/*! ./address.controllers */ \"./src/modules/address/address.controllers.js\");\n\nvar addressController = _interopRequireWildcard(_address);\n\nvar _address2 = __webpack_require__(/*! ./address.validations */ \"./src/modules/address/address.validations.js\");\n\nvar _address3 = _interopRequireDefault(_address2);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = (0, _express.Router)();\nroutes.post(\"/\", _auth.authJwt, (0, _expressValidation2.default)(_address3.default.createAddress), addressController.createAddress);\nroutes.get(\"/:id\", _auth.authJwt, addressController.getAddressById);\nroutes.get(\"/\", _auth.authJwt, addressController.getUserAddresses);\nroutes.patch(\"/:id\", _auth.authJwt, (0, _expressValidation2.default)(_address3.default.updateAddress), addressController.updateAddress);\nroutes.delete(\"/:id\", _auth.authJwt, addressController.deleteAddress);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/address/address.routes.js?");

/***/ }),

/***/ "./src/modules/address/address.validations.js":
/*!****************************************************!*\
  !*** ./src/modules/address/address.validations.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createAddress: {\n    body: {\n      fullName: _joi2.default.string(),\n      address1: _joi2.default.string().required(),\n      district: _joi2.default.string().required(),\n      region: _joi2.default.string().required(),\n      phone: _joi2.default.number(),\n      countryCode: _joi2.default.string()\n    }\n  },\n  updateAddress: {\n    body: {\n      fullName: _joi2.default.string(),\n      address1: _joi2.default.string(),\n      district: _joi2.default.string(),\n      region: _joi2.default.string(),\n      phone: _joi2.default.number(),\n      countryCode: _joi2.default.string()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/address/address.validations.js?");

/***/ }),

/***/ "./src/modules/admin/admin.controllers.js":
/*!************************************************!*\
  !*** ./src/modules/admin/admin.controllers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AddAdmin = AddAdmin;\nexports.fetch = fetch;\nexports.fetchOne = fetchOne;\nexports.login = login;\nexports.update = update;\nexports.editPassword = editPassword;\nexports.deleteAdmin = deleteAdmin;\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _admin = __webpack_require__(/*! ./admin.services */ \"./src/modules/admin/admin.services.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function AddAdmin(req, res) {\n  const save = async () => {\n    const payload = req.body;\n    payload._id = new _mongoose2.default.Types.ObjectId();\n    payload.ip = _admin2.default.getIP(req);\n    payload.loginType = \"admin\";\n\n    try {\n      const data = await _admin2.default.save(payload);\n      return res.status(_httpStatus2.default.CREATED).json(data.toAuthJSON());\n    } catch (e) {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n    }\n  };\n\n  save().then();\n}\n\nasync function fetch(req, res) {\n  const page = req.params.page ? parseInt(req.params.page, 10) : 1;\n  const limit = req.params.limit ? parseInt(req.params.limit, 10) : 10;\n\n  try {\n    const data = await _admin2.default.fetch({}, page, limit);\n    return res.status(_httpStatus2.default.OK).json(data);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function fetchOne(req, res) {\n  try {\n    const data = await _admin2.default.fetchOne({\n      _id: req.params.id\n    });\n    return res.status(_httpStatus2.default.OK).json(data);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function login(req, res, next) {\n  const update_ = async payload => {\n    try {\n      const data = await _admin2.default.update({\n        _id: payload._id\n      }, payload, {\n        multi: false\n      });\n\n      if (data) {\n        res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());\n        return next();\n      }\n\n      res.status(_httpStatus2.default.BAD_REQUEST).json({\n        message: \"Unknown  error occurred!\"\n      });\n      return next();\n    } catch (e) {\n      res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n      return next();\n    }\n  };\n\n  const user = req.user;\n  user.lastlogin = new Date();\n  user.ip = _admin2.default.getIP(req);\n  user.loginType = \"admin\";\n  user.loggedIn = true;\n  update_(user).then();\n}\n\nasync function update(req, res) {\n  const payload = {\n    name: req.body.name,\n    email: req.body.email,\n    type: req.body.type,\n    avatar: req.body.avatar\n  };\n\n  try {\n    const data = await _admin2.default.update({\n      _id: req.params.id\n    }, payload);\n    return res.status(_httpStatus2.default.OK).json(data);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function editPassword(req, res) {\n  if (req.body.pass1 === \"\" || req.body.pass2 === \"\" || req.body.password === \"\") {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json({\n      message: \"Please fill out all fields\"\n    });\n  }\n\n  if (req.body.pass1 !== req.body.pass2) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json({\n      message: \"Passwords do not match\"\n    });\n  }\n\n  const generateHash = async () => {\n    _bcryptNodejs2.default.hash(req.body.pass1, null, null, (err, hash) => {\n      updatePassword(hash).then();\n    });\n  };\n\n  let updatePassword = async hash => {\n    try {\n      const data = await _admin2.default.update({\n        _id: req.params.id\n      }, {\n        password: hash\n      }, {\n        multi: false\n      });\n      return res.status(_httpStatus2.default.OK).json(data);\n    } catch (e) {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n    }\n  };\n\n  try {\n    const admin = await _admin2.default.fetchOne({\n      _id: req.params.id\n    });\n\n    if (admin) {\n      if (!_bcryptNodejs2.default.compareSync(req.body.password, admin.password)) {\n        return res.status(_httpStatus2.default.BAD_REQUEST).json({\n          message: \"Invalid old password\"\n        });\n      }\n\n      generateHash().then();\n    } else {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json({\n        message: \"You're not eligible to change the password\"\n      });\n    }\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function deleteAdmin(req, res) {\n  try {\n    const data = await _admin2.default.delete({\n      _id: req.params.id\n    });\n    return res.status(_httpStatus2.default.OK).json(data);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/admin/admin.controllers.js?");

/***/ }),

/***/ "./src/modules/admin/admin.model.js":
/*!******************************************!*\
  !*** ./src/modules/admin/admin.model.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _mongoosePaginate = __webpack_require__(/*! mongoose-paginate */ \"mongoose-paginate\");\n\nvar _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _post = __webpack_require__(/*! ../post/post.model */ \"./src/modules/post/post.model.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Created by AditekGH on 2/26/2019.\n */\nconst Schema = _mongoose2.default.Schema({\n  name: {\n    type: String,\n    required: [true, \"Name is required!\"],\n    trim: true\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, \"Email is required!\"],\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n\n      message: \"{VALUE} is not a valid email!\"\n    }\n  },\n  password: {\n    type: String,\n    required: [true, \"Password is required!\"],\n    trim: true\n  },\n  favorites: {\n    posts: [{\n      type: _mongoose2.default.Schema.Types.ObjectId,\n      ref: \"Post\"\n    }]\n  },\n  type: {\n    type: String,\n    required: [true, \"Admin Type is required!\"],\n    trim: true\n  },\n  ip: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  signup: {\n    type: Date,\n    default: Date.now\n  },\n  lastlogin: {\n    type: Date,\n    default: Date.now\n  },\n  notescheck: {\n    type: Date,\n    default: Date.now\n  },\n  loggedIn: {\n    type: Boolean,\n    default: false\n  },\n  avatar: {},\n  token: {\n    type: String,\n    required: false,\n    trim: true\n  },\n  loginType: {\n    type: String,\n    default: \"admin\"\n  },\n  expire: {\n    type: String,\n    required: false,\n    trim: true\n  }\n});\n\nSchema.pre(\"save\", function (next) {\n  if (this.isModified(\"password\")) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  return next();\n});\nSchema.methods = {\n  _hashPassword(password) {\n    return _bcryptNodejs2.default.hashSync(password);\n  },\n\n  authenticateUser(password) {\n    return _bcryptNodejs2.default.compareSync(password, this.password);\n  },\n\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id,\n      type: 'admin'\n    }, _constants2.default.JWT_SECRET);\n  },\n\n  toAuthJSON() {\n    return {\n      _id: this._id,\n      name: this.name,\n      email: this.email,\n      type: this.type,\n      avatar: this.avatar,\n      token: `bearer ${this.createToken()}`\n    };\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      name: this.name,\n      email: this.email,\n      avatar: this.avatar\n    };\n  },\n\n  _favorites: {\n    async posts(postId) {\n      if (this.favorites.posts.indexOf(postId) >= 0) {\n        this.favorites.posts.remove(postId);\n        await _post2.default.decFavoriteCount(postId);\n      } else {\n        this.favorites.posts.push(postId);\n        await _post2.default.incFavoriteCount(postId);\n      }\n\n      return this.save();\n    },\n\n    isPostIsFavorite(postId) {\n      if (this.favorites.posts.indexOf(postId) >= 0) {\n        return true;\n      }\n\n      return false;\n    }\n\n  }\n};\nSchema.plugin(_mongoosePaginate2.default);\nexports.default = _mongoose2.default.model(\"Admin\", Schema);\n\n//# sourceURL=webpack:///./src/modules/admin/admin.model.js?");

/***/ }),

/***/ "./src/modules/admin/admin.routes.js":
/*!*******************************************!*\
  !*** ./src/modules/admin/admin.routes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _admin = __webpack_require__(/*! ./admin.controllers */ \"./src/modules/admin/admin.controllers.js\");\n\nvar userController = _interopRequireWildcard(_admin);\n\nvar _admin2 = __webpack_require__(/*! ./admin.validations */ \"./src/modules/admin/admin.validations.js\");\n\nvar _admin3 = _interopRequireDefault(_admin2);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = (0, _express.Router)();\nroutes.post(\"/register\", (0, _expressValidation2.default)(_admin3.default.register), userController.AddAdmin);\nroutes.post(\"/login\", _auth.authAdminLocal, userController.login);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/admin/admin.routes.js?");

/***/ }),

/***/ "./src/modules/admin/admin.services.js":
/*!*********************************************!*\
  !*** ./src/modules/admin/admin.services.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst Model = __webpack_require__(/*! ./admin.model */ \"./src/modules/admin/admin.model.js\").default;\n\nconst getIp = __webpack_require__(/*! ipware */ \"ipware\")().get_ip;\n\nconst name = \"admin\";\n\nexports.save = async data => {\n  try {\n    const model = new Model(data);\n    return await model.save();\n  } catch (e) {\n    throw Error(e);\n  }\n};\n\nexports.fetch = async (query, page, limit) => {\n  try {\n    return await Model.paginate(query, {\n      page,\n      limit,\n      sort: {\n        _id: \"asc\"\n      }\n    });\n  } catch (e) {\n    throw Error(`Error while paginating ${name}s`);\n  }\n};\n\nexports.fetchOne = async query => {\n  try {\n    return await Model.findOne(query);\n  } catch (e) {\n    throw Error(`Error fetching ${name}`);\n  }\n};\n\nexports.update = async (query, payload) => {\n  try {\n    return await Model.updateOne(query, {\n      $set: payload\n    });\n  } catch (e) {\n    throw Error(`Error editing ${name}`);\n  }\n};\n\nexports.delete = async query => {\n  try {\n    return await Model.deleteOne(query);\n  } catch (e) {\n    throw Error(`Error deleting ${name}`);\n  }\n};\n\nexports.getIP = req => {\n  const ipInfo = getIp(req);\n  return ipInfo.clientIp;\n};\n\n//# sourceURL=webpack:///./src/modules/admin/admin.services.js?");

/***/ }),

/***/ "./src/modules/admin/admin.validations.js":
/*!************************************************!*\
  !*** ./src/modules/admin/admin.validations.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nexports.default = {\n  register: {\n    body: {\n      email: _joi2.default.string().email().required(),\n      password: _joi2.default.string().regex(passwordReg).required(),\n      type: _joi2.default.string().required(),\n      name: _joi2.default.string().required()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/admin/admin.validations.js?");

/***/ }),

/***/ "./src/modules/courier/courier.controllers.js":
/*!****************************************************!*\
  !*** ./src/modules/courier/courier.controllers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createUser = createUser;\nexports.resendSmsToken = resendSmsToken;\nexports.verifySmsToken = verifySmsToken;\nexports.resendEmail = resendEmail;\nexports.confirmEmail = confirmEmail;\nexports.login = login;\nexports.forgotPassword = forgotPassword;\nexports.resetPassword = resetPassword;\nexports.changePassword = changePassword;\nexports.updateInfo = updateInfo;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nvar _courier = __webpack_require__(/*! ./courier.model */ \"./src/modules/courier/courier.model.js\");\n\nvar _courier2 = _interopRequireDefault(_courier);\n\nvar _mail = __webpack_require__(/*! ../../services/mail.services */ \"./src/services/mail.services.js\");\n\nvar _mail2 = _interopRequireDefault(_mail);\n\nvar _templates = __webpack_require__(/*! ../../services/templates */ \"./src/services/templates.js\");\n\nvar emailTemplates = _interopRequireWildcard(_templates);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createUser(req, res) {\n  try {\n    // eslint-disable-next-line no-shadow\n    const confirmEmail = {\n      token: _crypto2.default.randomBytes(20).toString(\"hex\"),\n      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)\n    };\n    const courier = await _courier2.default.create({ ...req.body,\n      confirmEmail\n    });\n    const email = emailTemplates.courierWelcomeEmail({\n      email: courier.email,\n      token: courier.confirmEmail.token\n    });\n    await Promise.all([courier.sendAuthyToken(), (0, _mail2.default)({\n      from: `GooSendr <${_constants2.default.no_reply}>`,\n      to: [req.body.email],\n      subject: \"Welcome to GooSendr\",\n      body: email\n    })]);\n    return res.status(_httpStatus2.default.CREATED).json(courier.toAuthJSON());\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function resendSmsToken(req, res) {\n  try {\n    const courier = await _courier2.default.findById(req.params.id);\n\n    if (!courier) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    await courier.sendAuthyToken();\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function verifySmsToken(req, res) {\n  try {\n    const courier = await _courier2.default.findById(req.params.id);\n\n    if (!courier) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    await courier.verifyAuthyToken(req.body.code);\n    courier.verified = true;\n    await courier.save();\n    return res.status(_httpStatus2.default.OK).json(courier.toAuthJSON());\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function resendEmail(req, res) {\n  try {\n    const courier = await _courier2.default.findById(req.params.id);\n\n    if (!courier) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    const token = _crypto2.default.randomBytes(20).toString(\"hex\");\n\n    courier.confirmEmail = {\n      token,\n      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)\n    };\n    const email = emailTemplates.courierWelcomeEmail({\n      email: courier.email,\n      token\n    });\n    await Promise.all([courier.save(), (0, _mail2.default)({\n      from: `GooSendr <${_constants2.default.no_reply}>`,\n      to: [courier.email],\n      subject: \"Welcome to GooSendr\",\n      body: email\n    })]);\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function confirmEmail(req, res) {\n  try {\n    const courier = await _courier2.default.findOne({\n      \"confirmEmail.token\": req.body.token,\n      \"confirmEmail.expire\": {\n        $gt: Date.now()\n      },\n      email: req.body.email\n    });\n\n    if (!courier) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    if (courier.confirmed) {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json({\n        messge: \"this email has already been confirmed\"\n      });\n    }\n\n    courier.confirmed = true;\n    courier.confirmEmail.token = undefined;\n    courier.confirmEmail.expire = undefined;\n    return res.status(_httpStatus2.default.OK).json((await courier.save()));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function login(req, res, next) {\n  await req.user._login.save();\n  res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());\n  return next();\n}\n\nasync function forgotPassword(req, res) {\n  try {\n    const courier = await _courier2.default.findOne({\n      email: req.body.email\n    });\n\n    if (!courier) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    const token = _crypto2.default.randomBytes(20).toString(\"hex\");\n\n    const email = emailTemplates.forgotPassword({\n      username: courier.fullName,\n      token\n    });\n    courier.resetPassword = {\n      token,\n      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)\n    };\n    await Promise.all([courier.save(), (0, _mail2.default)({\n      from: `GooSendr <${_constants2.default.no_reply}>`,\n      to: [req.body.email],\n      subject: \"GooSendr Password Reset\",\n      body: email\n    })]);\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function resetPassword(req, res) {\n  try {\n    const courier = await _courier2.default.findOne({\n      \"resetPassword.token\": req.body.token,\n      \"resetPassword.expire\": {\n        $gt: Date.now()\n      }\n    });\n\n    if (!courier) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    if (req.body.newPassword !== req.body.verifyPassword) {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json({\n        messge: \"Passwords do not match\"\n      });\n    }\n\n    const email = emailTemplates.resetPassword({\n      username: courier.fullName\n    });\n    courier.password = req.body.newPassword;\n    courier.resetPassword.token = undefined;\n    courier.resetPassword.expire = undefined;\n    await Promise.all([courier.save(), (0, _mail2.default)({\n      from: `GooSendr <${_constants2.default.no_reply}>`,\n      to: [courier.email],\n      subject: \"Your password has been changed\",\n      body: email\n    })]);\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function changePassword(req, res) {\n  try {\n    const courier = req.user;\n\n    if (!courier.authenticateUser(req.body.oldPassword)) {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json({\n        messge: \"invalid old password\"\n      });\n    }\n\n    courier.password = req.body.newPassword;\n    await courier.save();\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function updateInfo(req, res) {\n  try {\n    const courier = req.user;\n    Object.keys(req.body).forEach(key => {\n      courier[key] = req.body[key];\n    });\n    return res.status(_httpStatus2.default.OK).json((await courier.save()));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/courier/courier.controllers.js?");

/***/ }),

/***/ "./src/modules/courier/courier.model.js":
/*!**********************************************!*\
  !*** ./src/modules/courier/courier.model.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _mongoosePaginate = __webpack_require__(/*! mongoose-paginate */ \"mongoose-paginate\");\n\nvar _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _publicIp = __webpack_require__(/*! public-ip */ \"public-ip\");\n\nvar _publicIp2 = _interopRequireDefault(_publicIp);\n\nvar _twilio = __webpack_require__(/*! twilio */ \"twilio\");\n\nvar _twilio2 = _interopRequireDefault(_twilio);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Created by AditekGH on 3/16/2019.\n */\nconst authy = __webpack_require__(/*! authy */ \"authy\")(_constants2.default.twilio.authyKey);\n\nconst twilioClient = (0, _twilio2.default)(_constants2.default.twilio.accountSid, _constants2.default.twilio.authToken); // USER SCHEMA\n\nconst Schema = _mongoose2.default.Schema({\n  fullName: {\n    type: String,\n    required: [true, \"fullName is required!\"],\n    trim: true\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, \"Email is required!\"],\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, \"Password is required!\"],\n    trim: true,\n    minlength: [4, \"Password need to be longer!\"]\n  },\n  phone: {\n    type: String,\n    unique: true,\n    required: [true, \"Phone Number is required!\"],\n    trim: true\n  },\n  countryCode: {\n    type: String,\n    required: [true, \"countryCode is required!\"],\n    trim: true\n  },\n  authyId: String,\n  verified: {\n    type: Boolean,\n    default: false\n  },\n  confirmed: {\n    type: Boolean,\n    default: false\n  },\n  ip: String,\n  resetPassword: {\n    token: String,\n    expire: Date\n  },\n  confirmEmail: {\n    token: String,\n    expire: Date\n  },\n  signup: {\n    type: Date,\n    default: Date.now\n  },\n  lastlogin: {\n    type: Date,\n    default: Date.now\n  },\n  address1: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  address2: {\n    type: String,\n    required: false,\n    trim: true\n  },\n  deviceToken: {\n    type: String,\n    required: false,\n    trim: true\n  },\n  avatar: {}\n});\n\nSchema.pre(\"save\", async function (next) {\n  if (this.isModified(\"password\")) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  if (!this.ip) {\n    this.ip = await this.getIP();\n  }\n\n  return next();\n});\nSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: \"{VALUE} already taken!\"\n});\nSchema.methods = {\n  _hashPassword(password) {\n    return _bcryptNodejs2.default.hashSync(password);\n  },\n\n  authenticateUser(password) {\n    return _bcryptNodejs2.default.compareSync(password, this.password);\n  },\n\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id,\n      type: 'courier'\n    }, _constants2.default.JWT_SECRET);\n  },\n\n  toAuthJSON() {\n    return {\n      _id: this._id,\n      username: this.username,\n      fullName: this.fullName,\n      email: this.email,\n      phone: this.phone,\n      countryCode: this.countryCode,\n      address1: this.address1,\n      address2: this.address2,\n      avatar: this.avatar,\n      token: `bearer ${this.createToken()}`\n    };\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      username: this.username,\n      fullName: this.fullName,\n      email: this.email,\n      phone: this.phone,\n      countryCode: this.countryCode,\n      address1: this.address1,\n      address2: this.address2,\n      avatar: this.avatar\n    };\n  },\n\n  toUserJson() {\n    return {\n      fullName: this.fullName,\n      phone: this.phone,\n      countryCode: this.countryCode\n    };\n  },\n\n  _login: {\n    async save() {\n      this.ip = await this.getIP();\n      this.lastlogin = new Date();\n      return await this.save();\n    }\n\n  },\n\n  getIP() {\n    return _publicIp2.default.v4();\n  },\n\n  verifyAuthyToken(otp) {\n    return new Promise((resolve, reject) => {\n      authy.verify(this.authyId, otp, (err, data) => {\n        if (err) {\n          reject(err);\n        }\n\n        if (data) {\n          resolve(data);\n        }\n      });\n    });\n  },\n\n  sendAuthyToken() {\n    return new Promise((resolve, reject) => {\n      if (!this.authyId) {\n        authy.register_user(this.email, this.phone, this.countryCode, async (err, user) => {\n          if (err) {\n            reject(err);\n          }\n\n          this.authyId = user.user.id;\n          await this.save();\n          sendToken(this.authyId);\n        });\n      } else {\n        sendToken(this.authyId);\n      }\n\n      function sendToken(authyId) {\n        authy.request_sms(authyId, true, (err, data) => {\n          if (err) {\n            reject(err);\n          }\n\n          if (data) {\n            resolve(data);\n          }\n        });\n      }\n\n      ;\n    });\n  },\n\n  async sendMessage(message) {\n    return await twilioClient.sendMessage({\n      to: `+${this.countryCode}${this.phone}`,\n      from: _constants2.default.twillio.number,\n      body: message\n    });\n  }\n\n};\nSchema.plugin(_mongoosePaginate2.default);\nmodule.exports = _mongoose2.default.model(\"Courier\", Schema);\n\n//# sourceURL=webpack:///./src/modules/courier/courier.model.js?");

/***/ }),

/***/ "./src/modules/courier/courier.routes.js":
/*!***********************************************!*\
  !*** ./src/modules/courier/courier.routes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _courier = __webpack_require__(/*! ./courier.controllers */ \"./src/modules/courier/courier.controllers.js\");\n\nvar courierController = _interopRequireWildcard(_courier);\n\nvar _courier2 = __webpack_require__(/*! ./courier.validations */ \"./src/modules/courier/courier.validations.js\");\n\nvar _courier3 = _interopRequireDefault(_courier2);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = (0, _express.Router)();\nroutes.post(\"/register\", (0, _expressValidation2.default)(_courier3.default.register), courierController.createUser);\nroutes.get(\"/resend/:id\", courierController.resendSmsToken);\nroutes.put(\"/verify/:id\", (0, _expressValidation2.default)(_courier3.default.verify), courierController.verifySmsToken);\nroutes.get(\"/resend-email/:id\", courierController.resendEmail);\nroutes.put(\"/confirm-email/:id\", (0, _expressValidation2.default)(_courier3.default.confirmEmail), courierController.confirmEmail);\nroutes.post(\"/login\", _auth.authCourierLocal, courierController.login);\nroutes.post(\"/forgot-password\", (0, _expressValidation2.default)(_courier3.default.forgotPassword), courierController.forgotPassword);\nroutes.post(\"/reset-password\", (0, _expressValidation2.default)(_courier3.default.resetPassword), courierController.resetPassword);\nroutes.patch(\"/change-password\", (0, _expressValidation2.default)(_courier3.default.changePassword), _auth.authJwt, courierController.changePassword);\nroutes.patch(\"/update-user\", (0, _expressValidation2.default)(_courier3.default.update), _auth.authJwt, courierController.updateInfo);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/courier/courier.routes.js?");

/***/ }),

/***/ "./src/modules/courier/courier.validations.js":
/*!****************************************************!*\
  !*** ./src/modules/courier/courier.validations.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nexports.default = {\n  register: {\n    body: {\n      fullName: _joi2.default.string().required(),\n      email: _joi2.default.string().email().required(),\n      password: _joi2.default.string().regex(passwordReg).required(),\n      phone: _joi2.default.number().required(),\n      countryCode: _joi2.default.string().required(),\n      address1: _joi2.default.string().required()\n    }\n  },\n  update: {\n    body: {\n      firstName: _joi2.default.string(),\n      lastName: _joi2.default.string(),\n      email: _joi2.default.string().email(),\n      phone: _joi2.default.string(),\n      password: _joi2.default.forbidden(),\n      address1: _joi2.default.string()\n    }\n  },\n  verify: {\n    body: {\n      code: _joi2.default.string().required()\n    }\n  },\n  confirmEmail: {\n    body: {\n      token: _joi2.default.string().required(),\n      email: _joi2.default.string().email().required()\n    }\n  },\n  forgotPassword: {\n    body: {\n      email: _joi2.default.string().required()\n    }\n  },\n  resetPassword: {\n    body: {\n      token: _joi2.default.string().required(),\n      newPassword: _joi2.default.string().regex(passwordReg).required(),\n      verifyPassword: _joi2.default.string().required()\n    }\n  },\n  changePassword: {\n    body: {\n      oldPassword: _joi2.default.string().required(),\n      newPassword: _joi2.default.string().regex(passwordReg).required()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/courier/courier.validations.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _admin = __webpack_require__(/*! ./admin/admin.routes */ \"./src/modules/admin/admin.routes.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nvar _user = __webpack_require__(/*! ./user/user.routes */ \"./src/modules/user/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _courier = __webpack_require__(/*! ./courier/courier.routes */ \"./src/modules/courier/courier.routes.js\");\n\nvar _courier2 = _interopRequireDefault(_courier);\n\nvar _address = __webpack_require__(/*! ./address/address.routes */ \"./src/modules/address/address.routes.js\");\n\nvar _address2 = _interopRequireDefault(_address);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* import postRoutes from \"./post/post.routes\"; */\nexports.default = app => {\n  app.use(\"/api/v1/admin\", _admin2.default);\n  /* app.use(\"/api/v1/posts\", postRoutes); */\n\n  app.use(\"/api/v1/courier\", _courier2.default);\n  app.use(\"/api/v1/user\", _user2.default);\n  app.use(\"/api/v1/address\", _address2.default);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/post/post.model.js":
/*!****************************************!*\
  !*** ./src/modules/post/post.model.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _slug = __webpack_require__(/*! slug */ \"slug\");\n\nvar _slug2 = _interopRequireDefault(_slug);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst PostSchema = _mongoose2.default.Schema({\n  title: {\n    type: String,\n    trim: true,\n    required: [true, \"Title is required!\"],\n    minlength: [3, \"Title need to be longer!\"],\n    unique: true\n  },\n  text: {\n    type: String,\n    trim: true,\n    required: [true, \"Text is required!\"],\n    minlength: [10, \"Text need to be longer!\"]\n  },\n  slug: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  user: {\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: \"Admin\"\n  },\n  favoriteCount: {\n    type: Number,\n    default: 0\n  }\n}, {\n  timestamps: true\n});\n\nPostSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: \"{VALUE} already taken!\"\n});\nPostSchema.pre(\"validate\", function (next) {\n  this._slugify();\n\n  next();\n});\nPostSchema.methods = {\n  _slugify() {\n    this.slug = (0, _slug2.default)(this.title);\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      title: this.title,\n      text: this.text,\n      createdAt: this.createdAt,\n      slug: this.slug,\n      user: this.user,\n      favoriteCount: this.favoriteCount\n    };\n  }\n\n};\nPostSchema.statics = {\n  createPost(args, user) {\n    return this.create({ ...args,\n      user\n    });\n  },\n\n  list({\n    skip = 0,\n    limit = 5\n  } = {}) {\n    return this.find().sort({\n      createdAt: -1\n    }).skip(skip).limit(limit).populate(\"user\");\n  },\n\n  incFavoriteCount(postId) {\n    return this.findByIdAndUpdate(postId, {\n      $inc: {\n        favoriteCount: 1\n      }\n    });\n  },\n\n  decFavoriteCount(postId) {\n    return this.findByIdAndUpdate(postId, {\n      $inc: {\n        favoriteCount: -1\n      }\n    });\n  }\n\n};\nexports.default = _mongoose2.default.model(\"Post\", PostSchema);\n\n//# sourceURL=webpack:///./src/modules/post/post.model.js?");

/***/ }),

/***/ "./src/modules/user/user.controllers.js":
/*!**********************************************!*\
  !*** ./src/modules/user/user.controllers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createUser = createUser;\nexports.resendSmsToken = resendSmsToken;\nexports.verifySmsToken = verifySmsToken;\nexports.login = login;\nexports.forgotPassword = forgotPassword;\nexports.resetPassword = resetPassword;\nexports.changePassword = changePassword;\nexports.updateUser = updateUser;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/user/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _mail = __webpack_require__(/*! ../../services/mail.services */ \"./src/services/mail.services.js\");\n\nvar _mail2 = _interopRequireDefault(_mail);\n\nvar _templates = __webpack_require__(/*! ../../services/templates */ \"./src/services/templates.js\");\n\nvar emailTemplates = _interopRequireWildcard(_templates);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createUser(req, res) {\n  try {\n    const user = await _user2.default.create(req.body);\n    const email = emailTemplates.userWelcomeEmail();\n    await Promise.all([user.sendAuthyToken(), (0, _mail2.default)({\n      from: `GooSendr <${_constants2.default.no_reply}>`,\n      to: [req.body.email],\n      subject: \"Welcome to GooSendr\",\n      body: email\n    })]);\n    return res.status(_httpStatus2.default.CREATED).json(user.toAuthJSON());\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function resendSmsToken(req, res) {\n  try {\n    const user = await _user2.default.findById(req.params.id);\n\n    if (!user) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    await user.sendAuthyToken();\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function verifySmsToken(req, res) {\n  try {\n    const user = await _user2.default.findById(req.params.id);\n\n    if (!user) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    await user.verifyAuthyToken(req.body.code);\n    user.verified = true;\n    await user.save();\n    return res.status(_httpStatus2.default.OK).json(user.toAuthJSON());\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function login(req, res, next) {\n  await req.user._login.save();\n  res.status(_httpStatus2.default.OK).json(req.user.toAuthJSON());\n  return next();\n}\n\nasync function forgotPassword(req, res) {\n  try {\n    const user = await _user2.default.findOne({\n      email: req.body.email\n    });\n\n    if (!user) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    const token = _crypto2.default.randomBytes(20).toString(\"hex\");\n\n    const email = emailTemplates.forgotPassword({\n      username: user.fullName,\n      token\n    });\n    user.resetPassword = {\n      token,\n      expire: new Date(+new Date() + 24 * 60 * 60 * 1000)\n    };\n    await Promise.all([user.save(), (0, _mail2.default)({\n      from: `GooSendr <${_constants2.default.no_reply}>`,\n      to: [req.body.email],\n      subject: \"GooSendr Password Reset\",\n      body: email\n    })]);\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function resetPassword(req, res) {\n  try {\n    const user = await _user2.default.findOne({\n      \"resetPassword.token\": req.body.token,\n      \"resetPassword.expire\": {\n        $gt: Date.now()\n      }\n    });\n\n    if (!user) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n\n    if (req.body.newPassword !== req.body.verifyPassword) {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json({\n        messge: \"Passwords do not match\"\n      });\n    }\n\n    const email = emailTemplates.resetPassword({\n      username: user.fullName\n    });\n    user.password = req.body.newPassword;\n    user.resetPassword = {\n      token: undefined,\n      expire: undefined\n    };\n    await Promise.all([user.save(), (0, _mail2.default)({\n      from: `GooSendr <${_constants2.default.no_reply}>`,\n      to: [user.email],\n      subject: \"Your password has been changed\",\n      body: email\n    })]);\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function changePassword(req, res) {\n  try {\n    const user = req.user;\n\n    if (!user.authenticateUser(req.body.oldPassword)) {\n      return res.status(_httpStatus2.default.BAD_REQUEST).json({\n        messge: \"invalid old password\"\n      });\n    }\n\n    user.password = req.body.newPassword;\n    await user.save();\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function updateUser(req, res) {\n  try {\n    const user = req.user;\n    Object.keys(req.body).forEach(key => {\n      user[key] = req.body[key];\n    });\n    return res.status(_httpStatus2.default.OK).json((await user.save()));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/user/user.controllers.js?");

/***/ }),

/***/ "./src/modules/user/user.model.js":
/*!****************************************!*\
  !*** ./src/modules/user/user.model.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _mongoosePaginate = __webpack_require__(/*! mongoose-paginate */ \"mongoose-paginate\");\n\nvar _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _publicIp = __webpack_require__(/*! public-ip */ \"public-ip\");\n\nvar _publicIp2 = _interopRequireDefault(_publicIp);\n\nvar _twilio = __webpack_require__(/*! twilio */ \"twilio\");\n\nvar _twilio2 = _interopRequireDefault(_twilio);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Created by AditekGH on 2/26/2019.\n */\nconst authy = __webpack_require__(/*! authy */ \"authy\")(_constants2.default.twilio.authyKey);\n\nconst twilioClient = (0, _twilio2.default)(_constants2.default.twilio.accountSid, _constants2.default.twilio.authToken); // USER SCHEMA\n\nconst Schema = _mongoose2.default.Schema({\n  fullName: {\n    type: String,\n    required: [true, \"fullName is required!\"],\n    trim: true\n  },\n  email: {\n    type: String,\n    unique: true,\n    required: [true, \"Email is required!\"],\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, \"Password is required!\"],\n    trim: true,\n    minlength: [4, \"Password need to be longer!\"]\n  },\n  phone: {\n    type: String,\n    unique: true,\n    required: [true, \"Phone Number is required!\"],\n    trim: true\n  },\n  countryCode: {\n    type: String,\n    required: [true, \"countryCode is required!\"],\n    trim: true\n  },\n  authyId: String,\n  verified: {\n    type: Boolean,\n    default: false\n  },\n  ip: String,\n  resetPassword: {\n    token: String,\n    expire: Date\n  },\n  signup: {\n    type: Date,\n    default: Date.now\n  },\n  lastlogin: {\n    type: Date,\n    default: Date.now\n  },\n  location: {\n    type: String,\n    required: false,\n    trim: true\n  },\n  deviceToken: {\n    type: String,\n    required: false,\n    trim: true\n  },\n  avatar: {},\n  facebook: {\n    id: {\n      type: String,\n      required: false,\n      trim: true\n    },\n    token: {\n      type: String,\n      required: false,\n      trim: true\n    },\n    fullname: {\n      type: String,\n      required: false,\n      trim: true\n    },\n    avatar: {},\n    expiration_date: {}\n  },\n  google: {\n    token: {\n      type: String,\n      required: false,\n      trim: true\n    },\n    fullname: {\n      type: String,\n      required: false,\n      trim: true\n    },\n    email: {\n      type: String,\n      required: false,\n      trim: true\n    },\n    avatar: {},\n    expiration_date: {}\n  }\n});\n\nSchema.pre(\"save\", async function (next) {\n  if (this.isModified(\"password\")) {\n    this.password = this._hashPassword(this.password);\n  }\n\n  if (!this.ip) {\n    this.ip = await this.getIP();\n  }\n\n  return next();\n});\nSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: \"{VALUE} already taken!\"\n});\nSchema.methods = {\n  _hashPassword(password) {\n    return _bcryptNodejs2.default.hashSync(password);\n  },\n\n  authenticateUser(password) {\n    return _bcryptNodejs2.default.compareSync(password, this.password);\n  },\n\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id,\n      type: 'user'\n    }, _constants2.default.JWT_SECRET);\n  },\n\n  toAuthJSON() {\n    return {\n      _id: this._id,\n      fullName: this.fullName,\n      email: this.email,\n      phone: this.phone,\n      countryCode: this.countryCode,\n      facebook: this.facebook,\n      google: this.google,\n      avatar: this.avatar,\n      token: `bearer ${this.createToken()}`\n    };\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      fullName: this.fullName,\n      email: this.email,\n      phone: this.phone,\n      countryCode: this.countryCode,\n      facebook: this.facebook,\n      google: this.google,\n      avatar: this.avatar\n    };\n  },\n\n  _login: {\n    async save() {\n      this.ip = await this.getIP();\n      this.lastlogin = new Date();\n      return await this.save();\n    }\n\n  },\n\n  getIP() {\n    return _publicIp2.default.v4();\n  },\n\n  verifyAuthyToken(otp) {\n    return new Promise((resolve, reject) => {\n      authy.verify(this.authyId, otp, (err, data) => {\n        if (err) {\n          reject(err);\n        }\n\n        if (data) {\n          resolve(data);\n        }\n      });\n    });\n  },\n\n  sendAuthyToken() {\n    return new Promise((resolve, reject) => {\n      if (!this.authyId) {\n        authy.register_user(this.email, this.phone, this.countryCode, async (err, user) => {\n          if (err) {\n            reject(err);\n          }\n\n          this.authyId = user.user.id;\n          await this.save();\n          sendToken(this.authyId);\n        });\n      } else {\n        sendToken(this.authyId);\n      }\n\n      function sendToken(authyId) {\n        authy.request_sms(authyId, true, (err, data) => {\n          if (err) {\n            reject(err);\n          }\n\n          if (data) {\n            resolve(data);\n          }\n        });\n      }\n\n      ;\n    });\n  },\n\n  async sendMessage(message) {\n    return await twilioClient.sendMessage({\n      to: `+${this.countryCode}${this.phone}`,\n      from: _constants2.default.twillio.number,\n      body: message\n    });\n  }\n\n};\nSchema.plugin(_mongoosePaginate2.default);\nmodule.exports = _mongoose2.default.model(\"User\", Schema);\n\n//# sourceURL=webpack:///./src/modules/user/user.model.js?");

/***/ }),

/***/ "./src/modules/user/user.routes.js":
/*!*****************************************!*\
  !*** ./src/modules/user/user.routes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _user = __webpack_require__(/*! ./user.controllers */ \"./src/modules/user/user.controllers.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validations */ \"./src/modules/user/user.validations.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = (0, _express.Router)();\nroutes.post(\"/register\", (0, _expressValidation2.default)(_user3.default.register), userController.createUser);\nroutes.get(\"/resend/:id\", userController.resendSmsToken);\nroutes.put(\"/verify/:id\", (0, _expressValidation2.default)(_user3.default.verify), userController.verifySmsToken);\nroutes.post(\"/login\", _auth.authUserLocal, userController.login);\nroutes.post(\"/forgot-password\", (0, _expressValidation2.default)(_user3.default.forgotPassword), userController.forgotPassword);\nroutes.post(\"/reset-password\", (0, _expressValidation2.default)(_user3.default.resetPassword), userController.resetPassword);\nroutes.patch(\"/change-password\", (0, _expressValidation2.default)(_user3.default.changePassword), _auth.authJwt, userController.changePassword);\nroutes.patch(\"/update-user\", (0, _expressValidation2.default)(_user3.default.update), _auth.authJwt, userController.updateUser);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/user/user.routes.js?");

/***/ }),

/***/ "./src/modules/user/user.validations.js":
/*!**********************************************!*\
  !*** ./src/modules/user/user.validations.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nexports.default = {\n  register: {\n    body: {\n      fullName: _joi2.default.string().required(),\n      email: _joi2.default.string().email().required(),\n      password: _joi2.default.string().regex(passwordReg).required(),\n      phone: _joi2.default.number().required(),\n      countryCode: _joi2.default.string().required()\n    }\n  },\n  update: {\n    body: {\n      firstName: _joi2.default.string(),\n      lastName: _joi2.default.string(),\n      email: _joi2.default.string().email(),\n      password: _joi2.default.forbidden(),\n      phone: _joi2.default.string()\n    }\n  },\n  verify: {\n    body: {\n      code: _joi2.default.string().required()\n    }\n  },\n  forgotPassword: {\n    body: {\n      email: _joi2.default.string().required()\n    }\n  },\n  resetPassword: {\n    body: {\n      token: _joi2.default.string().required(),\n      newPassword: _joi2.default.string().regex(passwordReg).required(),\n      verifyPassword: _joi2.default.string().required()\n    }\n  },\n  changePassword: {\n    body: {\n      oldPassword: _joi2.default.string().required(),\n      newPassword: _joi2.default.string().regex(passwordReg).required()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/user/user.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwt = exports.authCourierLocal = exports.authAdminLocal = exports.authUserLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _user = __webpack_require__(/*! ../modules/user/user.model */ \"./src/modules/user/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _courier = __webpack_require__(/*! ../modules/courier/courier.model */ \"./src/modules/courier/courier.model.js\");\n\nvar _courier2 = _interopRequireDefault(_courier);\n\nvar _admin = __webpack_require__(/*! ../modules/admin/admin.model */ \"./src/modules/admin/admin.model.js\");\n\nvar _admin2 = _interopRequireDefault(_admin);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// local Strategy\nconst localOpts = {\n  usernameField: \"email\"\n};\nconst localUserStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\nconst localAdminStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _admin2.default.findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\nconst localCourierStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _courier2.default.findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n}); // JWT strategy\n\nconst jwtOpts = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: _constants2.default.JWT_SECRET\n};\nconst jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {\n  try {\n    let user = null;\n\n    if (payload.type === 'user') {\n      user = await _user2.default.findOne({\n        _id: payload._id\n      });\n    }\n\n    if (payload.type === 'courier') {\n      user = await _courier2.default.findOne({\n        _id: payload._id\n      });\n    }\n\n    if (payload.type === 'admin') {\n      user = await _admin2.default.findOne({\n        _id: payload._id\n      });\n    }\n\n    if (!user) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n_passport2.default.use(\"user-local\", localUserStrategy);\n\n_passport2.default.use(\"admin-local\", localAdminStrategy);\n\n_passport2.default.use(\"courier-local\", localCourierStrategy);\n\n_passport2.default.use(\"jwt\", jwtStrategy);\n\nconst authUserLocal = exports.authUserLocal = _passport2.default.authenticate(\"user-local\", {\n  session: false\n});\n\nconst authAdminLocal = exports.authAdminLocal = _passport2.default.authenticate(\"admin-local\", {\n  session: false\n});\n\nconst authCourierLocal = exports.authCourierLocal = _passport2.default.authenticate(\"courier-local\", {\n  session: false\n});\n\nconst authJwt = exports.authJwt = _passport2.default.authenticate(\"jwt\", {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "./src/services/mail.services.js":
/*!***************************************!*\
  !*** ./src/services/mail.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = sendEmail;\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction sendEmail(options) {\n  _awsSdk2.default.config.update({\n    accessKeyId: _constants2.default.amazon.AccessKeyID,\n    secretAccessKey: _constants2.default.amazon.SecretAccessKey,\n    region: _constants2.default.amazon.region\n  });\n\n  const ses = new _awsSdk2.default.SES({\n    apiVersion: 'latest'\n  });\n  return new Promise((resolve, reject) => {\n    ses.sendEmail({\n      Source: options.from,\n      Destination: {\n        CcAddresses: options.cc,\n        ToAddresses: options.to\n      },\n      Message: {\n        Subject: {\n          Data: options.subject\n        },\n        Body: {\n          Html: {\n            Data: options.body\n          }\n        }\n      },\n      ReplyToAddresses: options.replyTo\n    }, (err, info) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(info);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/services/mail.services.js?");

/***/ }),

/***/ "./src/services/templates.js":
/*!***********************************!*\
  !*** ./src/services/templates.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.userWelcomeEmail = userWelcomeEmail;\nexports.courierWelcomeEmail = courierWelcomeEmail;\nexports.forgotPassword = forgotPassword;\nexports.resetPassword = resetPassword;\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst header = _fs2.default.readFileSync(_path2.default.join(_path2.default.resolve(\"./src/public\"), \"header.html\"), \"utf8\");\n\nconst footer = _fs2.default.readFileSync(_path2.default.join(_path2.default.resolve(\"./src/public\"), \"footer.html\"), \"utf8\");\n\nfunction userWelcomeEmail() {\n  const email = _fs2.default.readFileSync(_path2.default.join(_path2.default.resolve(\"./src/public\"), \"welcomeEmail.html\"), \"utf8\");\n\n  return email;\n}\n\nfunction courierWelcomeEmail(options) {\n  const email = `${header}\n  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnTextBlock\" style=\"min-width:100%;\">\n    <tbody class=\"mcnTextBlockOuter\">\n        <tr>\n            <td valign=\"top\" class=\"mcnTextBlockInner\" style=\"padding-top:9px;\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:100%; min-width:100%;\" width=\"100%\" class=\"mcnTextContentContainer\">\n                    <tbody>\n                        <tr>\n                            <td valign=\"top\" class=\"mcnTextContent\" style=\"padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;\">\n                                <h1 id=\"_name\" style=\"text-align: left;\">\n  <span style=\"font-size:24px\">Thank you for choosing GooSendr</span>\n  </h1></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnDividerBlock\" style=\"min-width:100%;\">\n    <tbody class=\"mcnDividerBlockOuter\">\n        <tr>\n            <td class=\"mcnDividerBlockInner\" style=\"min-width: 100%; padding: 18px 18px 0px;\">\n                <table class=\"mcnDividerContent\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"min-width:100%;\">\n                    <tbody>\n                        <tr>\n                            <td> <span></span></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnTextBlock\" style=\"min-width:100%;\">\n    <tbody class=\"mcnTextBlockOuter\">\n        <tr>\n            <td valign=\"top\" class=\"mcnTextBlockInner\" style=\"padding-top:9px;\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:100%; min-width:100%;\" width=\"100%\" class=\"mcnTextContentContainer\">\n                    <tbody>\n                        <tr>\n                            <td valign=\"top\" class=\"mcnTextContent\" style=\"padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;\">\n                                <p align=\"left\"> <span style=\"color:#000000\">\n  Congratulations! You have successfully registered with GooSendr as a courier.<br/><br/>\n  You've entered <strong><a href=\"mailto:${options.email}\" target=\"_blank\" >${options.email}</a> </strong> as the contact email address for your GooSendr account. To complete the process, we just need to verify that this email address belongs to you. Simply click the link below and sign in.</span></p>\n\n                                <p style=\"padding: 5px; margin: 0 0 6px;\"><strong> <a style=\"background: #3853a4; color: #fff; display: block; font-size: 12px; font-weight: bold; height: 24px; line-height: 20px; padding-top: 2px; text-align: center; text-decoration: none; width: 99px;\" href=\"${_constants2.default.url}/email-verification?token=${options.token}&email=${options.email}\" target=\"_blank\" >Verify Now</a> </strong></p>\n                                <p align=\"left\"> <span style=\"color:#000000\"> <strong>This link is only valid for 24 hours.</strong> </span></p>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n  ${footer}`;\n  return email;\n}\n\nfunction forgotPassword(options) {\n  const email = `${header}\n  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnTextBlock\" style=\"min-width:100%;\">\n    <tbody class=\"mcnTextBlockOuter\">\n        <tr>\n            <td valign=\"top\" class=\"mcnTextBlockInner\" style=\"padding-top:9px;\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:100%; min-width:100%;\" width=\"100%\" class=\"mcnTextContentContainer\">\n                    <tbody>\n                        <tr>\n                            <td valign=\"top\" class=\"mcnTextContent\" style=\"padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;\">\n                                <h1 id=\"_name\" style=\"text-align: left;\">\n  <span style=\"font-size:24px\">Hello ${options.username}</span>\n  </h1></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnDividerBlock\" style=\"min-width:100%;\">\n    <tbody class=\"mcnDividerBlockOuter\">\n        <tr>\n            <td class=\"mcnDividerBlockInner\" style=\"min-width: 100%; padding: 18px 18px 0px;\">\n                <table class=\"mcnDividerContent\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"min-width:100%;\">\n                    <tbody>\n                        <tr>\n                            <td> <span></span></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnTextBlock\" style=\"min-width:100%;\">\n    <tbody class=\"mcnTextBlockOuter\">\n        <tr>\n            <td valign=\"top\" class=\"mcnTextBlockInner\" style=\"padding-top:9px;\">\n                <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:100%; min-width:100%;\" width=\"100%\" class=\"mcnTextContentContainer\">\n                    <tbody>\n                        <tr>\n                            <td valign=\"top\" class=\"mcnTextContent\" style=\"padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;\">\n                                <p align=\"left\"> <span style=\"color:#000000\"> We're sorry you're having trouble logging into your <span class=\"il\">gooSendr</span> account. We're happy to be of service, just click on the forget my password link.\n                                    <a href=\"${_constants2.default.url}/reset-password?token=${options.token}\" target=\"_blank\">reset password</a>\n                                    </span>\n                                </p>\n                                <p align=\"left\"> <span style=\"color:#000000\"> <strong>This link is only valid for 24 hours.</strong> </span></p>\n                                <p align=\"left\"> <span style=\"color:#000000\"> If you didn't ask us for help with your password,send an email to <a>support@<span class=\"il\">gooltd</span>.com</a> or call us at <strong>(+233)-20-051 6773</strong>. </span>\n                                </p>\n                                <p align=\"left\"><span style=\"color:#000000\">Reporting, it is important because it helps us prevent fraudsters from stealing your information</span></p>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </td>\n        </tr>\n    </tbody>\n</table>\n   ${footer}`;\n  return email;\n}\n\nfunction resetPassword(options) {\n  const email = `\n  ${header}\n  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnTextBlock\" style=\"min-width:100%;\">\n  <tbody class=\"mcnTextBlockOuter\">\n      <tr>\n          <td valign=\"top\" class=\"mcnTextBlockInner\" style=\"padding-top:9px;\">\n              <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:100%; min-width:100%;\" width=\"100%\" class=\"mcnTextContentContainer\">\n                  <tbody>\n                      <tr>\n                          <td valign=\"top\" class=\"mcnTextContent\" style=\"padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;\">\n                              <h1 id=\"_name\" style=\"text-align: left;\">\n<span style=\"font-size:24px\">Hello ${options.username}</span>\n</h1></td>\n                      </tr>\n                  </tbody>\n              </table>\n          </td>\n      </tr>\n  </tbody>\n</table>\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnDividerBlock\" style=\"min-width:100%;\">\n  <tbody class=\"mcnDividerBlockOuter\">\n      <tr>\n          <td class=\"mcnDividerBlockInner\" style=\"min-width: 100%; padding: 18px 18px 0px;\">\n              <table class=\"mcnDividerContent\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"min-width:100%;\">\n                  <tbody>\n                      <tr>\n                          <td> <span></span></td>\n                      </tr>\n                  </tbody>\n              </table>\n          </td>\n      </tr>\n  </tbody>\n</table>\n<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" class=\"mcnTextBlock\" style=\"min-width:100%;\">\n  <tbody class=\"mcnTextBlockOuter\">\n      <tr>\n          <td valign=\"top\" class=\"mcnTextBlockInner\" style=\"padding-top:9px;\">\n              <table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width:100%; min-width:100%;\" width=\"100%\" class=\"mcnTextContentContainer\">\n                  <tbody>\n                      <tr>\n                          <td valign=\"top\" class=\"mcnTextContent\" style=\"padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;\">\n                              <p align=\"left\"> <span style=\"color:#000000\">\n   You just changed your password.<br /> If you didn't change your password, give us a call right away at <strong>(+233)-20-051 6773</strong>\n   </span></p>\n                              <p>Just a reminder:</p>\n                              <ul>\n                                  <li style=\"text-indent: 0px;margin-left: 28px;\">Never share your password with anyone.</li>\n                                  <li style=\"text-indent: 0px;margin-left: 28px;\">\n                                      Create passwords that are hard to guess and don't use personal information. Be sure to include uppercase and lowercase letters, numbers, and symbols.</li>\n                              </ul>\n                          </td>\n                      </tr>\n                  </tbody>\n              </table>\n          </td>\n      </tr>\n  </tbody>\n</table>\n  ${footer}\n  `;\n  return email;\n}\n\n//# sourceURL=webpack:///./src/services/templates.js?");

/***/ }),

/***/ "authy":
/*!************************!*\
  !*** external "authy" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"authy\");\n\n//# sourceURL=webpack:///external_%22authy%22?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "ipware":
/*!*************************!*\
  !*** external "ipware" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ipware\");\n\n//# sourceURL=webpack:///external_%22ipware%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-paginate":
/*!************************************!*\
  !*** external "mongoose-paginate" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-paginate\");\n\n//# sourceURL=webpack:///external_%22mongoose-paginate%22?");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");\n\n//# sourceURL=webpack:///external_%22mongoose-unique-validator%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "public-ip":
/*!****************************!*\
  !*** external "public-ip" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"public-ip\");\n\n//# sourceURL=webpack:///external_%22public-ip%22?");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"slug\");\n\n//# sourceURL=webpack:///external_%22slug%22?");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swagger-ui-express\");\n\n//# sourceURL=webpack:///external_%22swagger-ui-express%22?");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"twilio\");\n\n//# sourceURL=webpack:///external_%22twilio%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });
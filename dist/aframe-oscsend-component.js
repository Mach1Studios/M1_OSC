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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OSC = window.OSC;
var osc = '';

/* global AFRAME */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * OSCtest component for A-Frame.
 */
AFRAME.registerComponent('oscsend', {
  schema: {
    serverURL: { default: 'localhost' },
    serverPort: { default: 8080 },
    messagePath: { default: '' }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: true,

  /**
   * Initialize OSC event listeners.
   */
  initOscListeners: function initOscListeners() {
    osc.on('open', function () {
      console.log('osc connection open');
    });

    osc.on('close', function () {
      console.log('osc connection closed');
    });

    osc.on('error', function (err) {
      console.log('osc error', err);
    });
  },

  messages: {
    positionMessage: new OSC.Message(['{replaceme}', 'position']),
    rotationMessage: new OSC.Message(['{replaceme}', 'rotation'])
  },

  initReusedMessages: function initReusedMessages() {
    for (var v in this.messages) {
      this.messages[v].address = this.messages[v].address.replace('{replaceme}', this.data.messagePath || '');
      this.messages[v].types = 'fff';
      this.messages[v].args.push(0, 0, 0);
    }
  },

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function init() {
    this.initReusedMessages = AFRAME.utils.bind(this.initReusedMessages, this);
    this.updateMessageArgs = AFRAME.utils.bind(this.updateMessageArgs, this);

    osc = new OSC(); // defaults to WebsocketClientPlugin

    this.initOscListeners();
    this.initReusedMessages();
    osc.open({ host: this.data.serverURL, port: this.data.serverPort });
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function update(oldData) {},

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function remove() {
    osc.close();
  },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function pause() {},

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function play() {},

  //TODO: investigate AFRAME.utils.throttleTick for use here
  tick: function tick() {
    if (osc.status() !== OSC.STATUS.IS_OPEN) {
      return;
    }
    var el = this.el;
    this.updateMessageArgs(this.messages.rotationMessage, el.getAttribute('rotation'));
    this.updateMessageArgs(this.messages.positionMessage, el.getAttribute('position'));
    osc.send(this.messages.rotationMessage);
    osc.send(this.messages.positionMessage);
  },

  updateMessageArgs: function updateMessageArgs(message, xyzElAttribute) {
    message.args[0] = xyzElAttribute.x;
    message.args[1] = xyzElAttribute.y;
    message.args[2] = xyzElAttribute.z;
  }
});

/***/ })
/******/ ]);
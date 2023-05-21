"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.chatEvents = void 0;
exports.initEventHandler = initEventHandler;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _utility = _interopRequireDefault(require("./utility/utility.js"));
var chatEvents = null;
exports.chatEvents = chatEvents;
function ChatEvents(params) {
  var currentModuleInstance = this,
    //Utility = params.Utility,
    consoleLogging = params.consoleLogging,
    token = params.token,
    eventCallbacks = {
      connect: {},
      disconnect: {},
      reconnect: {},
      messageEvents: {},
      threadEvents: {},
      contactEvents: {},
      botEvents: {},
      userEvents: {},
      callEvents: {},
      callStreamEvents: {},
      fileUploadEvents: {},
      fileDownloadEvents: {},
      systemEvents: {},
      chatReady: {},
      error: {},
      chatState: {}
    };
  function censor(censor) {
    var i = 0;
    return function (key, value) {
      if (i !== 0 && (0, _typeof2["default"])(censor) === 'object' && (0, _typeof2["default"])(value) == 'object' && censor == value) return '[Circular]';
      if (i >= 29)
        // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';
      ++i; // so we know we aren't using the original object anymore

      return value;
    };
  }
  var PodChatErrorException = function PodChatErrorException(error) {
    var er = error.error ? error.error : error;
    this.code = er.code;
    this.message = er.message;
    this.uniqueId = error.uniqueId ? error.uniqueId : '';
    this.token = token;
    try {
      this.error = JSON.stringify(er, censor(er));
    } catch (error) {
      this.error = er;
      console.log(er);
    }
    this.environmentDetails = error.environmentDetails;
  };
  this.updateToken = function (newToken) {
    token = newToken;
  };

  /**
   * Fire Event
   *
   * Fires given Event with given parameters
   *
   * @access private
   *
   * @param {string}  eventName       name of event to be fired
   * @param {object}  param           params to be sent to the event function
   *
   * @return {undefined}
   */
  this.fireEvent = function (eventName, param) {
    if (eventName === "chatReady") {
      if (typeof navigator === "undefined") {
        consoleLogging && console.log("\x1b[90m    ☰ \x1b[0m\x1b[90m%s\x1b[0m", "Chat is Ready 😉");
      } else {
        consoleLogging && console.log("%c   Chat is Ready 😉", 'border-left: solid #666 10px; color: #666;');
      }
    }
    if (eventName === "error" || eventName === "callEvents" && param.type === "CALL_ERROR") {
      try {
        throw new PodChatErrorException(param);
      } catch (err) {
        console.error(err);
      }
    }
    for (var id in eventCallbacks[eventName]) {
      if (eventCallbacks[eventName] && eventCallbacks[eventName][id]) eventCallbacks[eventName][id](param);
    }
  };
  this.on = function (eventName, callback) {
    if (eventCallbacks[eventName]) {
      var id = _utility["default"].generateUUID();
      eventCallbacks[eventName][id] = callback;
      return id;
    }
  };
  this.off = function (eventName, eventId) {
    if (eventCallbacks[eventName]) {
      if (eventCallbacks[eventName].hasOwnProperty(eventId)) {
        delete eventCallbacks[eventName][eventId];
        return eventId;
      }
    }
  };
  this.clearEventCallbacks = function () {
    // Delete all event callbacks
    for (var i in eventCallbacks) {
      delete eventCallbacks[i];
    }
  };
}
function initEventHandler(params) {
  if (!chatEvents) {
    exports.chatEvents = chatEvents = new ChatEvents(params);
  }
  return chatEvents;
}
var _default = ChatEvents;
exports["default"] = _default;
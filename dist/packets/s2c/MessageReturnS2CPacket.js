"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageReturnS2CPacket = void 0;
var C2SPacket_1 = require("../C2SPacket");
var MessageReturnS2CPacket = /** @class */ (function (_super) {
    __extends(MessageReturnS2CPacket, _super);
    function MessageReturnS2CPacket(userId, time, messageId, message) {
        var _this = _super.call(this) || this;
        _this.MessageReturnS2CPacketType = null;
        _this.userId = userId;
        _this.time = time;
        _this.messageId = messageId;
        _this.message = message;
        return _this;
    }
    return MessageReturnS2CPacket;
}(C2SPacket_1.C2SPacket));
exports.MessageReturnS2CPacket = MessageReturnS2CPacket;

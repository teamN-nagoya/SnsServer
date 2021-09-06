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
exports.MessageDeleteC2SPacket = void 0;
var Packet_1 = require("../Packet");
var MessageDeleteC2SPacket = /** @class */ (function (_super) {
    __extends(MessageDeleteC2SPacket, _super);
    function MessageDeleteC2SPacket(passwordHash, userid) {
        var _this = _super.call(this) || this;
        _this.packetName = "MessageDeleteC2SPacket";
        _this.userid = userid;
        _this.passwordHash = passwordHash;
        return _this;
    }
    MessageDeleteC2SPacket.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return MessageDeleteC2SPacket;
}(Packet_1.Packet));
exports.MessageDeleteC2SPacket = MessageDeleteC2SPacket;

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
exports.messageSendC2SPacket = void 0;
var Packet_1 = require("../Packet");
var messageSendC2SPacket = /** @class */ (function (_super) {
    __extends(messageSendC2SPacket, _super);
    function messageSendC2SPacket(userid, message) {
        var _this = _super.call(this) || this;
        _this.packetName = "messageSendC2SPacket";
        _this.userid = userid;
        _this.message = message;
        return _this;
    }
    messageSendC2SPacket.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return messageSendC2SPacket;
}(Packet_1.Packet));
exports.messageSendC2SPacket = messageSendC2SPacket;

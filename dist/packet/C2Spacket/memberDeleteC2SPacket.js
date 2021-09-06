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
exports.MemberDeleteC2SPacket = void 0;
var Packet_1 = require("../Packet");
var MemberDeleteC2SPacket = /** @class */ (function (_super) {
    __extends(MemberDeleteC2SPacket, _super);
    function MemberDeleteC2SPacket(password, userid) {
        var _this = _super.call(this) || this;
        _this.packetName = "MemberDeleteC2SPacket";
        _this.userid = userid;
        _this.password = password;
        return _this;
    }
    MemberDeleteC2SPacket.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return MemberDeleteC2SPacket;
}(Packet_1.Packet));
exports.MemberDeleteC2SPacket = MemberDeleteC2SPacket;

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
exports.ProfileReturnS2CPacket = void 0;
var C2SPacket_1 = require("../C2SPacket");
var ProfileReturnS2CPacket = /** @class */ (function (_super) {
    __extends(ProfileReturnS2CPacket, _super);
    function ProfileReturnS2CPacket(userName, following) {
        var _this = _super.call(this) || this;
        _this.ProfileReturnS2CPacketType = null;
        _this.userName = userName;
        _this.following = following;
        return _this;
    }
    return ProfileReturnS2CPacket;
}(C2SPacket_1.C2SPacket));
exports.ProfileReturnS2CPacket = ProfileReturnS2CPacket;

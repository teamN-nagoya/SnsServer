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
exports.ProfileEditC2SPacket = void 0;
var C2SPacket_1 = require("../C2SPacket");
var ProfileEditC2SPacket = /** @class */ (function (_super) {
    __extends(ProfileEditC2SPacket, _super);
    function ProfileEditC2SPacket(userId, newUserName) {
        var _this = _super.call(this) || this;
        _this.ProfileEditC2SPacketType = null;
        _this.userId = userId;
        _this.newUserName = newUserName;
        return _this;
    }
    return ProfileEditC2SPacket;
}(C2SPacket_1.C2SPacket));
exports.ProfileEditC2SPacket = ProfileEditC2SPacket;

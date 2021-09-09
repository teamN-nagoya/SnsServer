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
exports.FollowersReturnS2CPacket = void 0;
var S2CPacket_1 = require("../S2CPacket");
var FollowersReturnS2CPacket = /** @class */ (function (_super) {
    __extends(FollowersReturnS2CPacket, _super);
    function FollowersReturnS2CPacket(followerUserId, followUserIds) {
        var _this = _super.call(this) || this;
        _this.FollowersReturnS2CPacketType = null;
        _this.followerUserId = followerUserId;
        _this.followUserIds = followUserIds;
        return _this;
    }
    return FollowersReturnS2CPacket;
}(S2CPacket_1.S2CPacket));
exports.FollowersReturnS2CPacket = FollowersReturnS2CPacket;

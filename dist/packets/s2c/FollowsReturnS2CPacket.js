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
exports.FollowsReturnS2CPacket = void 0;
var S2CPacket_1 = require("../S2CPacket");
var FollowsReturnS2CPacket = /** @class */ (function (_super) {
    __extends(FollowsReturnS2CPacket, _super);
    function FollowsReturnS2CPacket(myId, followUserIds) {
        var _this = _super.call(this) || this;
        _this.FollowersReturnS2CPacketType = null;
        _this.myId = myId;
        _this.followUserIds = followUserIds;
        return _this;
    }
    return FollowsReturnS2CPacket;
}(S2CPacket_1.S2CPacket));
exports.FollowsReturnS2CPacket = FollowsReturnS2CPacket;

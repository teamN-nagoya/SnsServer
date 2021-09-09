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
exports.S2CPacket = void 0;
var Packet_1 = require("../Packet");
var S2CPacket = /** @class */ (function (_super) {
    __extends(S2CPacket, _super);
    function S2CPacket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.S2CPacketType = null;
        return _this;
    }
    return S2CPacket;
}(Packet_1.Packet));
exports.S2CPacket = S2CPacket;

"use strict";
// import { Packet } from "../Packet";
// export class SignInC2SPacket extends Packet {
// 	override readonly packetName:string = "SignInC2SPacket";
// 	readonly userid:string
// 	readonly passwordHash:string
// 	constructor(passwordHash:string,userid:string) {
// 		super()
// 		this.userid = userid
// 		this.passwordHash = passwordHash
// 	}
// 	public toJson():string {
// 		return JSON.stringify(this)
// 	}
// }
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
exports.SignInRequestC2SPacket = void 0;
var C2SPacket_1 = require("../C2SPacket");
var SignInRequestC2SPacket = /** @class */ (function (_super) {
    __extends(SignInRequestC2SPacket, _super);
    function SignInRequestC2SPacket(userId, passwordHash) {
        var _this = _super.call(this) || this;
        _this.SignInRequestC2SPacketType = null;
        _this.userId = userId;
        _this.passwordHash = passwordHash;
        return _this;
    }
    return SignInRequestC2SPacket;
}(C2SPacket_1.C2SPacket));
exports.SignInRequestC2SPacket = SignInRequestC2SPacket;

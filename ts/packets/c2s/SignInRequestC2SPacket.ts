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

import { C2SPacket } from "../C2SPacket";

export class SignInRequestC2SPacket extends C2SPacket {
    readonly SignInRequestC2SPacketType:null = null;
    userId: string;
    passwordHash: string;

    constructor(userId:string,passwordHash:string) {
        super()
        this.userId = userId
        this.passwordHash = passwordHash
    }
}
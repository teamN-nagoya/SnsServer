import { Packet } from "../Packet";
export class MemberRegistionC2SPacket extends Packet {
	override readonly packetName:string = "MemverRegistrationC2SPacket";
	readonly userid:string
	readonly password:string
	constructor(password:string,userid:string) {
		super()
		this.userid = userid
		this.password = password
	}
	public toJson():string {
		return JSON.stringify(this)
	}
}
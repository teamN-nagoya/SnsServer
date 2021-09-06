import { Packet } from "../Packet";
export class messageSendC2SPacket extends Packet {
	override readonly packetName:string = "messageSendC2SPacket";
	readonly userid:string
	readonly message:string
	constructor(userid:string,message:string) {
		super()
		this.userid = userid
		this.message = message
	}
	public toJson():string {
		return JSON.stringify(this)
	}
}

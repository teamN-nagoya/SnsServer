import { Packet } from "../Packet";
export class MessageSendC2SPacket extends Packet {
	override readonly packetName:string = "MessageSendC2SPacket";
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

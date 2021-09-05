import { Packet } from "../Packet";
export class LoginRequestC2SPacket extends Packet {
	override readonly packetName:string = "LoginRegistrationC2SPacket";
	readonly userid:string
	readonly passwordHash:string
	constructor(passwordHash:string,userid:string) {
		super()
		this.userid = userid
		this.passwordHash = passwordHash
	}
	public toJson():string {
		return JSON.stringify(this)
	}
}


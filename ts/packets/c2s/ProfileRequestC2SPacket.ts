import { C2SPacket } from "../C2SPacket";

export class ProfileRequestC2SPacket extends C2SPacket {
	readonly ProfileRequestC2SPacketType:null = null;
	userId: string;
    
	constructor(userId:string) {
		super()
	    this.userId = userId
	}
}
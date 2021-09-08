import { C2SPacket } from "../C2SPacket";

export class MessageRequestC2SPacket extends C2SPacket {
	readonly MessageRequestC2SPacketType:null = null;
	userId: string;
    
	constructor(userId:string) {
		super()
	    this.userId = userId
	}
}
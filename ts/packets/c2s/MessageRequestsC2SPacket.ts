import { C2SPacket } from "../C2SPacket";

export class MessagesRequestC2SPacket extends C2SPacket {
	readonly MessagesRequestC2SPacketType:null = null;
	userId: string;
    
	constructor(userId:string) {
		super()
	    this.userId = userId
	}
}
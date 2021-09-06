import { C2SPacket } from "../C2SPacket";

export class MessageSendC2SPacket extends C2SPacket {
	readonly MessageSendC2SPacketType:null = null;
	userId: string;
	message: string;
    
	constructor(userId:string,message:string) {
	    super()
	    this.userId = userId
	    this.message = message
	}
}
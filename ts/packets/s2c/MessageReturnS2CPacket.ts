import { C2SPacket } from "../C2SPacket";

export class MessageReturnS2CPacket extends C2SPacket {
	readonly MessageReturnS2CPacketType:null = null;
	userId: string;
	time: string;
	messageId: string;
	message:string;
    
	constructor(userId:string,time:string,messageId:string,message:string) {
	    super()
	    this.userId = userId
	    this.time = time
	    this.messageId = messageId
	    this.message = message
	}
    }
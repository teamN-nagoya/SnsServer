import { S2CPacket } from "../S2CPacket";

export class MessageReturnS2CPacket extends S2CPacket {
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
import { C2SPacket } from "../C2SPacket";

export class ProfileRequestC2SPacket extends C2SPacket {
	readonly ProfileRequestC2SPacketType:null = null;
	userId: string;
	myId:string;
    
	constructor(userId:string,myId:string) {
		super()
	    this.userId = userId
	    this.myId = myId
	}
}
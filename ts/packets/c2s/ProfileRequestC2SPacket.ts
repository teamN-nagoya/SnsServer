import { C2SPacket } from "../C2SPacket";

export class ProfileRequest extends C2SPacket {
	readonly ProfileRequestC2SPacketType:null = null;
	userId: string;
    
	constructor(userId:string) {
		super()
	    this.userId = userId
	}
}
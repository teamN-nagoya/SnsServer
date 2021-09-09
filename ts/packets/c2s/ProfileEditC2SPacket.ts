import { C2SPacket } from "../C2SPacket";

export class ProfileEditC2SPacket extends C2SPacket {
	readonly ProfileEditC2SPacketType:null = null;
	userId: string;
	newUserName: string;
    
	constructor(userId:string,newUserName:string) {
		super()
	    this.userId = userId
	    this.newUserName = newUserName
	}
}
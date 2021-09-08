import { C2SPacket } from "../C2SPacket";

export class ProfileReturnS2CPacket extends C2SPacket {
	readonly ProfileReturnS2CPacketType:null = null;
	userName: string;
	following:string;
    
	constructor(userName:string,following:string) {
	    super()
	    this.userName = userName
	    this.following = following
	}
    }
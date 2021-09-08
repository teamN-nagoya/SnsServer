import { C2SPacket } from "../C2SPacket";

export class ProfileReturnS2CPacket extends C2SPacket {
	readonly ProfileReturnS2CPacketType:null = null;
	userName: string;
	following:boolean;
    
	constructor(userName:string,following:boolean) {
	    super()
	    this.userName = userName
	    this.following = following
	}
    }
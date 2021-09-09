import { S2CPacket } from "../S2CPacket";

export class ProfileReturnS2CPacket extends S2CPacket {
	readonly ProfileReturnS2CPacketType:null = null;
	userName: string;
	following:boolean;
    
	constructor(userName:string,following:boolean) {
	    super()
	    this.userName = userName
	    this.following = following
	}
    }
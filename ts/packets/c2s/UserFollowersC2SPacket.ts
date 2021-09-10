import { C2SPacket } from "../C2SPacket";

export class UserFollowersC2SPacket extends C2SPacket {
	readonly UserFollowersC2SPacketType:null = null;
	userId: string;
    
	constructor(userId:string) {
		super()
	    this.userId = userId
	}
}
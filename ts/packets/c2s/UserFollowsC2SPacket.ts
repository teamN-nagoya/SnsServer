import { C2SPacket } from "../C2SPacket";

export class UserFollowsC2SPacket extends C2SPacket {
	readonly UserFollowsC2SPacketType:null = null;
	userId: string;
    
	constructor(userId:string) {
		super()
	    this.userId = userId
	}
}
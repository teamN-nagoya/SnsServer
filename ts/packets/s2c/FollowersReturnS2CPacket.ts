import { S2CPacket } from "../S2CPacket";


export class FollowersReturnS2CPacket extends S2CPacket {
	readonly FollowersReturnS2CPacketType:null = null;
	followerUserId: string;
	followUserIds:string[];
    
	constructor(followerUserId:string,followUserIds:string[]) {
	    super()
	    this.followerUserId = followerUserId
	    this.followUserIds = followUserIds
	}
    }
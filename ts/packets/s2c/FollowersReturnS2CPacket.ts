import { S2CPacket } from "../S2CPacket";


export class FollowersReturnS2CPacket extends S2CPacket {
	readonly FollowersReturnS2CPacketType:null = null;
	myId: string;
	followerUserIds:string[];
    
	constructor(myId:string,followerUserIds:string[]) {
	    super()
	    this.myId = myId
	    this.followerUserIds = followerUserIds
	}
    }
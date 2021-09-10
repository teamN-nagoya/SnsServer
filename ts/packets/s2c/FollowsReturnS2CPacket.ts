import { S2CPacket } from "../S2CPacket";


export class FollowsReturnS2CPacket extends S2CPacket {
	readonly FollowersReturnS2CPacketType:null = null;
	myId: string;
	followUserIds:string[];
    
	constructor(myId:string,followUserIds:string[]) {
	    super()
	    this.myId = myId
	    this.followUserIds = followUserIds
	}
    }
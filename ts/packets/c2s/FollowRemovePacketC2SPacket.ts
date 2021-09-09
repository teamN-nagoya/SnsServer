import { C2SPacket } from "../C2SPacket";

export class FollowRemoveC2SPacket extends C2SPacket {
    readonly FollowRemoveC2SPacketType:null = null;
    followUserId:string;
    myId:string;

    constructor(myId:string,folloUserId:string) {
        super()
        this.myId = myId
        this.followUserId = folloUserId
    }
}
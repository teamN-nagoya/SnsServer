//受け取ったprofileRequestC2Sに記述のあるuseridをdbから取り出しprofileReturnS2CPacketに入れてReturn

import { followerIdGet, getfollowsDB} from "./FileFunction";

export function profileReturn(userId:string,myId:string){
	const db = getfollowsDB()
	const obj = {
		followerId:userId,
		myId:myId
	}

	const list = followerIdGet(db,obj)

	const followerlist = list["followId"]
	const result = followerlist.filter(function(id:any) {
		return obj.followerId !== myId;
	      });

	if(result.length){
		return true
	}else{
		return false
	}

}
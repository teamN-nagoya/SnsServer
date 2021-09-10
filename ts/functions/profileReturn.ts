//受け取ったprofileRequestC2Sに記述のあるuseridをdbから取り出しprofileReturnS2CPacketに入れてReturn

import { followerIdGet, getAccountDB, getfollowsDB, userIdGet} from "./FileFunction";

export function profileReturn(userId:string,myId:string){
	const db = getfollowsDB()
	const db2 = getAccountDB()
	const obj = {
		followerId:userId,
		myId:myId
	}
	const obj2 = {
		userId:userId
	}

	const list = followerIdGet(db,obj)
	const nameList = userIdGet(db2,obj2)
	const followerlist = list["followId"];
	const userName = nameList["userName"];
	console.log(followerlist)


	for(let i = 0; i < Object.keys(followerlist).length; i++){
		if(followerlist[i] == myId){
			const obj3 = {
				userName:userName,
				boolean:true
			}
			return obj3
		}
	}
	const obj3 = {
		userName:userName,
		boolean:false
	}
	return obj3
}
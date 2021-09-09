import { stringify } from "querystring"
import { followerIdGet, followsWriteFileJson, getfollowsDB } from "./FileFunction"


export function Unfollow(folloUserId:string,myId:string){
	let db = getfollowsDB()
	const obj = {
		followerId:folloUserId,
		followId:myId
	}

	const list = followerIdGet(db,obj)
	const followerlist = list["followId"]
	const result = followerlist.filter(function(id:any) {
		return obj.followId !== id;
	      });

	const followerObj = {
		followerId: folloUserId,
		followId: result
	}
	
	for(let i = 0; i < Object.keys(db).length; i++){
		if(db[i].followerId == obj.followerId){
			delete db[i]
			const filterDB = db.filter(Boolean);
			filterDB.push(followerObj)
			const sendDb = JSON.stringify(filterDB,undefined,1);
			followsWriteFileJson(sendDb)
			return true
		}
	}
	return true
}
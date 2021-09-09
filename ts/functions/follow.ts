import { followerIdGet, followsWriteFileJson, getfollowsDB, userIdGet } from "./FileFunction";

export function follow(folloUserId:string,myId:string){
	let db = getfollowsDB()
	const obj = {
		followerId:folloUserId,
		followId:myId
	}

	const list = followerIdGet(db,obj)
	const followerlist = list["followId"]
	followerlist.push(obj.followId)

	const followerObj = {
		followerId: folloUserId,
		followId: followerlist
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
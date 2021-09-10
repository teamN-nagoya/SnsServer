import { followerIdGet, getfollowsDB } from "./FileFunction";
import { follow } from "./follow";

export function timeLine(myId:string){
	const db = getfollowsDB()
	const obj ={
		followerId:myId
	}
	const list = followerIdGet(db,obj)
	const followIdlist = list["followId"]
	followIdlist.push(myId)

	return followIdlist
}
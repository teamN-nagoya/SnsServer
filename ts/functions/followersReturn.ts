import { followerIdGet, getfollowsDB} from "./FileFunction";

export function followersReturn(userId:string){
	const db = getfollowsDB()
	const obj = {
		followerId:userId 
	}
	const list = followerIdGet(db,obj)
	const followerList = list["followId"]

	if(list.length){
		return followerList
	}else{
		return followerList
	}

}
import { followerIdGet, getfollowsDB} from "./FileFunction";

export function followsReturn(userId:string){
	const db = getfollowsDB()
	const obj = {
		followerId:userId 
	}

	let list:any = [];
	let followsList:any = [];
	for(let i = 0; i < Object.keys(db).length; i++){
		list = db[i]
		if(list["followId"].includes(obj.followerId)){
			followsList.push(list["followerId"])
		}
	}

	if(list.length){
		return followsList
	}else{
		return followsList
	}

}
import { accountWriteFileJson, followsWriteFileJson, getfollowsDB } from "./FileFunction";
import { userIdCheck } from "./FileFunction";
import { getAccountDB } from "./FileFunction";

export function SignUp(userId:string,userName:string,passwordHash:string){ 
	//DB呼び出し＆デコード
	let db = getAccountDB()
	let db2 = getfollowsDB()

	//DBに受け取ったobj追加	
	const obj = {
		userId:userId,
		userName:userName,
		passwordHash:passwordHash
	}

	const followslist = {
		followerId:userId,
		followId:[]
	}

	//新規のユーザーidだったらaccountdata.jsonに追加
	if(!(userIdCheck(db,obj))){
		db.push(obj);
		db2.push(followslist);
		const sendDb1 = JSON.stringify(db,null,1);
		const sendDb2 = JSON.stringify(db2,null,1)
		accountWriteFileJson(sendDb1);
		followsWriteFileJson(sendDb2);
		return true
	} else {
		return false
	}
}
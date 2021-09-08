import { accountWriteFileJson } from "./FileFunction";
import { userIdCheck } from "./FileFunction";
import { getAccountDB } from "./FileFunction";

export function SignUp(userId:string,userName:string,passwordHash:string){ 
	//DB呼び出し＆デコード
	let db = getAccountDB()

	//DBに受け取ったobj追加	
	const obj = {
		userId:userId,
		userName:userName,
		passwordHash:passwordHash
	}

	console.log(obj)
	//新規のユーザーidだったらaccountdata.jsonに追加
	if(!(userIdCheck(db,obj))){
		db.push(obj);
		const sendDb = JSON.stringify(db,null,1);
		accountWriteFileJson(sendDb);
		return true
	} else {
		return false
	}
}
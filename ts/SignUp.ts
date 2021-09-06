import { SignUpRequestC2SPacket } from "./Packet/C2Spacket/SignUpRequestC2SPacket";
import { C2SPacket } from "./Packet/C2SPacket";
import fs from "fs";
import { accountWriteFileJson } from "./FileFunction";
import { useridcheck } from "./FileFunction";
import { getAccountDB } from "./FileFunction";

export function SignUp(userid:string,username:string,passwordhash:string){ 
	//DB呼び出し＆デコード
	let db = getAccountDB()

	//DBに受け取ったobj追加	
	const obj = {
		userId:userid,
		userName:username,
		passwordHash:passwordhash
	}

	console.log(obj)
	//新規のユーザーidだったらaccountdata.jsonに追加
	if(!(useridcheck(db,obj))){
		db.push(obj);
		const senddb = JSON.stringify(db,null,1);
		accountWriteFileJson(senddb);
		return true
	}
	else{
		return false
	}
}
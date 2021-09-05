import { MemberRegistionC2SPacket } from "./Packet/C2Spacket/MemberRegistrationC2SPacket";
import { Packet } from "./Packet/Packet";
import fs from "fs";
import { accountwriteFileJson } from "./FileFunction";
import { useridcheck } from "./FileFunction";

export function memverRegistration(userid:string,passwordhash:string){ 
	//accountdata.json呼び出し＆デコード
	const getdb = fs.readFileSync( "data/accountdata.json","utf8")
	let db = JSON.parse(getdb)

	//accountdata.jsonに受け取ったobj追加	
	const obj = {
		userId:userid,
		passwordHash:passwordhash
	}

	console.log(obj)
	//新規のユーザーidだったらaccountdata.jsonに追加
	if(!(useridcheck(db,obj))){
		db.push(obj);
		const senddb = JSON.stringify(db,null,1);
		accountwriteFileJson(senddb);
		return true
	}
	else{
		return false
	}
}
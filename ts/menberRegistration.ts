import { MemberRegistionC2SPacket } from "./Packet/C2Spacket/MemberRegistrationC2SPacket";
import { Packet } from "./Packet/Packet";
import fs from "fs";
import { accountwriteFileJson } from "./FileFunction";
import { useridcheck } from "./FileFunction";

export function memverRegistration(userid:string,pathwordhash:string){ 
	//accountdata.json呼び出し＆デコード
	const getdb = fs.readFileSync( "data/accountdata.json","utf8")
	let db = JSON.parse(getdb)
	//accountdata.jsonに受け取ったobj追加	
	const obj = {
		userid:userid,
		pathwordhash:pathwordhash
	}
	//新規のユーザーidだったらaccountdata.jsonに追加
	if(!(useridcheck(db,obj))){
		db.push(obj);
		const senddb = JSON.stringify(db,null,1);
		accountwriteFileJson(senddb);
	}
	else{
		console.log("userid重複、もしくはエラーが発生しています")
	}
}
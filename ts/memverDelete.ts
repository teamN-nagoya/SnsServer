//余裕があったら実装できたらなユーザー削除機能

import { MemberRegistionC2SPacket } from "./Packet/C2Spacket/MemberRegistrationC2SPacket";
import { Packet } from "./Packet/Packet";
import fs from "fs";
import { accountwriteFileJson } from "./FileFunction";
import { useridcheck } from "./FileFunction";
import { useridget } from "./FileFunction";

export function memverDelete(userid:string,passwordhash:string){ 
	//DB呼び出し＆デコード
	const getdb = fs.readFileSync( "data/accountdata.json","utf8")
	let db = JSON.parse(getdb)

	//accountdata.jsonに受け取ったobj追加	
	const obj = {
		userId:userid,
		passwordHash:passwordhash
	}

	//該当するuseridが登録されてるかチェック＆入力されたパスワードが正しければ削除
	if(useridcheck(db,obj)){
		if(useridget(db,obj).passwordHash == obj.passwordHash){
			//login成功
			for(let i = 0; i < Object.keys(db).length; i++){
				if(db[i].userId == obj.userId){
					delete db[i]
					db.pop()
					const senddb = JSON.stringify(db,undefined,1);
					accountwriteFileJson(senddb)
					console.log("ユーザー情報は削除されました")
					return true
				}
			}
			
		}
		else{
			//login失敗
		return false
		}
	}
	else{
		return false
	}
	//入力されたパスワードが正しければ削除
}
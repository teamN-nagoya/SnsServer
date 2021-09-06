//余裕があったら実装できたらなユーザー削除機能

import { SignUpC2SPacket } from "./Packet/C2Spacket/SignUpC2SPacket";
import { Packet } from "./Packet/Packet";
import fs from "fs";
import { accountWriteFileJson } from "./FileFunction";
import { useridcheck } from "./FileFunction";
import { useridget } from "./FileFunction";
import { getAccountDB } from "./FileFunction";

export function memverDelete(userid:string,passwordhash:string){ 
	//DB呼び出し＆デコード
	let db = getAccountDB()

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
					const filterDB = db.filter(Boolean)
					const senddb = JSON.stringify(filterDB,undefined,1);
					accountWriteFileJson(senddb)
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
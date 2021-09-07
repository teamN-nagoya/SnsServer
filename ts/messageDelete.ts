//バグあります　デバッグしろ水谷
import fs from "fs"; 
import { messageWriteFileJson } from "./FileFunction";
import { getMessageDB } from "./FileFunction";
import { userIdCheck } from "./FileFunction";
import { userIdGet } from "./FileFunction";


export function messageDelete(requestUserId:string,message:string){
	//DBからmessageデータを取得
	let db = getMessageDB()

	//入力情報を参照
	const obj = {
		userId:requestUserId,
		message:message
	}
	console.log(userIdGet(db,obj).userId)
	console.log(db.userId)
	console.log(obj.userId)
	//DBのmessageデータに取得してきたobjをpush
	if(userIdGet(db,obj).userId == obj.userId){
			//login成功
			for(let i = 0; i < Object.keys(db).length; i++){
				if(db[i].message == obj.message && db[i].userId == obj.userId){
					delete db[i]
					const filterDB = db.filter(Boolean)
					const sendDb = JSON.stringify(filterDB,undefined,1);
					messageWriteFileJson(sendDb)
					return true
				}
   
			}
			
		} else {
			//login失敗
			console.log("RequestされたUserIdとメッセージのUserIdが一致しません")
		return false
	}

	//pushしたものをDBに保存
	const sendDb = JSON.stringify(db,undefined,1);
			messageWriteFileJson(sendDb);
			return true
}
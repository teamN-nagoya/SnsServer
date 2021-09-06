//バグあります　デバッグしろ水谷
import fs from "fs"; 
import { messageWriteFileJson } from "./FileFunction";
import { getmessageDB } from "./FileFunction";
import { useridcheck } from "./FileFunction";
import { useridget } from "./FileFunction";


export function messageDelete(requestUserid:string,message:string){
	//DBからmessageデータを取得
	let db = getmessageDB()

	//入力情報を参照
	const obj = {
		userId:requestUserid,
		message:message
	}
	console.log(useridget(db,obj).userId)
	console.log(db.userId)
	console.log(obj.userId)
	//DBのmessageデータに取得してきたobjをpush
	if(useridget(db,obj).userId == obj.userId){
			//login成功
			for(let i = 0; i < Object.keys(db).length; i++){
				if(db[i].message == obj.message && db[i].userId == obj.userId){
					delete db[i]
					const filterDB = db.filter(Boolean)
					const senddb = JSON.stringify(filterDB,undefined,1);
					messageWriteFileJson(senddb)
					return true
				}
   
			}
			
		}
		else{
			//login失敗
			console.log("RequestされたUserIdとメッセージのUserIdが一致しません")
		return false
	}

	//pushしたものをDBに保存
	const senddb = JSON.stringify(db,undefined,1);
			messageWriteFileJson(senddb);
			return true
}
import fs from "fs"; 
import { messageWriteFileJson } from "./FileFunction";
import { getMessageDB } from "./FileFunction";


export function messageSend(userId:string,message:string){
//DBからmessageデータを取得
let db = getMessageDB()

//入力情報を参照
const obj = {
	userId:userId,
	message:message
}

//DBのmessageデータに取得してきたobjをpush
db.push(obj)

//pushしたものをDBに保存
const sendDb = JSON.stringify(db,undefined,1);
		messageWriteFileJson(sendDb);
		return true
}
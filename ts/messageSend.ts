import fs from "fs"; 
import { messageWriteFileJson } from "./FileFunction";
import { getmessageDB } from "./FileFunction";


export function messageSend(userid:string,message:string){
//DBからmessageデータを取得
let db = getmessageDB()

//入力情報を参照
const obj = {
	userId:userid,
	message:message
}

//DBのmessageデータに取得してきたobjをpush
db.push(obj)

//pushしたものをDBに保存
const senddb = JSON.stringify(db,undefined,1);
		messageWriteFileJson(senddb);
		return true
}
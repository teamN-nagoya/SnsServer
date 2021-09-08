import { messageWriteFileJson } from "./FileFunction";
import { getMessageDB } from "./FileFunction";
import uuid, { UUID } from "node-uuid";


export function messageSend(userId:string,message:string):string{
	//DBからmessageデータを取得
	let db = getMessageDB()
	const today = new Date();
	const time = today.getTime()

	const messageId = uuid.v4()

	//入力情報を参照
	const obj = {
		userId:userId,
		messageId:messageId,
		time:time,
		message:message
	}
	
	//DBのmessageデータに取得してきたobjをpush
	db.push(obj)
	
	//pushしたものをDBに保存
	const sendDb = JSON.stringify(db,undefined,1);
	messageWriteFileJson(sendDb);
	return messageId
}
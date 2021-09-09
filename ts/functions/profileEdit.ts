//プロフィール編集の機能を実装します　アカウントデータに保存するよ
import { accountWriteFileJson } from "./FileFunction";
import { userIdCheck } from "./FileFunction";
import { userIdGet } from "./FileFunction";
import { getAccountDB } from "./FileFunction";

export function profileEdit(userId:string,newUserName:string){ 
	//DB呼び出し＆デコード
	let db = getAccountDB()

	//accountData.jsonに受け取ったobj追加	
	const obj = {
		userId:userId,
		newUserName:newUserName
	}

	//該当するuserIdが登録されてるかチェック＆入力されたパスワードが正しければ削除
	if(userIdCheck(db,obj)){
			for(let i = 0; i < Object.keys(db).length; i++){
				if(db[i].userId == obj.userId){
					const list = db[i]
					delete db[i]
					const filterDB = db.filter(Boolean)
					list.userName = newUserName
					db.push(list)
					const sendDb = JSON.stringify(db,undefined,1);
					accountWriteFileJson(sendDb)
					return true
				}
			}
			
	} else {
		return false
	}
	//入力されたパスワードが正しければ削除
}
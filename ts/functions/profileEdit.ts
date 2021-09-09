//プロフィール編集の機能を実装します　アカウントデータに保存するよ

//memberDeleteと一緒にfollowsDataからも削除する記述を追加しろ水谷！！！！！！！！！
import { accountWriteFileJson } from "./FileFunction";
import { userIdCheck } from "./FileFunction";
import { userIdGet } from "./FileFunction";
import { getAccountDB } from "./FileFunction";

export function profileEdit(userId:string,passwordHash:string){ 
	//DB呼び出し＆デコード
	let db = getAccountDB()

	//accountData.jsonに受け取ったobj追加	
	const obj = {
		userId:userId,
		passwordHash:passwordHash
	}

	//該当するuserIdが登録されてるかチェック＆入力されたパスワードが正しければ削除
	if(userIdCheck(db,obj)){
		if(userIdGet(db,obj).passwordHash == obj.passwordHash){
			//login成功
			for(let i = 0; i < Object.keys(db).length; i++){
				if(db[i].userId == obj.userId){
					delete db[i]
					const filterDB = db.filter(Boolean)
					const sendDb = JSON.stringify(filterDB,undefined,1);
					accountWriteFileJson(sendDb)
					return true
				}
			}
			
		} else {
			//login失敗
			return false
		}
	} else {
		return false
	}
	//入力されたパスワードが正しければ削除
}
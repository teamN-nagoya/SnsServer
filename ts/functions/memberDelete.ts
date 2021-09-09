//memberDeleteと一緒にfollowsDataからも削除する記述を追加しろ水谷！！！！！！！！！
import { accountWriteFileJson,followsWriteFileJson, followerIdGet, getfollowsDB } from "./FileFunction";
import { userIdCheck } from "./FileFunction";
import { userIdGet } from "./FileFunction";
import { getAccountDB } from "./FileFunction";

export function memberDelete(userId:string,passwordHash:string){ 
	//DB呼び出し＆デコード
	let db = getAccountDB()
	let db2 = getfollowsDB()

	//accountData.jsonに受け取ったobj追加	
	const obj = {
		userId:userId,
		passwordHash:passwordHash
	}
	const obj2 = {
		followerId:userId,
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
					for(let i = 0; i < Object.keys(db).length; i++){
						if(db2[i].followerId == obj2.followerId){
							delete db2[i]
							const filterDB = db2.filter(Boolean);
							const sendDb = JSON.stringify(filterDB,undefined,1);
							followsWriteFileJson(sendDb)
							return true
						}
					}


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
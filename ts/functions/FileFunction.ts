
import fs from "fs";
	//jsonに書き出し
export function getAccountDB(){
	const getDb = fs.readFileSync( "data/accountdata.json","utf8")
	let db = JSON.parse(getDb||"undefined")
	return db
	}
export function getMessageDB(){
	const getDb = fs.readFileSync( "data/messagedata.json","utf8")
	let db = JSON.parse(getDb||"undefined")
	return db
	}

export function accountWriteFileJson(json:string){
	fs.writeFile( "data/accountdata.json" ,json,  (err) => {
		if(err){// 書き出しに失敗した場合
			console.log("エラーが発生しました。" + err)
			throw err
		} else {// 書き出しに成功した場合
			console.log("ファイルが正常に書き出されました")
		}
});}

export function messageWriteFileJson(joinjson:string){
	fs.writeFile( "data/messagedata.json" ,joinjson,  (err) => {
		if(err){// 書き出しに失敗した場合
			console.log("エラーが発生しました。" + err)
			throw err
		} else {// 書き出しに成功した場合
			console.log("ファイルが正常に書き出されました")
		}
});}



	//dbから該当するユーザー情報を取り出し
export function userIdGet(db:any,obj:any){
		for(let i = 0; i < Object.keys(db).length; i++){
			if(db[i].userId == obj.userId){
				const user = db[i]
				return user
			}
		}
		//同じuseridは含まれていない
		return false
	}

	//該当するユーザーIDが登録されているかチェック
export function userIdCheck(db:any,obj:any){
	for(let i = 0; i < Object.keys(db).length; i++){
		if(db[i].userId == obj.userId){
			//同じuserIdが含まれている
			return true
		}
	}
	//同じuserIdは含まれていない
	return false
}
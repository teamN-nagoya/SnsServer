
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
export function getfollowsDB(){
	const getDb = fs.readFileSync( "data/followsData.json","utf8")
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

export function followsWriteFileJson(joinjson:any){
	fs.writeFile( "data/followsData.json" ,joinjson,  (err) => {
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

export function followerIdGet(db:any,obj:any){
	for(let i = 0; i < Object.keys(db).length; i++){
		if(db[i].followerId == obj.followerId){
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


	//該当する全てのユーザーIDを取り出し
export function fullUserIdGet(db:any,obj:any){
	const userIdlist = [];
	for(let i = 0; i < Object.keys(db).length; i++){
		if(db[i].userId == obj.userId){
			userIdlist.push(db[i])
		}
	}
	if(userIdlist.length){
		return userIdlist
	}
	//同じmessageidは含まれていない
	return false
}
	//該当する全てのユーザーIDのMessageを取り出し
export function fullMessageIdGet(db:any,obj:any){
	const messagelist = [];
	for(let i = 0; i < Object.keys(db).length; i++){
		if(db[i].userId == obj.userId){
			messagelist.push(db[i])
		}
	}
	if(messagelist.length){
		return messagelist
	}
	//同じmessageidは含まれていない
	return false
}
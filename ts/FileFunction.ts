import fs from "fs";
	//jsonに書き出し
export function accountwriteFileJson(json:string){
	fs.writeFile( "data/accountdata.json" ,json,  (err) => {
		// 書き出しに失敗した場合
		if(err){
		  console.log("エラーが発生しました。" + err)
		  throw err
		}
		// 書き出しに成功した場合
		else{
		  console.log("ファイルが正常に書き出されました")
		}
});}

	//dbから該当するユーザーIDを取り出し
export function useridget(db:any,obj:any){
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
export function useridcheck(db:any,obj:any){
	for(let i = 0; i < Object.keys(db).length; i++){
		if(db[i].userId == obj.userId){
			//同じuseridが含まれている
			return true
		}
	}
	//同じuseridは含まれていない
	return false
}
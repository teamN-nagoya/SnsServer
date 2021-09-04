import fs from "fs";
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
export function useridcheck(db:any,obj:any){
	for(let i = 0; i < Object.keys(db).length; i++){
		if(db[i].userid == obj.userid){
			//同じuseridが含まれている
			return true
		}
	}
	//同じuseridは含まれていない
	return false
}
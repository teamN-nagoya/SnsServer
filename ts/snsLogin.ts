import fs from "fs";
import { accountwriteFileJson } from "./FileFunction";
import { useridcheck } from "./FileFunction";
// const bcrypt = require('bcrypt');
// const saltRounds = 10; //ストレッチング回数

export function snsLogin(userid:string,pathwordhash:string){
	//DBからデータ取り出し
	const getdb = fs.readFileSync( "data/accountdata.json","utf8");
	let db = JSON.parse(getdb)
	//入力情報を参照
	const obj = {
		userid:userid,
		pathwordhash:pathwordhash
	}
	//dbから該当するユーザーIDを取り出し
	function useridcheck(db:any,obj:any){
		for(let i = 0; i < Object.keys(db).length; i++){
			if(db[i].userid == obj.userid){
				//同じuseridが含まれている
				return true
			}
		}
		//同じuseridは含まれていない
		return false
	}
	
	//ログイン時にハッシュをチェック
	// if(saveaccount.password_hash){
	//ログイン成功をクライアントに返すやつ
	//}
	//else{
	//ログイン失敗をクライアントに返すやつ
	//}
	

}
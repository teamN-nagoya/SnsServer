import fs from "fs";
import { accountwriteFileJson } from "./FileFunction";
import { useridcheck } from "./FileFunction";
import { useridget } from "./FileFunction";
// const bcrypt = require('bcrypt');
// const saltRounds = 10; //ストレッチング回数

export function snsLogin(userid:string,passwordhash:string){
	//DBからデータ取り出し
	const getdb = fs.readFileSync( "data/accountdata.json","utf8");
	let db = JSON.parse(getdb)

	//入力情報を参照
	const obj = {
		userId:userid,
		passwordHash:passwordhash
	}

	console.log(useridget(db,obj))
	console.log(obj.passwordHash)
	console.log(useridget(db,obj).passwordHash == obj.passwordHash)
	//ログイン時にハッシュをチェック
	if(useridget(db,obj).passwordHash == obj.passwordHash){
		//login成功
	return true
	}
	else{
		//login失敗
	return false
	}

}
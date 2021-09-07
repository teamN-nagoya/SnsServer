import fs from "fs";
import { userIdGet } from "./FileFunction";
import { getAccountDB } from "./FileFunction";
// const bcrypt = require('bcrypt');
// const saltRounds = 10; //ストレッチング回数

export function SignIn(userId:string,passwordHash:string){
	//DB呼び出し＆デコード
	let db = getAccountDB()

	//入力情報を参照
	const obj = {
		userId:userId,
		passwordHash:passwordHash
	}


	//ログイン時にハッシュをチェック
	if(userIdGet(db,obj).passwordHash == obj.passwordHash){
		//login成功
	return true
	}
	else{
		//login失敗
	return false
	}

}
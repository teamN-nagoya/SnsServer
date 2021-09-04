"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snsLogin = void 0;
var bcrypt = require('bcrypt');
var saltRounds = 10; //ストレッチング回数
//
function snsLogin(userid, pathwordhash) {
    console.log("snsLogin");
    //DBからデータ取り出し
    //ユーザーIDを参照
    //ログイン時にハッシュをチェック
    // if(saveaccount.password_hash){
    //ログイン成功をクライアントに返すやつ
    //}
    //else{
    //ログイン失敗をクライアントに返すやつ
    //}
}
exports.snsLogin = snsLogin;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
// const bcrypt = require('bcrypt');
// const saltRounds = 10; //ストレッチング回数
function SignIn(userid, passwordhash) {
    //DB呼び出し＆デコード
    var db = (0, FileFunction_2.getAccountDB)();
    //入力情報を参照
    var obj = {
        userId: userid,
        passwordHash: passwordhash
    };
    //ログイン時にハッシュをチェック
    if ((0, FileFunction_1.useridget)(db, obj).passwordHash == obj.passwordHash) {
        //login成功
        return true;
    }
    else {
        //login失敗
        return false;
    }
}
exports.SignIn = SignIn;

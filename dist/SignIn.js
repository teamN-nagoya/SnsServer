"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = void 0;
var fs_1 = __importDefault(require("fs"));
var FileFunction_1 = require("./FileFunction");
// const bcrypt = require('bcrypt');
// const saltRounds = 10; //ストレッチング回数
function SignIn(userid, passwordhash) {
    //DB呼び出し＆デコード
    var getdb = fs_1.default.readFileSync("data/accountdata.json", "utf8");
    var db = JSON.parse(getdb || "undefined");
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

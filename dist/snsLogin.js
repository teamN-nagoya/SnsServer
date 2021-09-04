"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snsLogin = void 0;
var fs_1 = __importDefault(require("fs"));
var FileFunction_1 = require("./FileFunction");
var bcrypt = require('bcrypt');
var saltRounds = 10; //ストレッチング回数
function snsLogin(userid, pathwordhash) {
    //DBからデータ取り出し
    var getdb = fs_1.default.readFileSync("data/accountdata.json", "utf8");
    var db = JSON.parse(getdb);
    //入力情報を参照
    var obj = {
        userid: userid,
        pathwordhash: pathwordhash
    };
    //入力時に該当するユーザーIDがあるかチェック
    (0, FileFunction_1.useridcheck)(db, obj);
    //ログイン時にハッシュをチェック
    // if(saveaccount.password_hash){
    //ログイン成功をクライアントに返すやつ
    //}
    //else{
    //ログイン失敗をクライアントに返すやつ
    //}
}
exports.snsLogin = snsLogin;

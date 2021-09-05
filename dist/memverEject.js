"use strict";
//余裕があったら実装できたらなユーザー削除機能
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memverEject = void 0;
var fs_1 = __importDefault(require("fs"));
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function memverEject(userid, passwordhash) {
    //DB呼び出し＆デコード
    var getdb = fs_1.default.readFileSync("data/accountdata.json", "utf8");
    var db = JSON.parse(getdb);
    //accountdata.jsonに受け取ったobj追加	
    var obj = {
        userId: userid,
        passwordHash: passwordhash
    };
    //該当するuseridが登録されてるかチェック＆入力されたパスワードが正しければ削除
    if ((0, FileFunction_2.useridcheck)(db, obj)) {
        if ((0, FileFunction_3.useridget)(db, obj).passwordHash == obj.passwordHash) {
            //login成功
            for (var i = 0; i < Object.keys(db).length; i++) {
                if (db[i].userId == obj.userId) {
                    delete db[i];
                    db.pop();
                    var senddb = JSON.stringify(db, undefined, 1);
                    (0, FileFunction_1.accountwriteFileJson)(senddb);
                    console.log("ユーザー情報は削除されました");
                    return true;
                }
            }
        }
        else {
            //login失敗
            return false;
        }
    }
    else {
        return false;
    }
    //入力されたパスワードが正しければ削除
}
exports.memverEject = memverEject;

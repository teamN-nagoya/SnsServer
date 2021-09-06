"use strict";
//余裕があったら実装できたらなユーザー削除機能
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memverDelete = void 0;
var fs_1 = __importDefault(require("fs"));
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
var FileFunction_3 = require("./FileFunction");
function memverDelete(userid, passwordhash) {
    //DB呼び出し＆デコード
    var getdb = fs_1.default.readFileSync("data/accountdata.json", "utf8");
    var db = JSON.parse(getdb || "undefined");
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
                    var senddb = JSON.stringify(db, undefined, 1);
                    (0, FileFunction_1.accountWriteFileJson)(senddb);
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
exports.memverDelete = memverDelete;

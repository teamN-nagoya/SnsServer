"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useridcheck = exports.useridget = exports.messageWriteFileJson = exports.accountWriteFileJson = exports.getmessageDB = exports.getAccountDB = void 0;
var fs_1 = __importDefault(require("fs"));
//jsonに書き出し
function getAccountDB() {
    var getdb = fs_1.default.readFileSync("data/accountdata.json", "utf8");
    var db = JSON.parse(getdb || "undefined");
}
exports.getAccountDB = getAccountDB;
function getmessageDB() {
    var getdb = fs_1.default.readFileSync("data/messagedata.json", "utf8");
    var db = JSON.parse(getdb || "undefined");
}
exports.getmessageDB = getmessageDB;
getAccountDB;
function accountWriteFileJson(json) {
    fs_1.default.writeFile("data/accountdata.json", json, function (err) {
        // 書き出しに失敗した場合
        if (err) {
            console.log("エラーが発生しました。" + err);
            throw err;
        }
        // 書き出しに成功した場合
        else {
            console.log("ファイルが正常に書き出されました");
        }
    });
}
exports.accountWriteFileJson = accountWriteFileJson;
function messageWriteFileJson(joinjson) {
    fs_1.default.writeFile("data/messagedata.json", joinjson, function (err) {
        // 書き出しに失敗した場合
        if (err) {
            console.log("エラーが発生しました。" + err);
            throw err;
        }
        // 書き出しに成功した場合
        else {
            console.log("ファイルが正常に書き出されました");
        }
    });
}
exports.messageWriteFileJson = messageWriteFileJson;
//dbから該当するユーザー情報を取り出し
function useridget(db, obj) {
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].userId == obj.userId) {
            var user = db[i];
            return user;
        }
    }
    //同じuseridは含まれていない
    return false;
}
exports.useridget = useridget;
//該当するユーザーIDが登録されているかチェック
function useridcheck(db, obj) {
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].userId == obj.userId) {
            //同じuseridが含まれている
            return true;
        }
    }
    //同じuseridは含まれていない
    return false;
}
exports.useridcheck = useridcheck;

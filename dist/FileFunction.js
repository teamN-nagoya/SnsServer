"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useridcheck = exports.accountwriteFileJson = void 0;
var fs_1 = __importDefault(require("fs"));
function accountwriteFileJson(json) {
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
exports.accountwriteFileJson = accountwriteFileJson;
function useridcheck(db, obj) {
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].userid == obj.userid) {
            //同じuseridが含まれている
            return true;
        }
    }
    //同じuserid含まれていない
    return false;
}
exports.useridcheck = useridcheck;

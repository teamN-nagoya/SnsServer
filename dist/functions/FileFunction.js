"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullMessageIdGet = exports.fullUserIdGet = exports.userIdCheck = exports.followerIdGet = exports.userIdGet = exports.followsWriteFileJson = exports.messageWriteFileJson = exports.accountWriteFileJson = exports.getfollowsDB = exports.getMessageDB = exports.getAccountDB = void 0;
var fs_1 = __importDefault(require("fs"));
//jsonに書き出し
function getAccountDB() {
    var getDb = fs_1.default.readFileSync("data/accountdata.json", "utf8");
    var db = JSON.parse(getDb || "undefined");
    return db;
}
exports.getAccountDB = getAccountDB;
function getMessageDB() {
    var getDb = fs_1.default.readFileSync("data/messagedata.json", "utf8");
    var db = JSON.parse(getDb || "undefined");
    return db;
}
exports.getMessageDB = getMessageDB;
function getfollowsDB() {
    var getDb = fs_1.default.readFileSync("data/followsData.json", "utf8");
    var db = JSON.parse(getDb || "undefined");
    return db;
}
exports.getfollowsDB = getfollowsDB;
function accountWriteFileJson(json) {
    fs_1.default.writeFile("data/accountdata.json", json, function (err) {
        if (err) { // 書き出しに失敗した場合
            console.log("エラーが発生しました。" + err);
            throw err;
        }
        else { // 書き出しに成功した場合
            console.log("ファイルが正常に書き出されました");
        }
    });
}
exports.accountWriteFileJson = accountWriteFileJson;
function messageWriteFileJson(joinjson) {
    fs_1.default.writeFile("data/messagedata.json", joinjson, function (err) {
        if (err) { // 書き出しに失敗した場合
            console.log("エラーが発生しました。" + err);
            throw err;
        }
        else { // 書き出しに成功した場合
            console.log("ファイルが正常に書き出されました");
        }
    });
}
exports.messageWriteFileJson = messageWriteFileJson;
function followsWriteFileJson(joinjson) {
    fs_1.default.writeFile("data/followsData.json", joinjson, function (err) {
        if (err) { // 書き出しに失敗した場合
            console.log("エラーが発生しました。" + err);
            throw err;
        }
        else { // 書き出しに成功した場合
            console.log("ファイルが正常に書き出されました");
        }
    });
}
exports.followsWriteFileJson = followsWriteFileJson;
//dbから該当するユーザー情報を取り出し
function userIdGet(db, obj) {
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].userId == obj.userId) {
            var user = db[i];
            return user;
        }
    }
    //同じuseridは含まれていない
    return false;
}
exports.userIdGet = userIdGet;
function followerIdGet(db, obj) {
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].followerId == obj.followerId) {
            var user = db[i];
            return user;
        }
    }
    //同じuseridは含まれていない
    return false;
}
exports.followerIdGet = followerIdGet;
//該当するユーザーIDが登録されているかチェック
function userIdCheck(db, obj) {
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].userId == obj.userId) {
            //同じuserIdが含まれている
            return true;
        }
    }
    //同じuserIdは含まれていない
    return false;
}
exports.userIdCheck = userIdCheck;
//該当する全てのユーザーIDを取り出し
function fullUserIdGet(db, obj) {
    var userIdlist = [];
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].userId == obj.userId) {
            userIdlist.push(db[i]);
        }
    }
    if (userIdlist.length) {
        return userIdlist;
    }
    //同じmessageidは含まれていない
    return false;
}
exports.fullUserIdGet = fullUserIdGet;
//該当する全てのユーザーIDのMessageを取り出し
function fullMessageIdGet(db, obj) {
    var messagelist = [];
    for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].userId == obj.userId) {
            messagelist.push(db[i]);
        }
    }
    if (messagelist.length) {
        return messagelist;
    }
    //同じmessageidは含まれていない
    return false;
}
exports.fullMessageIdGet = fullMessageIdGet;

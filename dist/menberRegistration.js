"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memverRegistration = void 0;
var fs_1 = __importDefault(require("fs"));
var FileFunction_1 = require("./FileFunction");
var FileFunction_2 = require("./FileFunction");
function memverRegistration(userid, passwordhash) {
    //accountdata.json呼び出し＆デコード
    var getdb = fs_1.default.readFileSync("data/accountdata.json", "utf8");
    var db = JSON.parse(getdb);
    //accountdata.jsonに受け取ったobj追加	
    var obj = {
        userId: userid,
        passwordHash: passwordhash
    };
    console.log(obj);
    //新規のユーザーidだったらaccountdata.jsonに追加
    if (!((0, FileFunction_2.useridcheck)(db, obj))) {
        db.push(obj);
        var senddb = JSON.stringify(db, null, 1);
        (0, FileFunction_1.accountwriteFileJson)(senddb);
        return true;
    }
    else {
        return false;
    }
}
exports.memverRegistration = memverRegistration;

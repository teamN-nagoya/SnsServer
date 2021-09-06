"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSend = void 0;
var fs_1 = __importDefault(require("fs"));
var FileFunction_1 = require("./FileFunction");
function messageSend(userid, message) {
    //DBからmessageデータを取得
    var getdb = fs_1.default.readFileSync("data/messagedata.json", "utf8");
    var db = JSON.parse(getdb || "undefined");
    //入力情報を参照
    var obj = {
        userId: userid,
        message: message
    };
    //DBのmessageデータに取得してきたobjをpush
    db.push(obj);
    //pushしたものをDBに保存
    var senddb = JSON.stringify(db, undefined, 1);
    (0, FileFunction_1.messageWriteFileJson)(senddb);
    return true;
}
exports.messageSend = messageSend;

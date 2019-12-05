
"use strict";

let WaypointPull = require('./WaypointPull.js')
let ParamGet = require('./ParamGet.js')
let FileRename = require('./FileRename.js')
let LogRequestData = require('./LogRequestData.js')
let SetMode = require('./SetMode.js')
let FileRead = require('./FileRead.js')
let SetMavFrame = require('./SetMavFrame.js')
let FileOpen = require('./FileOpen.js')
let ParamPull = require('./ParamPull.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let FileChecksum = require('./FileChecksum.js')
let CommandTOL = require('./CommandTOL.js')
let FileClose = require('./FileClose.js')
let FileRemove = require('./FileRemove.js')
let FileList = require('./FileList.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let ParamSet = require('./ParamSet.js')
let CommandHome = require('./CommandHome.js')
let FileWrite = require('./FileWrite.js')
let CommandInt = require('./CommandInt.js')
let CommandLong = require('./CommandLong.js')
let FileMakeDir = require('./FileMakeDir.js')
let CommandBool = require('./CommandBool.js')
let LogRequestList = require('./LogRequestList.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let ParamPush = require('./ParamPush.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let WaypointPush = require('./WaypointPush.js')
let StreamRate = require('./StreamRate.js')
let WaypointClear = require('./WaypointClear.js')
let FileTruncate = require('./FileTruncate.js')

module.exports = {
  WaypointPull: WaypointPull,
  ParamGet: ParamGet,
  FileRename: FileRename,
  LogRequestData: LogRequestData,
  SetMode: SetMode,
  FileRead: FileRead,
  SetMavFrame: SetMavFrame,
  FileOpen: FileOpen,
  ParamPull: ParamPull,
  FileRemoveDir: FileRemoveDir,
  FileChecksum: FileChecksum,
  CommandTOL: CommandTOL,
  FileClose: FileClose,
  FileRemove: FileRemove,
  FileList: FileList,
  WaypointSetCurrent: WaypointSetCurrent,
  ParamSet: ParamSet,
  CommandHome: CommandHome,
  FileWrite: FileWrite,
  CommandInt: CommandInt,
  CommandLong: CommandLong,
  FileMakeDir: FileMakeDir,
  CommandBool: CommandBool,
  LogRequestList: LogRequestList,
  LogRequestEnd: LogRequestEnd,
  ParamPush: ParamPush,
  CommandTriggerControl: CommandTriggerControl,
  WaypointPush: WaypointPush,
  StreamRate: StreamRate,
  WaypointClear: WaypointClear,
  FileTruncate: FileTruncate,
};

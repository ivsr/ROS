
"use strict";

let TimesyncStatus = require('./TimesyncStatus.js');
let RTCM = require('./RTCM.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let Altitude = require('./Altitude.js');
let HilGPS = require('./HilGPS.js');
let WaypointReached = require('./WaypointReached.js');
let ActuatorControl = require('./ActuatorControl.js');
let LogData = require('./LogData.js');
let BatteryStatus = require('./BatteryStatus.js');
let Mavlink = require('./Mavlink.js');
let State = require('./State.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let HilControls = require('./HilControls.js');
let Vibration = require('./Vibration.js');
let ParamValue = require('./ParamValue.js');
let ManualControl = require('./ManualControl.js');
let PositionTarget = require('./PositionTarget.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let Waypoint = require('./Waypoint.js');
let VFR_HUD = require('./VFR_HUD.js');
let Thrust = require('./Thrust.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let WaypointList = require('./WaypointList.js');
let StatusText = require('./StatusText.js');
let DebugValue = require('./DebugValue.js');
let CommandCode = require('./CommandCode.js');
let FileEntry = require('./FileEntry.js');
let RCOut = require('./RCOut.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let RadioStatus = require('./RadioStatus.js');
let LogEntry = require('./LogEntry.js');
let HomePosition = require('./HomePosition.js');
let ExtendedState = require('./ExtendedState.js');
let HilSensor = require('./HilSensor.js');
let Trajectory = require('./Trajectory.js');
let RCIn = require('./RCIn.js');

module.exports = {
  TimesyncStatus: TimesyncStatus,
  RTCM: RTCM,
  OpticalFlowRad: OpticalFlowRad,
  Altitude: Altitude,
  HilGPS: HilGPS,
  WaypointReached: WaypointReached,
  ActuatorControl: ActuatorControl,
  LogData: LogData,
  BatteryStatus: BatteryStatus,
  Mavlink: Mavlink,
  State: State,
  CamIMUStamp: CamIMUStamp,
  ADSBVehicle: ADSBVehicle,
  HilStateQuaternion: HilStateQuaternion,
  HilControls: HilControls,
  Vibration: Vibration,
  ParamValue: ParamValue,
  ManualControl: ManualControl,
  PositionTarget: PositionTarget,
  GlobalPositionTarget: GlobalPositionTarget,
  Waypoint: Waypoint,
  VFR_HUD: VFR_HUD,
  Thrust: Thrust,
  AttitudeTarget: AttitudeTarget,
  WaypointList: WaypointList,
  StatusText: StatusText,
  DebugValue: DebugValue,
  CommandCode: CommandCode,
  FileEntry: FileEntry,
  RCOut: RCOut,
  OverrideRCIn: OverrideRCIn,
  HilActuatorControls: HilActuatorControls,
  RadioStatus: RadioStatus,
  LogEntry: LogEntry,
  HomePosition: HomePosition,
  ExtendedState: ExtendedState,
  HilSensor: HilSensor,
  Trajectory: Trajectory,
  RCIn: RCIn,
};

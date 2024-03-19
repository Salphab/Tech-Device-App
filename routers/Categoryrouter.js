const express = require('express');
const Router = express.Router();
const database = require('../middleware/database');
const applecontroller = require('../controller/AppleController');
const appledevice = require('../controller/Devicepage/AppleDevice');
const samsungcontroller = require('../controller/SamsungController');
const samsungdevice = require('../controller/Devicepage/SamsungDevice');
const googlecontroller = require('../controller/GoogleController');
const googledevice = require('../controller/Devicepage/GoogleDevice');
const huaweicontroller = require('../controller/HuaweiController');
const huaweidevice = require('../controller/Devicepage/huaweidevice');
const infinixcontroller = require('../controller/InfinixController');
const infinixdevice = require('../controller/Devicepage/InfinixDevice')
const onepluscontroller = require('../controller/OneplusController');
const oneplusdevice = require('../controller/Devicepage/OneplusDevice');
const TecnoController = require('../controller/TecnoController');
const TecnoDevice = require('../controller/Devicepage/TecnoDevice');
const XiaomiController = require('../controller/XiaomiController');
const XiaomiDevice = require('../controller/Devicepage/XiaomiDevice');
const AsusController = require('../controller/AsusController');
const AsusDevice = require('../controller/Devicepage/AsusDevice');
const OppoController = require('../controller/OppoController');
const OppoDevice = require('../controller/Devicepage/OppoDevice')
const HonorController = require('../controller/HonorController');
const HonorDevice = require('../controller/Devicepage/HonorDevice');
const VodafoneController = require('../controller/VodafoneController');
const VodafoneDevice = require('../controller/Devicepage/VodafoneDevice');
const RealmeSchemaController = require('../controller/RealmeController');
const RealmeDevice = require('../controller/Devicepage/RealmeDevice')
const MeizuController = require('../controller/MeizuController');
const MeizuDevice = require('../controller/Devicepage/MeizuDevice');
const VivoController = require('../controller/VivoController');
const VivoDevice = require('../controller/Devicepage/VivoDevice');
const ZteController = require('../controller/ZteController');
const ZteDevice = require('../controller/Devicepage/ZteDevice');
const AlcatelController = require('../controller/AlcatelController');
const AlcatelDevice = require('../controller/Devicepage/AlcatelDevice');
const AllDevicesController = require('../controller/alldevices/AllDevicesController');

Router.post('/device', database, AllDevicesController);
Router.get('/apple/:index1/:index2', database, applecontroller);
Router.get('/apple/:device_id', database, appledevice);
Router.get('/samsung/:index1/:index2', database, samsungcontroller);
Router.get('/samsung/:device_id', database, samsungdevice);
Router.get('/google/:index1/:index2', database, googlecontroller);
Router.get('/google/:device_id', database, googledevice);
Router.get('/huawei/:index1/:index2', database, huaweicontroller);
Router.get('/huawei/:device_id', database, huaweidevice);
Router.get('/infinix/:index1/:index2', database, infinixcontroller);
Router.get('/infinix/:device_id', database, infinixdevice);
Router.get('/oneplus/:index1/:index2', database, onepluscontroller);
Router.get('/oneplus/:device_id', database, oneplusdevice);
Router.get('/tecno/:index1/:index2', database, TecnoController);
Router.get('/tecno/:device_id', database, TecnoDevice);
Router.get('/xiaomi/:index1/:index2', database, XiaomiController);
Router.get('/xiaomi/:device_id', database, XiaomiDevice);
Router.get('/asus/:index1/:index2', database, AsusController);
Router.get('/asus/:device_id', database, AsusDevice);
Router.get('/oppo/:index1/:index2', database, OppoController);
Router.get('/oppo/:device_id', database, OppoDevice);
Router.get('/honor/:index1/:index2', database, HonorController);
Router.get('/honor/:device_id', database, HonorDevice);
Router.get('/vodafone/:index1/:index2', database, VodafoneController);
Router.get('/vodafone/:device_id', database, VodafoneDevice);
Router.get('/realme/:index1/:index2', database, RealmeSchemaController);
Router.get('/realme/:device_id', database, RealmeDevice);
Router.get('/meizu/:index1/:index2', database, MeizuController);
Router.get('/meizu/:device_id', database, MeizuDevice);
Router.get('/vivo/:index1/:index2', database, VivoController);
Router.get('/vivo/:device_id', database, VivoDevice);
Router.get('/zte/:index1/:index2', database, ZteController);
Router.get('/zte/:device_id', database, ZteDevice);
Router.get('/zte/:device_id', database, ZteController);
Router.get('/alcatel/:index1/:index2', database, AlcatelController);
Router.get('/alcatel/:device_id', database, AlcatelDevice);
Router.get('/gionee/:index1/:index2',(req,res)=>{
    res.status(200).
    send('gionee devices')
})
Router.get('/alcatel/:index1/:index2',(req,res)=>{
    res.status(200).
    send('alcatel devices')
})
Router.get('/sony/:index1/:index2',(req,res)=>{
    res.status(200).
    send('sony devices')
})
Router.get('/lenovo/:index1/:index2',(req,res)=>{
    res.status(200).
    send('lenovo devices')
})
Router.get('/motorola/:index1/:index2',(req,res)=>{
    res.status(200).
    send('motorola devices')
})
Router.get('/microsoft/:index1/:index2',(req,res)=>{
    res.status(200).
    send('microsoft devices')
})
Router.get('/htc/:index1/:index2',(req,res)=>{
    res.status(200).
    send('htc devices')
})
Router.get('/lg/:index1/:index2',(req,res)=>{
    res.status(200).
    send('lg devices')
})
Router.get('/yezz/:index1/:index2',(req,res)=>{
    res.status(200).
    send('yezz devices')
})
module.exports = Router;
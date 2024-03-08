const HuaweiSchema = require('../../models/HuaweiSchema');

async function HuaweiDevice (req,res){
    const {device_id} = req.params;
    const Device = await HuaweiSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = HuaweiDevice;
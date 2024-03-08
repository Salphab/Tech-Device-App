const AppleSchema = require('../../models/AppleSchema');

async function ApplelDevice (req,res){
    const {device_id} = req.params;
    const Device = await AppleSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = ApplelDevice;
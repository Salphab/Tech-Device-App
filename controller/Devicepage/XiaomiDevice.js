const XiaomiSchema = require('../../models/XiaomiSchema');

async function XiaomiDevice (req,res){
    const {device_id} = req.params;
    const Device = await XiaomiSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = XiaomiDevice;
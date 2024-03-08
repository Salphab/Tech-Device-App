const OppoSchema = require('../../models/OppoSchema');

async function OppoDevice (req,res){
    const {device_id} = req.params;
    const Device = await OppoSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = OppoDevice;
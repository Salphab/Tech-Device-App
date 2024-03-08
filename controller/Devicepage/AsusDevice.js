const AsusSchema = require('../../models/AsusSchema');

async function AsusDevice (req,res){
    const {device_id} = req.params;
    const Device = await AsusSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = AsusDevice;
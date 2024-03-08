const VodafoneSchema = require('../../models/VodafoneSchema');

async function VodafoneDevice (req,res){
    const {device_id} = req.params;
    const Device = await VodafoneSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = VodafoneDevice;
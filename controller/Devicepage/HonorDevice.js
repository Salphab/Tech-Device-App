const HonorSchema = require('../../models/HonorSchema');

async function HonorDevice (req,res){
    const {device_id} = req.params;
    const Device = await HonorSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = HonorDevice;
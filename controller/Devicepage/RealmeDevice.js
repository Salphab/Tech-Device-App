const RealmeSchema = require('../../models/RealmeSchema');

async function RealmeDevice (req,res){
    const {device_id} = req.params;
    const Device = await RealmeSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = RealmeDevice;
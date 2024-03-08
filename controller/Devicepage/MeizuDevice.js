const MeizuSchema = require('../../models/MeizuSchema');

async function MeizuDevice (req,res){
    const {device_id} = req.params;
    const Device = await MeizuSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = MeizuDevice;
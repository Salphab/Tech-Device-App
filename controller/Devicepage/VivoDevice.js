const VivoSchema = require('../../models/VivoSchema');

async function VivoDevice (req,res){
    const {device_id} = req.params;
    const Device = await VivoSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = VivoDevice;
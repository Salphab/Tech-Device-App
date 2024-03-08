const SamsungSchema = require('../../models/SamsungSchema');

async function SamsungDevice (req,res){
    const {device_id} = req.params;
    const Device = await SamsungSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = SamsungDevice;
const AlcatelSchema = require('../../models/AlcatelSchema');

async function AlcatelDevice (req,res){
    const {device_id} = req.params;
    const Device = await AlcatelSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = AlcatelDevice;
const TecnoSchema = require('../../models/TecnoSchema');

async function TecnoDevice (req,res){
    const {device_id} = req.params;
    const Device = await TecnoSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = TecnoDevice;
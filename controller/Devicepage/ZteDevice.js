const ZteSchema = require('../../models/ZteSchema');

async function ZteDevice (req,res){
    const {device_id} = req.params;
    const Device = await ZteSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = ZteDevice;
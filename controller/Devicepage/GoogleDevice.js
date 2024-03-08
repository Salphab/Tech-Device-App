const GoogleSchema = require('../../models/GoogleSchema');

async function GoogleDevice (req,res){
    const {device_id} = req.params;
    const Device = await GoogleSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = GoogleDevice;
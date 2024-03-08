const OneplusSchema = require('../../models/OneplusSchema');

async function OneplusDevice (req,res){
    const {device_id} = req.params;
    const Device = await OneplusSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = OneplusDevice;
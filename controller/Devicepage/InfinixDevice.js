const InfinixSchema = require('../../models/InfinixSchema');

async function InfinixDevice (req,res){
    const {device_id} = req.params;
    const Device = await InfinixSchema.findById(device_id).exec();
    res.status(200).
    send(Device)
}

module.exports = InfinixDevice;
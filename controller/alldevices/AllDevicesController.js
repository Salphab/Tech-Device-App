const AllDevicesSchema = require('../../models/AlldevicesSchema');

async function AllDevicesController (req,res){
    const {payload} = req.body;
    const Device = await AllDevicesSchema.findOne({name:payload}).exec();
    res.status(200).
    send(Device)
}

module.exports = AllDevicesController;
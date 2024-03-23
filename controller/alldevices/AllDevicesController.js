const AllDevicesSchema = require('../../models/AlldevicesSchema');

async function AllDevicesController (req,res){
    const {params} = req.params;
    const findParams = params.replaceAll('_',' ');
    console.log(findParams)
    const Device = await AllDevicesSchema.findOne({name:findParams});
    res.status(200)
    .send(Device)
}

module.exports = AllDevicesController;
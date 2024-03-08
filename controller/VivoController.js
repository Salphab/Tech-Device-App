const VivoSchema = require('../models/VivoSchema');

async function VivoController (req,res){
    const {index1,index2} = req.params;
    const phoneArray = await VivoSchema.find();
    const resultCount = phoneArray.length;
    const result = phoneArray.slice(index1,index2);
    console.log(index1,index2)
    res.status(200).
    send([result,resultCount])
}

module.exports = VivoController;
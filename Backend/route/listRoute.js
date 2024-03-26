const express=require('express')
const router = express.Router();
const listModel=require('../model/listModel')
//create list api
router.post('/create', async (req, res, next) => {
    try {
         const newList = await listModel.create(req.body);
        res.json({
            success: true,
            msg: "List created successfully",
            list: newList 
        });
    } catch (error) {
        next(error); 
    }
});

router.delete('/delete/:id', async(req, res, next) => {
    const id= req.params.id;
    await listModel.findByIdAndDelete(id);
    res.json({
        success:true,
        message:"Deleted the specific list successfully"
    })
});

router.put('/update/:id', async(req, res, next) => {
    const id=req.params.id;
    const body=req.body
    // console.log(body);
     const list=await listModel.findByIdAndUpdate(id,body,{new:true});
    res.json({
        succes:true,
        message:"Updated a specific list",
         list
    })
});

router.get('/get',async(req, res, next) => {
    const lists=await listModel.find()
    res.json({
        succes:true,
        msg:'fetched all list',
        lists
    })
});

router.get('/get/:id',async(req, res, next) => {
    const id=req.params.id;
    const list=await listModel.findById(id)
    res.json({
        succes:true,
        msg:'fetched specific list',
        list
    })
});


module.exports=router
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
            list: newList // Optionally send back the created list document
        });
    } catch (error) {
        // Handle any potential errors
        next(error); // Pass the error to the error-handling middleware
    }
});

// router.get('/delete', (req, res, next) => {
//     res.send('deleted');
// });

// router.get('/update', (req, res, next) => {
//     res.send('deleted');
// });

router.get('/get',async(req, res, next) => {
    const lists=await listModel.find()
    res.json({
        succes:true,
        msg:'fetched all list',
        lists
    })
});


module.exports=router
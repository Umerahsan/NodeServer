const express= require('express');
const router= express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get order'
    })
})
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'post order'
    })
})
router.get('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    if(id=='special'){
        res.status(200).json({
            message:'get order ' ,
            id:id
        })
    }
    else{
        res.status(200).json({
        message:'get order'
    })
    }
    
})
module.exports = router;
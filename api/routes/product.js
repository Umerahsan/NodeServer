const express= require('express');
const router= express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get produsts'
    })
})
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'post produsts'
    })
})
router.get('/:productId',(req,res,next)=>{
    const id= req.params.productId;
    if(id=='special'){
        res.status(200).json({
            message:'get produsts ' ,
            id:id
        })
    }
    else{
        res.status(200).json({
        message:'get produsts'
    })
    }
    
})
module.exports = router;
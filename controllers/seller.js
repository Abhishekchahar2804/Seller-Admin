const Seller = require('../models/seller');

const path = require('path');

const rootDir = require("../util/path");

exports.getHomePage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.postAddSeller = async(req,res,next)=>{
    const name=req.body.name;
    const price = req.body.price;
    const type = req.body.type;

    try{
        const result = await Seller.create({name:name,price:price,type:type});
        res.status(201).json({newSeller:result});
    }
    catch(err){
        console.log(err);
    }
}

exports.getSeller=async (req,res,next)=>{
    try{
        const sellers = await Seller.findAll();
        res.status(201).json({allSeller:sellers});
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteSeller = async(req,res,next)=>{
    const sId=req.params.id;
    try{
        await Seller.destroy({where:{id:sId}});
        res.status(201);
    }
    catch(err){
        console.log(err);
    }
}
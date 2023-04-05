const { customAPIerror } = require("../errors/custom-error");

const errorHandlerMiddleware = (err,req,res,next)=>{
    if(err instanceof customAPIerror){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg: 'something weird has happen'})
}
module.exports = errorHandlerMiddleware
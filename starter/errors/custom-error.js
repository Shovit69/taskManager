class customAPIerror extends Error{
    constructor (message,statusCode){
        super(message);
        this.statusCode=statusCode
    }
}
const createCustomError = (message,statusCode)=>{
    return new customAPIerror(message,statusCode)
}
module.exports= {customAPIerror, createCustomError}
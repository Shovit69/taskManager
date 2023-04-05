const { createCustomError } = require('../errors/custom-error')
const asyncWrapper = require('../middleware/asyncWrapper')
const Task= require('../models/task')


const getTasks = asyncWrapper( async (req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const createTask =asyncWrapper(async(req,res)=>{
    const task = await Task.create(req.body)
        res.status(201).json({task}) 
}) 
        
const getThatTask =asyncWrapper(async(req,res,next)=>{
    const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return next(createCustomError(`no task with id :${taskID}`,404))
            // const err = new Error('not found');
            // err.status = 404;
            // return next(err)

            //return res.status(404).json({msg:`no task with id ${taskID}`})
        }
        res.status(201).json({task}) 
})

const updateTask =asyncWrapper(async(req,res,next)=>{
    const {id:taskID}= req.params
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
            runValidators:true,
            new:true
        })
        if(!task){
            return next(createCustomError(`no task with id :${taskID}`,404))
        }
        res.status(201).json({task}) 
}) 
const deleteTask =asyncWrapper(async(req,res,next)=>{
    const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return next(createCustomError(`no task with id :${taskID}`,404))
        }
        res.status(200).json({task:null, status:'success'})
}) 

module.exports= {
    getTasks,
    createTask,
    getThatTask,
    updateTask,
    deleteTask
}


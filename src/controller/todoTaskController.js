const TodoTask= require('../model/todoTask');

//1. Add a Todo task to a Todo collection

exports.createTodoTask = async (req,res)=>{
    
    try {
         // get the todotask from the body
    const todoTaskData = await req.body;
    //create a new todo task then save
     await TodoTask.create(todoTaskData).then((createdTodo)=>{
        if(!createdTodo) return res.status(404).json({
            success:false,
            message: "Task creation failed",
            error: "Unable get created task"
        })
        res.status(201).json({
            success:true,
            createdTodo
        })
     }).catch((error)=>{
        res.status(404).json({
            success:false,
            error:error.message
        })
     })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
   
    

}
//2. Update a particular Todo task
exports.updateTodoTask = async (req, res) =>{
    try {
        const id = {_id:req.params.id}
        const todoTaskUpdate = req.body
        await TodoTask.findOneAndUpdate(
            id, todoTaskUpdate,
            {new:true} 
        ).then((updated)=>{
            if(!updated) return res.status(404).json({
                success:false,
                message:'task update failed',
                error: "task not found"
             }) 
            res.status(200).json({
                success:true,
                message: "task updated successfully",
                updated
            })
        }).catch((error)=>{
            res.status(404).json({
                success:false,
                message:'task update failed',
                error: error.message
             }) 
        })
        
    } catch (error) {
     res.status(500).json({
        success:false,
        message:'Internal server error',
        error: error.message
     })   
    }
}
//3. Delete Todo task
exports.detelTodoTasks = async (req, res)=>{
    try {
        const id = {_id: req.params.id}
        TodoTask.findOneAndRemove(id).then((removedTask)=>{
            if(!removedTask) return res.status(404).json({
                success:false,
                message:'Task deletion failed',
                error: "Task does not exist"
             }) 
            res.status(200).json({
                success: true,
                message: "Task removed successfully",
                removedTask
            })
        }).catch((error)=>{
            res.status(404).json({
                success:false,
                message:'Task deletion failed',
                error: error.message
             }) 
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Internal server error',
            error: error.message
         })
    }
}


//4. Retrieve all Todo tasks 
exports.getAllTodoTasks = async (req, res)=>{
    //get all the data in the model and return it as response
    try {
        TodoTask.find().then((allTodos)=>{
            res.status(200).json({
                success:true,
                allTodos
            })
        }).catch((error)=>{
            res.status(404).json({
                success:false,
                message: "Cant fined ",
                error
            })
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Internal server error",
            error: error.message
        })
    }
    

}
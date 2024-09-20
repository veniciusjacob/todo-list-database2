import taskModel from '../models/Task.js'

const getAllTasks = async(req, res) => {

   try{
      const taskList = await taskModel.find();
      return res.render("index", {taskList}) 
   }catch(err){
      res.status(500).send({error: err.message});
   }

   
   
};


const createTask = async (req, res) => {
   const task = req.body;

   if(!task){
      return res.redirect("/");
   }

   try{
      await taskModel.create(task);
      return res.redirect("/")
   }catch(err){
      res.status(500).send({error: err.message})
   }
}


export default {
   getAllTasks,
   createTask
}
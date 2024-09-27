import taskModel from '../models/Task.js'

const getAllTasks = async(req, res) => {

   try{
      const taskList = await taskModel.find();
      return res.render("index", {taskList, task: null, taskDelete: null}) 
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
      return res.redirect("/");
   }catch(err){
      res.status(500).send({error: err.message});
   }
};

const getById = async (req, res) => {
   try {
      const taskList = await taskModel.find();
      if(req.params.method == "update"){
         const task = await taskModel.findOne({_id: req.params.id});
         res.render("index", {task, taskDelete: null, taskList});
      }else{
         const taskDelete = await taskModel.findOne({_id: req.params.id});
         res.render("index", {task: null, taskDelete, taskList});
      } 
   } catch (err) {
      res.status(500).send({error: err.message});
   }

};


const updateOneTask = async (req, res) => {
   try {
      const task = req.body;
      await taskModel.updateOne({_id: req.params.id}, task);
      res.redirect('/');
   } catch (err) {
      res.status(500).send({error: err.message});
   }
   
}

const deleteOneTask = async (req, res) => {
   
   try {
      await taskModel.deleteOne({_id: req.params.id})
      res.redirect("/")
   } catch (err) {
      res.status(500).send({error: err.message});
   }
}

const taskCheck = async (req, res) => {
   try {
     const task = await taskModel.findOne({ _id: req.params.id });
     task.check ? task.check = false : task.check = true;
     await taskModel.updateOne({ _id: req.params.id }, task);
     res.redirect("/");
   } catch (err) {
     res.status(500).send({ error: err.message });
   }
 };



export default {
   getAllTasks,
   createTask,
   getById,
   updateOneTask,
   deleteOneTask,
   taskCheck
}

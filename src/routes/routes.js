import express from 'express';
import Taskcontroller from '../controller/Taskcontroller.js';

const routes = express.Router();

routes.get('/', Taskcontroller.getAllTasks)
routes.post('/create', Taskcontroller.createTask)
routes.get('/getById/:id/:method', Taskcontroller.getById);
routes.post('/updateOne/:id', Taskcontroller.updateOneTask)
routes.get('/deleteOne/:id', Taskcontroller.deleteOneTask);
routes.get("/check/:id", Taskcontroller.taskCheck)

export default routes;
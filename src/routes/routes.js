import express from 'express';
import Taskcontroller from '../controller/Task.controller.js';

const routes = express.Router();

routes.get('/', Taskcontroller.getAllTasks)
routes.post('/create', Taskcontroller.createTask)

export default routes;
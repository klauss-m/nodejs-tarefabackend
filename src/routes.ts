import { Router, request, response, Request, Response } from 'express';

import {
  deleteTask,
  finishedTask,
  getTask,
  getTasks,
  updateTask,
} from './controller/TasksController';
import { saveTask } from './controller/TasksController';

const routes = Router();

routes.get('/home', (request: Request, response: Response) => {
  return response.json({ message: 'Hello Turma 007!' });
});

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.put('/tasks/:id', updateTask);
routes.post('/tasks', saveTask);
routes.patch('/tasks/:id', finishedTask);
routes.delete('/tasks/:id', deleteTask);

export default routes;

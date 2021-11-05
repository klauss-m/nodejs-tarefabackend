import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
createConnection();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(3333);

console.log('Ok');

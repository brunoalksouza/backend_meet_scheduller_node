import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routers/user.router';
import eventRouter from './routers/event.router';

const app = express();

app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/', eventRouter);

export default app;

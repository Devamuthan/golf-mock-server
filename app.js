import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import cors from 'cors';
import expressPinoLogger from "express-pino-logger";
import { logger } from './utils/logger.js';

const app = express();

app.use(expressPinoLogger({ logger: logger }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);

export default app;

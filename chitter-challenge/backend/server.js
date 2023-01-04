import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { login } from './src/routes/login.js';
import { signup } from './src/routes/signup.js';
import { allPeeps } from './src/routes/allPeeps.js';
import { addPeep } from './src/routes/addPeep.js';

const app = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const host = process.env.HOST;
const port = process.env.PORT;
const dburi = process.env.DBURI;

const main = async () => {
  console.log(`Connecting to database at: ${process.env.DBURI}`);
  await mongoose.connect(process.env.DBURI);
};

main()
  .then(() => console.log(`Connected to DB`))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(`/`, allPeeps);
app.use(`/post`, addPeep);
app.use(`/login`, login);
app.use(`/signup`, signup);

const server = app.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}`);
});

export default server;

import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

import indexRouter from './routes/index.js';
import onePlayerRouter from './routes/onePlayer.js';
import outcomeRouter from './routes/outcome.js';
// import twoPlayersRouter from './routes/twoPlayers.js';

app.use('/', indexRouter);
app.use('/onePlayer', onePlayerRouter);
app.use('/outcome', outcomeRouter);
// app.use('/twoPlayers', twoPlayersRouter);

const gameServer = app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${HOST}:${PORT}`);
});

export default gameServer;

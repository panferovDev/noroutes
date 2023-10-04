import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/indexRouter';
import jsxRender from './utils/jsxRender';
import postRouter from './routes/postRouter';
import banRouter from './routes/banRouter';
import { banMid } from './middlewares';
import testRouter from './routes/testRouter';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use(banMid);

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.test = 'test from middleware';
  console.log('плохиши ------->>>', req.headers['x-forwarded-for']);
  next();
});

app.use('/', indexRouter);
app.use('/posts', postRouter);
app.use('/ban', banRouter);
app.use('/test', testRouter);

app.listen(PORT, () => {
  console.log('server start on', PORT);
});

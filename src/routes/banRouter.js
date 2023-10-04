import express from 'express';

const banRouter = express.Router();

banRouter.get('/', (req, res) => {
  const banMessage = 'хихихихи Ты забанен!!!!!';
  res.render('Layout', { banMessage });
});

export default banRouter;

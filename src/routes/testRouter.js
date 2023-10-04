import express from 'express';

const testRouter = express.Router();

testRouter.get('/', (req, res) => {
  res.render('Pages/TestPage', { });
});

export default testRouter;

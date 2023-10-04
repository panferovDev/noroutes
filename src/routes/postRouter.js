import express from 'express';
import { Post } from '../../db/models';

const postRouter = express.Router();

postRouter.post('/add', async (req, res) => {
  const { title, img } = req.body;
  const data = await Post.create({
    title,
    img,
  });
  res.json(data);
});

postRouter.post('/del/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.sendStatus(402);
    return;
  }
  await Post.destroy({
    where: {
      id,
    },
  });

  res.sendStatus(200);
});

export default postRouter;

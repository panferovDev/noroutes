import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const cards = [
    { id: 1, title: 'test1', img: 'https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait.jpg' },
    { id: 2, title: 'test2', img: 'https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait.jpg' },
    { id: 3, title: 'test3', img: 'https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait.jpg' },
    { id: 4, title: 'test4', img: 'https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait.jpg' },
    { id: 5, title: 'test5', img: 'https://i.natgeofe.com/k/6496b566-0510-4e92-84e8-7a0cf04aa505/red-fox-portrait.jpg' },
  ];
  res.render('Pages/HomePage', { cards });
});

export default indexRouter;

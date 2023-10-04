export const banMid = (req, res, next) => {
  const badGaysArr = ['192.168.3.220', '192.168.3.212'];
  const ip = req.headers['x-forwarded-for'];
  if (!badGaysArr.includes(ip)) {
    next();
    return;
  }

  res.redirect('/ban');
};

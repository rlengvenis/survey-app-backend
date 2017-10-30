import {Router} from 'express';

const router = new Router();

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Express'});
});

module.exports = router;

import {Router} from 'express';


const router = new Router();

router.get('/', (req, res, next) => {
  res.render('index', {title: 'Express'});
});


export default router;

import {Router} from 'express';
import passport from 'passport';
import * as AuthenticationController from '../controllers/auth.controller';

const router = new Router();
const loginMiddleware = passport.authenticate('local', {session: false});

router.route('/signup').post(AuthenticationController.signUp);
router.route('/signin').post(loginMiddleware, AuthenticationController.signIn);


export default router;

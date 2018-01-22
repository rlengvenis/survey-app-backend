import {Router} from 'express';
import passport from '../services/passport';
import * as AuthenticationController from '../controllers/auth.controller';


const router = new Router();
const loginMiddleware = passport.authenticate('local', {session: false});

router.route('/signin').post(loginMiddleware, AuthenticationController.signIn);
router.route('/signup').post(AuthenticationController.signUp);


export default router;

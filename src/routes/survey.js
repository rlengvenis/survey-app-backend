import { Router } from 'express';
import passport from 'passport';
import * as SurveyController from '../controllers/survey.controller';

const router = new Router();

const requireAuth = passport.authenticate('jwt', {session: false});

router.route('/survey').get(requireAuth, SurveyController.getSurvey);
router.route('/survey').put(requireAuth, SurveyController.addOrUpdateSurvey);

export default router;

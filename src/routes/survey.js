import {Router} from 'express';
import passport from 'passport';
import * as SurveyController from '../controllers/survey.controller';

const router = new Router();


router.route('/survey').get(SurveyController.getSurvey);
router.route('/survey').put(SurveyController.addOrUpdateSurvey);

export default router;

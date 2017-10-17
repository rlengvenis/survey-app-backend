import { Router } from 'express';
import * as SurveyController from '../controllers/survey.controller';

const router = new Router();

/* GET users listing. */
router.route('/survey').get(SurveyController.getSurvey);

router.route('/survey').put(SurveyController.addOrUpdateSurvey);

export default router;

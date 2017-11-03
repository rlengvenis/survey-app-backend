import _ from 'lodash';
import util from 'util';
import update from 'immutability-helper';
import Survey from '../models/survey';

export const getSurvey = async (req, res) => {
  try {
    const {
      query: {id},
      user
    } = req;

    const searchQuery = id ? {_id: id} : {userId: user._id};
    const survey = await Survey.findOne(searchQuery);

    res.json({survey: survey});

  } catch (err) {
    res.status(500).send(err);
  }
};

export const insertOrUpdateSurvey = async (req, res) => {
  try {
    const {user, body: {survey}} = req;

    if (!survey) {
      res.status(403).end();
    }

    const surveyWithUserId = Object.assign({}, survey, {userId: user._id});
    await Survey.findOneAndUpdate({_id: survey._id}, surveyWithUserId, {upsert: true});

    return res.send("Succesfully saved");

  } catch (err) {
    return res.status(500).send({error: err});
  }
};

export const updateSurveyWithAnswers = async (req, res) => {
  try {
    const {answers, surveyId} = req.body;

    if (!answers || !surveyId) {
      res.status(403).end();
    }

    const survey = await Survey.findOne({_id: surveyId});

    const modifiedSurvey = update(survey, {
      questions: {
        $set: survey.questions.map(question => {
          return _populateQuestionWithAnswers(question, answers)
        })
      }
    });

    await Survey.update({_id: surveyId}, modifiedSurvey);

    return res.send("Succesfully saved");

  } catch (err) {
    return res.status(500).send({error: err.toString()});
  }
};

const _populateQuestionWithAnswers = (question, answers) => {
  const answer = _.find(answers, {questionId: question._id});

  if (answer) {
    return update(question, {
      answers: {
        $push: [answer]
      }
    });
  }

  return question;
};

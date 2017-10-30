import Survey from '../models/survey';

export const getSurvey = async (req, res) => {
  try {
    const survey = await Survey.find();
    res.json({survey: survey[0]});

  } catch (err) {
    res.status(500).send(err);
  }
};

export const addOrUpdateSurvey = async (req, res) => {
  try {
    const {survey} = req.body;

    if (!survey) {
      res.status(403).end();
    }

    const newOrModifiedSurvey = new Survey(survey);
    await Survey.findOneAndUpdate({_id: survey._id}, survey, {upsert: true});
    return res.send("Succesfully saved");

  } catch (err) {
    return res.send(500, {error: err});
  }
};

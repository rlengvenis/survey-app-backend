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
    return res.send(500, {error: err});
  }
};

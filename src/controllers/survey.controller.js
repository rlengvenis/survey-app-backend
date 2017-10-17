import Survey from '../models/survey';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';


export function getSurvey(req, res) {
  Survey.find()
    .then((survey) => {
      res.json({survey: survey[0]});
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addOrUpdateSurvey(req, res) {
  const {survey} = req.body;

  if (!survey) {
    res.status(403).end();
  }

  const newOrModifiedSurvey = new Survey(survey);

  Survey.findOneAndUpdate({_id: survey._id}, survey, {upsert: true})
    .then((result) => {
      return res.send("Succesfully saved");
    })
    .catch((err) => {
      return res.send(500, {error: err});
    });
}

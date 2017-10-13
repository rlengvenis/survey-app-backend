import Survey from '../models/survey';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';


export function getSurvey(req, res) {
  Survey.find().exec((err, survey) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({survey});
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addUser(req, res) {
  if (!req.body.user.id || !req.body.user.username) {
    res.status(403).end();
  }

  const newUser = new Survey(req.body.user);

  // Let's sanitize inputs
  newUser.id = sanitizeHtml(newUser.id);
  newUser.username = sanitizeHtml(newUser.username);

  newUser.cuid = cuid();
  newUser.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({user: saved});
  });
}


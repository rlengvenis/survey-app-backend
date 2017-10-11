import User from '../models/user';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  User.find().exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({users});
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

  const newUser = new User(req.body.user);

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


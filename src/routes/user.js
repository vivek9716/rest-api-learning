var express = require('express')
var router = express.Router();
const Joi = require('@hapi/joi');

const UserContoller = require('../controller/UserContoller');
const { createUserValidation } = require('../validators/user');
const userCntrl = new UserContoller();

const validatorsCreation = async (req, res, next) => {
    const { body } = req;
    var errors = await createUserValidation.validate(body || {}, {abortEarly: false});
    var error = errors.error;
    if (error) {
      var details = error.details;
      var err = {};
      if (details) {
        details.map((er, index) => {
          var key = er.context.key;
          if (key && Object.keys(err).indexOf(key) == -1) {
            err[key] = er.message;
          }
        });
      }
      res.json(err);
    } else {
      req.body = issue.value;
      next();
    }
}

router.get('/', userCntrl.users);
router.post('/', validatorsCreation, userCntrl.createUser);

module.exports = router;

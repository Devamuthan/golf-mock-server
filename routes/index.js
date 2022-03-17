import express from 'express';
import createUser from '../controller/auth.controller.js';
import checkIfAuthenticated from '../middleware/auth.js';
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

indexRouter.post('/auth/signup', createUser);

indexRouter.get('/articles', checkIfAuthenticated, async (_, res) => {
  return res.json({
    "topic":"Rebate consist lamb embassy bankruptcy teach knew",
    "closing":76067
  });
});

export default indexRouter;
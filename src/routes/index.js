import express from 'express';

import {
  getCases,
  getCountries,
  getAllCountries,
  getMostRecentCaseById,
  getMostRecentCaseByName,
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/cases', getCases);
indexRouter.get('/countries', getCountries);
indexRouter.get('/all-countries', getAllCountries);
indexRouter.get('/most-recent-case-by-id', getMostRecentCaseById);
indexRouter.get('/most-recent-case-by-name', getMostRecentCaseByName);

export default indexRouter;

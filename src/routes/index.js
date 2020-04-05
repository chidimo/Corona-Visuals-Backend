import express from 'express';

import {
  getCases,
  getCountries,
  getAllCountries,
  getMostRecentCaseByCountryId,
  getMostRecentCaseByCountryName,
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/cases', getCases);
indexRouter.get('/countries', getCountries);
indexRouter.get('/all-countries', getAllCountries);
indexRouter.get('/most-recent-case-by-id', getMostRecentCaseByCountryId);
indexRouter.get('/most-recent-case-by-name', getMostRecentCaseByCountryName);

export default indexRouter;

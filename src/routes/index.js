import express from 'express';

import {
  getCases,
  getCountries,
  getAllCountries,
  getMostRecentCaseByCountryId,
  getMostRecentCaseByCountryName,
  getMostRecentCaseForAllCountries,
  getFirstCaseByCountryId,
  getFirstCaseByCountryName,
  getFirstDeathByCountryId,
  getFirstDeathByCountryName,
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/cases', getCases);
indexRouter.get('/countries', getCountries);
indexRouter.get('/all-countries', getAllCountries);
indexRouter.get('/most-recent-case-by-id', getMostRecentCaseByCountryId);
indexRouter.get('/most-recent-case-by-name', getMostRecentCaseByCountryName);

indexRouter.get('/first-case-by-id', getFirstCaseByCountryId);
indexRouter.get('/first-case-by-name', getFirstCaseByCountryName);

indexRouter.get('/first-death-by-id', getFirstDeathByCountryId);
indexRouter.get('/first-death-by-name', getFirstDeathByCountryName);

indexRouter.get('/most-recent-country-cases', getMostRecentCaseForAllCountries);

export default indexRouter;

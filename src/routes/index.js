import express from 'express';

import {
  getCases,
  getPaginatedCountries,
  getAllCountries,
  getMostRecentCaseByCountryId,
  getMostRecentCaseByCountryName,
  getFirstCaseByCountryId,
  getFirstCaseByCountryName,
  getFirstDeathByCountryId,
  getFirstDeathByCountryName,
  getCountryById,
  getCountryByName,
  getAllCountryCasesByDay,
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/cases', getCases);
indexRouter.get('/countries', getPaginatedCountries);
indexRouter.get('/all-countries', getAllCountries);

indexRouter.get('/country/:_id', getCountryById);
indexRouter.get('/country', getCountryByName);

indexRouter.get('/most-recent-case-by-id', getMostRecentCaseByCountryId);
indexRouter.get('/most-recent-case-by-name', getMostRecentCaseByCountryName);

indexRouter.get('/first-case-by-id', getFirstCaseByCountryId);
indexRouter.get('/first-case-by-name', getFirstCaseByCountryName);

indexRouter.get('/first-death-by-id', getFirstDeathByCountryId);
indexRouter.get('/first-death-by-name', getFirstDeathByCountryName);

indexRouter.get('/get-cases-by-day', getAllCountryCasesByDay);

export default indexRouter;

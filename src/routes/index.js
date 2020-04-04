import express from 'express';

import { getCountries, getCases, getAllCountries } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/cases', getCases);
indexRouter.get('/countries', getCountries);
indexRouter.get('/all-countries', getAllCountries);

export default indexRouter;

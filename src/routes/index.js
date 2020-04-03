import express from 'express';

import { getCountries, getCases } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/cases', getCases);
indexRouter.get('/countries', getCountries);

export default indexRouter;

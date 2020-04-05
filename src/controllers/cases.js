import { Types } from 'mongoose';

import { Case } from '../models/models';
import { todayMinusNDays, timeStampIsValid } from '../dateUtils';

export const getCases = async (req, res, next) => {
  const { country, countryName } = req.query;
  let {
    skip, limit, fromDate, toDate
  } = req.query;

  // if no toDate, set it to today
  // if no fromDate, set it 30 days back
  toDate = timeStampIsValid(toDate) ? new Date(toDate) : new Date();
  fromDate = timeStampIsValid(fromDate)
    ? new Date(fromDate)
    : todayMinusNDays(30);

  skip = Number(skip) || 0;
  limit = Number(limit) || 15;

  const filter = {};
  if (countryName) filter.country_name = countryName;
  if (country) filter.country = Types.ObjectId(country);

  if (fromDate) filter.recordDate = { $gt: fromDate };
  if (toDate) filter.recordDate = { ...filter.recordDate, $lt: toDate };

  try {
    const total = await Case.countDocuments(filter);
    const results = await Case.find(filter)
      .skip(skip * limit)
      .limit(limit);
    res
      .status(200)
      .json({ metadata: { total, returned: results.length }, results });
  } catch (err) {
    next(err);
  }
};

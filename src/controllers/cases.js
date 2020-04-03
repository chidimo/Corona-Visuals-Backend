import { Case } from '../models/models';
import { todayMinusNDays, timeStampIsValid } from '../dateUtils';

export const getCases = async (req, res, next) => {
  const { country } = req.query;
  let {
    skip, limit, startDate, endDate
  } = req.query;

  // if no endDate, set it to today
  // if no startDate, set it 30 days back
  endDate = timeStampIsValid(endDate) ? new Date(endDate) : new Date();
  startDate = timeStampIsValid(startDate)
    ? new Date(startDate)
    : todayMinusNDays(30);

  skip = Number(skip) || 0;
  limit = Number(limit) || 15;

  const filter = {};
  if (country) filter.country = country;
  if (startDate) filter.recordDate = { $gt: startDate };
  if (endDate) filter.recordDate = { ...filter.recordDate, $lt: endDate };

  console.log('filter', filter);

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

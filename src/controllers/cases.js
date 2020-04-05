import { Types } from 'mongoose';

import { Case } from '../models/models';
import { todayMinusNDays, timeStampIsValid } from '../dateUtils';

export const getMostRecentCaseByCountryId = async (req, res, next) => {
  const { country } = req.query;

  try {
    const result = await Case.find({ country: Types.ObjectId(country) })
      .sort({ recordDate: -1 })
      .limit(1);
    res.status(200).json({ success: true, result });
  } catch (err) {
    next(err);
  }
};

export const getMostRecentCaseByCountryName = async (req, res, next) => {
  const { countryName } = req.query;
  try {
    const result = await Case.find({ country_name: countryName })
      .sort({ recordDate: -1 })
      .limit(1);
    res.status(200).json({ success: true, result });
  } catch (err) {
    next(err);
  }
};

export const getFirstCaseByCountryId = async (req, res, next) => {
  const { country } = req.query;
  try {
    const result = await Case.find({
      country: Types.ObjectId(country),
      new_cases: { $gt: 0 },
    })
      .sort({ recordDate: 1 })
      .limit(1);
    res.status(200).json({ success: true, result });
  } catch (err) {
    next(err);
  }
};

export const getFirstCaseByCountryName = async (req, res, next) => {
  const { countryName } = req.query;
  try {
    const result = await Case.find({
      country_name: countryName,
      new_cases: { $gt: 0 },
    })
      .sort({ recordDate: 1 })
      .limit(1);
    res.status(200).json({ success: true, result });
  } catch (err) {
    next(err);
  }
};

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

export const getMostRecentCaseForAllCountries = async (req, res, next) => {
  try {
    const countries = Country.find({});
    countries.map(c => {
      console.log(typeof c, c);
      return c;
    });
    const result = await Case.find({})
      .sort({ recordDate: -1 })
      .limit(1);
    res.status(200).json({ success: true, result });
  } catch (err) {
    next(err);
  }
};

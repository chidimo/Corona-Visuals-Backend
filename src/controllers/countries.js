import { Types } from 'mongoose';

import { Country } from '../models/models';

export const getPaginatedCountries = async (req, res, next) => {
  let { skip, limit } = req.query;
  limit = Number(limit) || 15;
  skip = Number(skip) || 0;

  const filter = {};

  try {
    const total = await Country.countDocuments(filter);
    const results = await Country.find(filter)
      .skip(skip * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      metadata: { total, returned: results.length },
      results,
    });
  } catch (err) {
    next(err);
  }
};

export const getCountryById = async (req, res, next) => {
  const { _id } = req.params;
  try {
    const country = await Country.find({ _id: Types.ObjectId(_id) });
    res.status(200).json({ success: true, country });
  } catch (err) {
    next(err);
  }
};

export const getCountryByName = async (req, res, next) => {
  const { name } = req.query;
  try {
    const country = await Country.find({ name });
    res.status(200).json({ success: true, country });
  } catch (err) {
    next(err);
  }
};

export const getAllCountries = async (req, res, next) => {
  try {
    const total = await Country.countDocuments();
    const results = await Country.find().sort({ name: 1 });
    res.status(200).json({
      success: true,
      metadata: { total, returned: results.length },
      results,
    });
  } catch (err) {
    next(err);
  }
};

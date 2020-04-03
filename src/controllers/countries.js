import { Country } from '../models/models';

export const getCountries = async (req, res, next) => {
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

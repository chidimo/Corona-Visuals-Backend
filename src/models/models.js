import { Schema, model } from 'mongoose';

const countrySchema = new Schema({
  name: { type: String, required: true },
  short_name: { type: String },
});

const casesSchema = new Schema({
  country: {},
  new_cases: { type: Number, default: 0 },
  new_deaths: { type: Number, default: 0 },
  total_cases: { type: Number, default: 0 },
  total_deaths: { type: Number, default: 0 },
  recordDate: { type: Date, required: true },
});

export const Case = model('cases', casesSchema);
export const Country = model('countries', countrySchema);

import debug from 'debug';
import '../models/connect';

import { Case } from '../models/models';

const logger = debug('dev');

const data = [];

export const createData = async () => new Promise(resolve => {
  const stop = data.length;

  data.forEach(async (d, index) => {
    const { name, message } = d;
    const m = Case({ name, message });
    try {
      await m.save();
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

export const deleteData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const { name } = d;
    try {
      await Case.deleteOne({ name });
    } catch (err) {
      logger(`error: ${err.message}`);
    }

    if (index + 1 === stop) resolve();
  });
});

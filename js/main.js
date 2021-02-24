import {createPoint} from './modules/mock.js'
import {POINTS_AMOUNT} from './modules/utils.js';

const getPoints = () => {
  return new Array(POINTS_AMOUNT).fill().map(() => createPoint());
};

getPoints();
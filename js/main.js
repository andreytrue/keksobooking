import {createPoint} from './modules/mock.js'
import './modules/form.js';
import {disableMap, addPointOnMap} from './modules/map.js';

const POINTS_AMOUNT = 10;

disableMap();

const getPoints = () => {
  return new Array(POINTS_AMOUNT).fill().map(() => createPoint());
};

const points = getPoints();

points.forEach((point) => {
  addPointOnMap(point);
});

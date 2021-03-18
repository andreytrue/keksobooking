import './modules/map.js';
import './modules/form.js';
import {resetFilters} from './modules/filter.js';
import {setPlaceCapacity} from './modules/validation.js';
import {addPointOnMap, resetMainPoint} from './modules/map.js';
import {getData} from './modules/data.js';
import {setPointFormSubmit, resetForm} from './modules/form.js';

const POINTS_AMOUNT = 10;

setPlaceCapacity();

getData((points) => {
  addPointOnMap(points.slice(0, POINTS_AMOUNT));
});

const resetPage = () => {
  resetForm();
  resetFilters();
  resetMainPoint();
  setPlaceCapacity();
};

setPointFormSubmit(resetPage);

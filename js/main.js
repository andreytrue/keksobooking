import './modules/map.js';
import './modules/form.js';
import {resetFilters, setFilterTypeChange} from './modules/filter.js';
import {setPlaceCapacity} from './modules/validation.js';
import {addPointOnMap, resetMainPoint} from './modules/map.js';
import {getData} from './modules/data.js';
import {setPointFormSubmit, resetForm} from './modules/form.js';
import {renderPoints} from './modules/render.js';

setPlaceCapacity();

getData((data) => {
  addPointOnMap(data);
  setFilterTypeChange(() => renderPoints(data));
});

const resetPage = () => {
  resetForm();
  resetFilters();
  resetMainPoint();
  setPlaceCapacity();
};

setPointFormSubmit(resetPage);

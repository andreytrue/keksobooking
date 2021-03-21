import './modules/map.js';
import './modules/form.js';
import {resetFilters} from './modules/filter.js';
import {setPlaceCapacity} from './modules/validation.js';
import {addPointOnMap, resetMainPoint} from './modules/map.js';
import {getData} from './modules/data.js';
import {setPointFormSubmit, resetForm, resetFormButton} from './modules/form.js';
import './modules/pictures.js';

setPlaceCapacity();

getData((data) => {
  window.points = data;
  addPointOnMap(data);
});

const resetPage = () => {
  resetForm();
  resetFilters();
  resetMainPoint();
  setPlaceCapacity();
  addPointOnMap(window.points);
};

setPointFormSubmit(resetPage);

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
});

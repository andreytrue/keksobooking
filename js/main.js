/* global _:readonly */
import './modules/map.js';
import './modules/form.js';
import {resetFilters, setFilterTypeChange, setFilterRoomChange, setFilterGuestsChange, setFilterPriceChange, setFilterFeatureChange, filterPoints} from './modules/filter.js';
import {setPlaceCapacity} from './modules/validation.js';
import {addPointOnMap, resetMainPoint} from './modules/map.js';
import {getData} from './modules/data.js';
import {setPointFormSubmit, resetForm, resetFormButton} from './modules/form.js';

const RERENDER_DELAY = 100000;

setPlaceCapacity();

getData((data) => {
  window.points = data;
  addPointOnMap(data);

  setFilterTypeChange(_.debounce(
    () => filterPoints(),
    RERENDER_DELAY,
  ));

  setFilterRoomChange(_.debounce(
    () => filterPoints(),
    RERENDER_DELAY,
  ));

  setFilterGuestsChange(_.debounce(
    () => filterPoints(),
    RERENDER_DELAY,
  ));

  setFilterPriceChange(_.debounce(
    () => filterPoints(),
    RERENDER_DELAY,
  ));

  setFilterFeatureChange(_.debounce(
    () => filterPoints(),
    RERENDER_DELAY,
  ));
});

const resetPage = () => {
  resetForm();
  resetFilters();
  resetMainPoint();
  setPlaceCapacity();
};

setPointFormSubmit(resetPage);

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
});

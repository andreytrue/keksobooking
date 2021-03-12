import {form} from './form.js';

const formFields = form.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFilterList = mapFilters.querySelectorAll('.map__filter');
const mapFilterFeatures = mapFilters.querySelector('.map__features');

const disableMap = () => {
  form.classList.add('ad-form--disabled');
  formFields.forEach((field) => {
    field.disabled = true;
  })
  mapFilters.classList.add('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = true;
  })
  mapFilterFeatures.disabled = true;
};

const enableMap = () => {
  form.classList.remove('ad-form--disabled');
  formFields.forEach((field) => {
    field.disabled = false;
  })
  mapFilters.classList.remove('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = false;
  })
  mapFilterFeatures.disabled = false;
}

export {enableMap, disableMap};

const adForm = document.querySelector('.ad-form');
const formFields = adForm.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFilterList = mapFilters.querySelectorAll('.map__filter');
const mapFilterFeatures = mapFilters.querySelector('.map__features');

const disableMap = () => {
  adForm.classList.add('ad-form--disabled');
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
  adForm.classList.remove('ad-form--disabled');
  formFields.forEach((field) => {
    field.disabled = false;
  })
  mapFilters.classList.remove('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = false;
  })
  mapFilterFeatures.disabled = false;
}

export {disableMap, enableMap};
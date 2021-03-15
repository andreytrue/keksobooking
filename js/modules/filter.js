const mapFilters = document.querySelector('.map__filters');
const mapFilterList = mapFilters.querySelectorAll('.map__filter, .map__features');

const disableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = true;
  })
};

const enableFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = false;
  })
}

export {disableFilters, enableFilters};

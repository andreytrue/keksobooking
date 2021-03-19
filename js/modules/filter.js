const mapFilters = document.querySelector('.map__filters');
const mapFilterList = mapFilters.querySelectorAll('.map__filter');
const mapFeaturesList = mapFilters.querySelector('.map__features');

const disableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = true;
  })
  mapFeaturesList.disabled = true;
};

const enableFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = false;
  })
  mapFeaturesList.disabled = false;
}

const resetFilters = () => {
  mapFilters.reset();
}

const filterType = mapFilters.querySelector('#housing-type');

const setFilterTypeChange = (cb) => {
  filterType.addEventListener('change', () => {
    cb();
  })
};

export {disableFilters, enableFilters, resetFilters, setFilterTypeChange, mapFilterList, mapFeaturesList};

/* global _:readonly */
import {addPointOnMap, restoreMap} from './map.js';

const ANY = 'any';
const PRICE_LOW = 10000;
const PRICE_HIGH = 50000;

const RERENDER_DELAY = 500;

const mapFilters = document.querySelector('.map__filters');
const mapFilterList = mapFilters.querySelectorAll('.map__filter');
const mapFeatureList = mapFilters.querySelector('.map__features');

const disableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = true;
  })
  mapFeatureList.disabled = true;
};

const enableFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilterList.forEach((filter) => {
    filter.disabled = false;
  })
  mapFeatureList.disabled = false;
}

const resetFilters = () => {
  mapFilters.reset();
}

const filterType = mapFilters.querySelector('#housing-type');
const filterPrice = mapFilters.querySelector('#housing-price');
const filterRoom = mapFilters.querySelector('#housing-rooms');
const filterGuests = mapFilters.querySelector('#housing-guests');

const filterByFeature = (features, point) => {
  return features.every(feature => point.offer.features.includes(feature.value));
}

const priceFilter = {
  middle: (price) => price > PRICE_LOW && price < PRICE_HIGH,
  low: (price) => price < PRICE_LOW - 1,
  high: (price) => price > PRICE_HIGH - 1,
}

const filterByPrice = (point) => {
  return priceFilter[filterPrice.value](point.offer.price);
}

const getFilteredData = () => {
  const features = Array.from(mapFeatureList.querySelectorAll(':checked'));

  return window.points.filter((point) => {
    const filteredRoom = filterRoom.value === ANY || point.offer.rooms === Number(filterRoom.value);
    const filteredGuest = filterGuests.value === ANY || point.offer.guests === Number(filterGuests.value);
    const filteredType = filterType.value === ANY || point.offer.type === filterType.value;
    const filteredPrice = filterPrice.value === ANY || filterByPrice(point);
    const filteredFeature = features.length ? filterByFeature(features, point) : true; 

    return filteredRoom && filteredGuest && filteredType && filteredPrice && filteredFeature;
  });
}

const filterPoints = () => {
  restoreMap();
  const filteredData = getFilteredData();
  addPointOnMap(filteredData);
}

mapFilters.addEventListener('change', _.debounce(filterPoints, RERENDER_DELAY));

export {disableFilters, enableFilters, resetFilters, filterType, mapFilterList, filterPoints};

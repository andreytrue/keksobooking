import {addPointOnMap, restoreMap} from './map.js';

const ANY = 'any';
const PRICE_LOW = 10000;
const PRICE_HIGH = 50000;

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
const setFilterTypeChange = () => {
  filterType.addEventListener('change', filterPoints);
}

const filterByType = (points) => {
  const filteredPoints = points.filter((point) => {
    return point.offer.type === filterType.value;
  });

  return filteredPoints;
}

const filterPrice = mapFilters.querySelector('#housing-price');
const setFilterPriceChange = () => {
  filterPrice.addEventListener('change', filterPoints);
}

const filterByPrice = (points) => {
  const filteredPoints = points.filter((point) => {
    switch (filterPrice.value) {
      case 'middle':
        return (point.offer.price > PRICE_LOW && point.offer.price < PRICE_HIGH);
      case 'low':
        return (point.offer.price < PRICE_LOW - 1);
      case 'high':
        return (point.offer.price > PRICE_HIGH - 1);
    }
  });

  return filteredPoints;
}

const filterRoom = mapFilters.querySelector('#housing-rooms');
const setFilterRoomChange = () => {
  filterRoom.addEventListener('change', filterPoints);
}

const filterByRoom = (points) => {
  const filteredPoints = points.filter((point) => {
    return point.offer.rooms == filterRoom.value;
  });

  return filteredPoints;
}

const filterGuests = mapFilters.querySelector('#housing-guests');
const setFilterGuestsChange = () => {
  filterGuests.addEventListener('change', filterPoints);
}

const filterByGuest = (points) => {
  const filteredPoints = points.filter((point) => {
    return point.offer.guests == filterGuests.value;
  });

  return filteredPoints;
}

const setFilterFeatureChange = () => {
  mapFeatureList.addEventListener('change', filterPoints);
}

const filterByFeature = (feature, points) => {
  const filteredPoints = points.filter((point) => {
    return point.offer.features.includes(feature.value);
  });

  return filteredPoints;
}

const getFilteredData = () => {
  let result = window.points;
  let features = mapFeatureList.querySelectorAll(':checked');

  mapFilterList.forEach((filterType) => {
    if (filterType.value !== ANY) {
      switch (filterType.id) {
        case 'housing-type':
          return result = filterByType(result);
        case 'housing-price':
          return result = filterByPrice(result);
        case 'housing-rooms':
          return result = filterByRoom(result);
        case 'housing-guests':
          return result = filterByGuest(result);
      }
    }
  })
  
  if (features) {
    features.forEach((feature) => {
      return result = filterByFeature(feature, result);
    })
  }

  return result;
}

const filterPoints = () => {
  restoreMap();
  const filteredData = getFilteredData();
  // console.log(filteredData);

  return addPointOnMap(filteredData);
}

export {disableFilters, enableFilters, resetFilters, setFilterTypeChange, setFilterRoomChange, setFilterGuestsChange, setFilterPriceChange, setFilterFeatureChange, filterType, mapFilterList, filterPoints};

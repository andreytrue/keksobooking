import {addPointOnMap, restoreMap} from './map.js';
import {mapFilterList} from './filter.js';

const renderPoints = (points) => {
  restoreMap();
  let isFiltered = false;
  let filteredPoints = [];

  mapFilterList.forEach((filterType) => {
    if (filterType.value !== 'any') {
      isFiltered = true;
      filteredPoints = points.filter((point) => {
        return point.offer.type === filterType.value;
      })
    }
  })

  if (!isFiltered) {
    return addPointOnMap(points);
  }

  return addPointOnMap(filteredPoints);
};

// - Получаем на вход точки
// - Проходим по фильтрам и
//   - если не ANY, то делаем filters.points(filter.value)
// - Фильтруем точки
// - Отправляем точки на отрисовку

export {renderPoints};
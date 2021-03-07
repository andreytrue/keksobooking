import {createPoint} from './modules/mock.js'
import {createCardTemplate} from './modules/card.js';
import './modules/form.js';
import {disableMap, enableMap} from './modules/common.js';
const POINTS_AMOUNT = 1;

const mapElement = document.querySelector('#map-canvas');

const getPoints = () => {
  return new Array(POINTS_AMOUNT).fill().map(() => createPoint());
};

const cards = getPoints();

// cards.forEach((card) => {
//   const cardTemplate = createCardTemplate(card);
//   map.appendChild(cardTemplate);
// });

// Задание 6.1

disableMap();

const map = L.map(mapElement)
  .on('load', () => {
    enableMap();
  })
  .setView({
    lat: 35.6684415,
    lng: 139.7616374,
  }, 13); 

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
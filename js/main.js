import {createPoint} from './modules/mock.js'
import {createCardTemplate} from './modules/card.js';
const POINTS_AMOUNT = 1;

const map = document.querySelector('#map-canvas');

const getPoints = () => {
  return new Array(POINTS_AMOUNT).fill().map(() => createPoint());
};

const cards = getPoints();

cards.forEach((card) => {
  const cardTemplate = createCardTemplate(card);
  map.appendChild(cardTemplate);
});

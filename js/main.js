import {createPoint} from './modules/mock.js'
import {getCardTemplate} from './modules/card.js';
const POINTS_AMOUNT = 1;

const getPoints = () => {
  return new Array(POINTS_AMOUNT).fill().map(() => createPoint());
};

const cards = getPoints();

cards.forEach((card) => {
  getCardTemplate(card);
});

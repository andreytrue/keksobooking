import {FLOAT_NUMBER} from './mock.js';

const PRICE_MAX = 1000000;

const form = document.querySelector('.ad-form');

const priceFromType = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

const placeType = form.querySelector('#type');
const placePrice = form.querySelector('#price');

placePrice.max = PRICE_MAX;

const setPrice = () => {
  placePrice.min = priceFromType[placeType.value];
  placePrice.placeholder = priceFromType[placeType.value];
}

setPrice();

placeType.addEventListener('change', setPrice);

placePrice.required = true;

const placeTimeIn = form.querySelector('#timein');
const placeTimeOut = form.querySelector('#timeout');

placeTimeIn.addEventListener('change', () => {
  placeTimeOut.value = placeTimeIn.value;
});

placeTimeOut.addEventListener('change', () => {
  placeTimeIn.value = placeTimeOut.value;
});

const placeAddress = form.querySelector('#address');
placeAddress.setAttribute('readonly', true);

const setAddress = ({lat, lng}) => {
  const x = lat.toFixed(FLOAT_NUMBER);
  const y = lng.toFixed(FLOAT_NUMBER);

  placeAddress.value = x + ', ' + y;
  placeAddress.placeholder = x + ', ' + y;
};

const placeTitle = form.querySelector('#title');
placeTitle.required = true;

const placeRoom = form.querySelector('#room_number');
const placeCapacity = form.querySelector('#capacity');
placeCapacity.required = true;
console.log(placeCapacity);

form.action = 'https://22.javascript.pages.academy/keksobooking';

export {form, setPrice, setAddress, placeTitle, placeRoom, placeCapacity};

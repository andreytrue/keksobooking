import {FLOAT_NUMBER} from './mock.js';

const form = document.querySelector('.notice');

const priceFromType = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

const placeType = form.querySelector('#type');
const placePrice = form.querySelector('#price');

placeType.addEventListener('change', () => {
  placePrice.min = priceFromType[placeType.value];
  placePrice.placeholder = priceFromType[placeType.value];
});

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

export {setAddress};

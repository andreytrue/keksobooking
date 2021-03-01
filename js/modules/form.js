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

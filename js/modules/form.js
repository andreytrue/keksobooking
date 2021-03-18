import {sendData} from './data.js';
import {showSuccessMessage, showErrorMessage} from './utils.js';
import {resetFilters} from './filter.js';
import {resetMainPoint} from './map.js';

const FLOAT_NUMBER = 5;
const PRICE_MAX = 1000000;
const SERVER_ADDRESS = 'https://22.javascript.pages.academy/keksobooking';
const priceFromType = {
  'bungalow': 0,
  'flat': 1000,
  'house': 5000,
  'palace': 10000,
}

const form = document.querySelector('.ad-form');
const placeType = form.querySelector('#type');
const placePrice = form.querySelector('#price');

placePrice.max = PRICE_MAX;

const setPrice = () => {
  placePrice.min = priceFromType[placeType.value];
  placePrice.placeholder = priceFromType[placeType.value];
}

setPrice();

placeType.addEventListener('change', () => {
  setPrice();
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

const setAddress = ({lat, lng}) => {
  const x = lat.toFixed(FLOAT_NUMBER);
  const y = lng.toFixed(FLOAT_NUMBER);

  placeAddress.value = x + ', ' + y;
  placeAddress.placeholder = x + ', ' + y;
};

const placeTitle = form.querySelector('#title');
const placeRoom = form.querySelector('#room_number');
const placeCapacity = form.querySelector('#capacity');

form.action = SERVER_ADDRESS;

const formFields = form.querySelectorAll('fieldset');

const disableForm = () => {
  form.classList.add('ad-form--disabled');
  formFields.forEach((field) => {
    field.disabled = true;
  });
};

const enableForm = () => {
  form.classList.remove('ad-form--disabled');
  formFields.forEach((field) => {
    field.disabled = false;
  });
};

const resetForm = () => {
  form.reset();

  setPrice();
}

const setPointFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showSuccessMessage();
        return onSuccess();
      },
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

const formReset = form.querySelector('.ad-form__reset');

formReset.addEventListener('click', (evt) => {
  evt.preventDefault();

  resetForm();
  resetFilters();
  resetMainPoint();
})

export {form, setPrice, setAddress, placeTitle, placeRoom, placeCapacity, disableForm, enableForm, resetForm, setPointFormSubmit};

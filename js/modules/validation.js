import {placeRoom, placeTitle, placeCapacity} from './form.js';

const TITLE_LENGTH_MIN = 30;
const TITLE_LENGTH_MAX = 100;

const ROOM_MAX = 100;
const CAPACITY_MIN = 0;

placeTitle.addEventListener('input', () => {
  const valueLength = placeTitle.value.length;
  
  if (placeTitle.minlength < TITLE_LENGTH_MIN) {
    placeTitle.setCustomValidity('Не хватает ' + (TITLE_LENGTH_MIN - valueLength) + ' символов');
  } else if (placeTitle.maxlength > TITLE_LENGTH_MAX) {
    placeTitle.setCustomValidity('Уберите лишние ' + (valueLength - TITLE_LENGTH_MAX) + ' символов');
  } else {
    placeTitle.setCustomValidity('');
  }

  placeTitle.reportValidity();
});

const setPlaceCapacity = () => {
  for (let i = 0; i < placeCapacity.length; i++) {
    const roomsValue = Number(placeRoom.value);
    const option = placeCapacity[i];
    const capacity = Number(option.value);

    if (roomsValue === ROOM_MAX) {
      capacity === 0 ? option.disabled = false : option.disabled = true;
    } else {
      capacity > roomsValue ? option.disabled = true : option.disabled = false;

      if (capacity === CAPACITY_MIN) {
        option.disabled = true;
      }
    }

    placeCapacity[i].selected = placeCapacity[i].disabled === false;
  }
}

placeRoom.addEventListener('change', () => {
  setPlaceCapacity();
});

export {setPlaceCapacity};
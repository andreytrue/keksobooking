import {placeRoom, placeTitle, placeCapacity} from './form.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

placeTitle.addEventListener('input', () => {
  const valueLength = placeTitle.value.length;
  
  if (valueLength < MIN_TITLE_LENGTH) {
    placeTitle.setCustomValidity('Не хватает ' + (MIN_TITLE_LENGTH - valueLength) + ' символов');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    placeTitle.setCustomValidity('Уберите лишние ' + (valueLength - MAX_TITLE_LENGTH) + ' символов');
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

    if (roomsValue === 100) {
      capacity === 0 ? option.disabled = false : option.disabled = true;
    } else {
      capacity > roomsValue ? option.disabled = true : option.disabled = false;

      if (capacity === 0) {
        option.disabled = true;
      }
    }

    placeCapacity[i].selected = placeCapacity[i].disabled === false;
  }
}

setPlaceCapacity();

placeRoom.addEventListener('change', setPlaceCapacity);

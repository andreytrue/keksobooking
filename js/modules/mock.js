import {getRandomInteger, getRandomFloat} from './utils.js';

const PRICE_MIN = 100;
const PRICE_MAX = 800;
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const ROOM_AMOUNT = 5;
const GUEST_AMOUNT = 6;
const CHECK_IN_TIME = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIME = ['12:00', '13:00', '14:00'];
const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;
const FLOAT_NUMBER = 5;
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_MAX_NUM = 8;

const createPoint = () => {
  const locationX = getRandomFloat(LOCATION_X_MIN, LOCATION_X_MAX, FLOAT_NUMBER);
  const locationY = getRandomFloat(LOCATION_Y_MIN, LOCATION_Y_MAX, FLOAT_NUMBER);
  const checkInIndex = getRandomInteger(0, CHECK_IN_TIME.length-1);
  const checkOutIndex = getRandomInteger(0, CHECK_OUT_TIME.length-1);
  const featuresList = FEATURES.slice(0, getRandomInteger(0, FEATURES.length-1));
  const photosList = new Array(getRandomInteger(0, PHOTOS_MAX_NUM)).fill().map(() => {
    return 'http://o0.github.io/assets/images/tokyo/hotel' + getRandomInteger(1,3) +'.jpg';
  })

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) +'.png',
    },
    offer: {
      title: 'Чувствуйте себя как дома',
      address: locationX + ', ' + locationY,
      price: getRandomInteger(PRICE_MIN, PRICE_MAX),
      type: TYPES[getRandomInteger(0, TYPES.length-1)],
      rooms: getRandomInteger(1, ROOM_AMOUNT),
      guests: getRandomInteger(1, GUEST_AMOUNT),
      checkin: CHECK_IN_TIME[checkInIndex],
      checkout: CHECK_OUT_TIME[checkOutIndex],
      features: featuresList,
      description: 'У нас тепло и уютно. Будем вас ждать',
      photos: photosList,
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};

export {createPoint, FLOAT_NUMBER};

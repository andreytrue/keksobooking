const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardPhotoTemplate = cardTemplate.querySelector('.popup__photo');

const map = document.querySelector('#map-canvas');

const getCardTemplate = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  let cardType = '';
  const cardPhotosList = cardElement.querySelector('.popup__photos');

  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';

  switch (card.offer.type) {
    case 'flat':
      cardType = 'Квартира';
      break
    case 'bungalow':
      cardType = 'Бунгало';
      break;
    case 'house':
      cardType = 'Дом';
      break;
    case 'palace':
      cardType = 'Дворец';
      break;
    default:
      card.offer.type.hidden = true;
  }
  cardElement.querySelector('.popup__type').textContent = cardType;

  cardElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;
  cardElement.querySelector('.popup__features').textContent = card.offer.features.join(', ');
  cardElement.querySelector('.popup__description').textContent = card.offer.description;

  if (card.offer.photos.length > 0) {
    card.offer.photos.forEach((source, i) => {
      cardPhotosList.lastElementChild.src = source;

      if (i < card.offer.photos.length - 1) {
        const photo = cardPhotoTemplate.cloneNode(true);
        cardPhotosList.appendChild(photo);
      }
    });
  } else {
    cardElement.querySelector('.popup__photo').hidden = true;
  }

  cardElement.querySelector('.popup__avatar').src = card.author.avatar;

  map.appendChild(cardElement);
};

export {getCardTemplate};

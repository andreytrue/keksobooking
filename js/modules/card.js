const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const cardPhotoTemplate = cardTemplate.querySelector('.popup__photo');

const offerTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
}

const createCardTemplate = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardPhotosList = cardElement.querySelector('.popup__photos');

  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';

  cardElement.querySelector('.popup__type').textContent = offerTypes[card.offer.type];

  card.offer.rooms ?
    cardElement.querySelector('.popup__type').textContent = offerTypes[card.offer.type] :
    card.offer.rooms.hidden = true;

  cardElement.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout;

  card.offer.features ?
  cardElement.querySelector('.popup__features').textContent = card.offer.features.join(', ') :
    card.offer.features.hidden = true;

  card.offer.description ?
    cardElement.querySelector('.popup__description').textContent = card.offer.description :
    card.offer.description.hidden = true;

  cardPhotosList.innerHTML = '';
  if (card.offer.photos.length) {
    card.offer.photos.forEach((source) => {
      const photo = cardPhotoTemplate.cloneNode(true);
      photo.src = source;
      cardPhotosList.appendChild(photo);
    });
  } else {
    cardElement.querySelector('.popup__photos').hidden = true;
  }

  card.author.avatar ?
    cardElement.querySelector('.popup__avatar').src = card.author.avatar :
    card.author.avatar.hidden = true;

  return cardElement;
};

export {createCardTemplate};

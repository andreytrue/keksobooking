import {showAlertMessage} from './utils.js';

const GET_LINK = 'https://22.javascript.pages.academy/keksobooking/data';
const SEND_LINK = 'https://22.javascript.pages.academy/keksobooking';
const ALERT_MESSAGE = 'Не удалось загрузить точки. Попробуйте вновь.';

const getData = (onSuccess) => {
  fetch(GET_LINK)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlertMessage(ALERT_MESSAGE);
      }
    })
    .then((points) => {
      onSuccess(points);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_LINK,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export {getData, sendData};

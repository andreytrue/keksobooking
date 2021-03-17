const ALERT_SHOW_TIME = 5000;

const showAlertMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  
  alertContainer.textContent = message;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const successMessage = document.getElementById('success').content.querySelector('.success');

const closeMessage = (message) => {
  message.remove();
}

const container = document.querySelector('main');

const showSuccessMessage = () => {
  const messageElement = successMessage.cloneNode(true);
  messageElement.style.zIndex = 1000;
  container.append(messageElement);
  
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      closeMessage(messageElement);
    }
  });

  window.addEventListener('click', () => {
    closeMessage(messageElement);
  });
}

const errorMessage = document.getElementById('error').content.querySelector('.error');

const showErrorMessage = () => {
  const messageElement = errorMessage.cloneNode(true);
  const errorButton = messageElement.querySelector('.error__button');
  messageElement.style.zIndex = 1000;
  container.append(messageElement);

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      closeMessage(messageElement);
    }
  });

  errorButton.addEventListener('click', () => {
    closeMessage(messageElement);
  });

  window.addEventListener('click', () => {
    closeMessage(messageElement);
  });
}

export {showAlertMessage, showSuccessMessage, showErrorMessage};

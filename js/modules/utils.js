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

const container = document.querySelector('main');
const errorMessage = document.getElementById('error').content.querySelector('.error');
const successMessage = document.getElementById('success').content.querySelector('.success');

const messages = {
  success: successMessage,
  error: errorMessage,
}

const onWindowKeyDown = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    closeMessage();
  }
}

const onWindowClick = () => {
  closeMessage();
}

const closeMessage = () => {
  const message = document.querySelector('.message-popup');

  if (message) {
    message.remove();
    window.removeEventListener('keydown', onWindowKeyDown);
    window.removeEventListener('click', onWindowClick);
  }
}

const showMessage = (type) => {
  const messageElement = messages[type].cloneNode(true);
  messageElement.style.zIndex = 1000;
  container.append(messageElement);
  
  window.addEventListener('keydown', onWindowKeyDown);
  window.addEventListener('click', onWindowClick);
}

const showSuccessMessage = () => {
  showMessage('success');
}

const showErrorMessage = () => {
  showMessage('error');
}

export {showAlertMessage, showSuccessMessage, showErrorMessage};

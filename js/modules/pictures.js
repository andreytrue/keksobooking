const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  
const avatarFileChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const houseFileChooser = document.querySelector('.ad-form__upload input[type=file]');
const picturePreview = document.querySelector('.ad-form__photo');

const addPicture = (fileChooser, preview) => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
    
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
    
  if (matches) {
    const reader = new FileReader();
      
    reader.addEventListener('load', () => {
      preview === avatarPreview ?
        preview.src = reader.result
        : '';

      preview === picturePreview ?
        (preview.style.backgroundImage = 'url(' + reader.result + ')', 
        preview.style.backgroundSize = '100%')
        : '';
    });

    reader.readAsDataURL(file);
  }
}

avatarFileChooser.addEventListener('change', () => addPicture(avatarFileChooser, avatarPreview));
houseFileChooser.addEventListener('change', () => addPicture(houseFileChooser, picturePreview));

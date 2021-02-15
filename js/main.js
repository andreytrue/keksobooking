const getRandomInteger = (min, max) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const getRandomFloat = (min, max, float) => {
  if (max < min) {
    return (max + Math.random() * (min - max)).toFixed(float);
  } else if (min < 0 || max < 0) {
    throw new Error ('Значение не может быть меньше 0');
  }

  return (min + Math.random() * (max - min)).toFixed(float);
};

getRandomInteger(1,5);
getRandomFloat(1,5,3);

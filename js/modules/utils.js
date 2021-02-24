const getRandomInteger = (min, max) => {
  if (max === undefined) {
    throw new Error ('Вы не передали максимальное значение диапазона');
  }

  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

const getRandomFloat = (min, max, float = 0) => {
  if (max === undefined) {
    throw new Error ('Вы не передали максимальное значение диапазона');
  }

  if (max < min) {
    return +(max + Math.random() * (min - max)).toFixed(float);
  } else if (min < 0 || max < 0) {
    throw new Error ('Значение не может быть меньше 0');
  }

  return +(min + Math.random() * (max - min)).toFixed(float);
};

const POINTS_AMOUNT = 10;

export {getRandomInteger, getRandomFloat, POINTS_AMOUNT};

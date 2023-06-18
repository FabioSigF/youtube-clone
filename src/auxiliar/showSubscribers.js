export function showSubscribers(number) {
  let result;

  if (number === "1" || number === 1) {
    result = `${number} inscrito`;
    return result;
  }
  else if (number < 999) {
    result = `${number} inscritos`;
    return result;
  }
  else if (number < 1000000) {
    result = `${Math.floor(number / 1000)} mil inscritos`;
    return result;
  } else {
    result = `${(number / 1000000).toFixed(1)} mi inscritos`;
    return result;
  }
}
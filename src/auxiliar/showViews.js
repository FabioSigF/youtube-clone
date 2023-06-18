export function showViews(views) {
  let result;

  if (views === "1" || views === 1) {
    result = `${views} visualização`;
    return result;
  }
  else if (views < 999) {
    result = `${views} visualizações`;
    return result;
  }
  else if (views < 1000000) {
    result = `${Math.floor(views / 1000)} mil visualizações`;
    return result;
  } else {
    result = `${Math.floor(views / 1000000)} mi visualizações`;
    return result;
  }
}
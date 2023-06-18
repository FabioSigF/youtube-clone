export function showLikes(likes) {
  let result;

  if (likes === "1" || likes === 1) {
    result = `${likes}`;
    return result;
  }
  else if (likes < 999) {
    result = `${likes}`;
    return result;
  }
  else if (likes < 1000000) {
    result = `${Math.floor(likes / 1000)} mil`;
    return result;
  } else {
    result = `${Math.floor(likes / 1000000)} mi`;
    return result;
  }
}
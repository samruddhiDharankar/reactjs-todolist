function persistData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export { persistData, getData };

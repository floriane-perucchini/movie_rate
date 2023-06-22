function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function clearStorage(key) {
  localStorage.removeItem(key);
}

export { saveStorage, getStorage, clearStorage };

// Utility module to manage HTML5 localStorage

/**
 * Check whether localStorage is available.
 * It sets a dummy key.
 * Validates the dummy key.
 * Then deletes the dummy key.
 */
const isLocalStorage = () => {
  try {
    localStorage.setItem('test', 'x');
    // console.log(localStorage.getItem('text'));
    if (localStorage.getItem('test') === 'x') {
      localStorage.removeItem('test');
      return true;
    } else {
      throw new Error('localStorage unavailable');
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

/**
 * Get data from local storage
 * @param {string} obj Local storage identifier
 */
const getLocalStorage = (obj) => {
  let response = {
    statusOK: false,
    data: []
  }
  try {
    let storedData = JSON.parse(localStorage.getItem(obj));
    // console.log(storedData);
    if (storedData) {
      response = {
        statusOK: true,
        data: storedData
      };
    } else {
      // console.warn('No favorites found in local storage');
      throw new Error('No items found in localStorage');
    }
  } catch (err) {
    // console.log(err);
    // Life goes on ...
  }
  // console.log(response);
  return response;
}

/**
 * Append item to local storage
 * @param {string} obj Local storage identifier
 * @param {any} data Data object to store
 */
const addLocalStorage = (obj, data) => {
  let storedData = JSON.parse(localStorage.getItem(obj));
  if (storedData) {
    storedData.push(data);
  } else {
    storedData = []
    storedData.push(data);
  }
  localStorage.setItem(obj, JSON.stringify(storedData));
  return true;
}

/**
 * Overwrite item to local storage
 * @param {string} obj Local storage identifier
 * @param {any} data Data object to store
 */
const saveLocalStorage = (obj, data) => {
  localStorage.setItem(obj, JSON.stringify(data));
  return true;
}

/**
 * Remove item from local storage
 * @param {string} obj Local storage identifier
 * @param {number} data Data object to remove
 */
const removeLocalStorage = (obj, data) => {
  const storedData = JSON.parse(localStorage.getItem(obj));
  let newData = [];
  newData = storedData.filter((item) => { return item.id !== data.id })
  // console.log(newData);
  localStorage.setItem(obj, JSON.stringify(newData));
  return true;
}

// Export module methods
module.exports.isLocalStorage = isLocalStorage;
module.exports.getLocalStorage = getLocalStorage;
module.exports.addLocalStorage = addLocalStorage;
module.exports.saveLocalStorage = saveLocalStorage;
module.exports.removeLocalStorage = removeLocalStorage;
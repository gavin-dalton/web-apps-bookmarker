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
 * Get mock data sample data
 * @param {string} obj Dummy local storage identifier
 */
const getMockStorage = (obj) => {
  // https://github.com/kelektiv/node-uuid
  const response = {
    statusOK: true,
    // statusOK: false,
    data: [
      {
        siteId: '347cf222-887b-11e9-bc42-526af7764f64',
        siteName: 'Google',
        siteURL: 'https://www.google.co.za'
      },
      {
        siteId: '347cf4ca-887b-11e9-bc42-526af7764f64',
        siteName: 'Standard Bank',
        siteURL: 'https://www.google.co.za'
      },
      {
        siteId: '347cf632-887b-11e9-bc42-526af7764f64',
        siteName: 'Banana Tree',
        siteURL: 'https://www.google.co.za'
      },
      {
        siteId: '347cf786-887b-11e9-bc42-526af7764f64',
        siteName: 'First National Bank',
        siteURL: 'https://www.google.co.za'
      },
      {
        siteId: '347cf9ac-887b-11e9-bc42-526af7764f64',
        siteName: 'Apple Trees',
        siteURL: 'https://www.google.co.za'
      },
      {
        siteId: '347cfb0a-887b-11e9-bc42-526af7764f64',
        siteName: 'Hello World',
        siteURL: 'https://www.google.co.za'
      },
      {
        siteId: '347cfc54-887b-11e9-bc42-526af7764f64',
        siteName: 'Batman',
        siteURL: 'https://www.batman.com'
      }
    ]
  };
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
 * @param {any} data Data object to remove
 * @param {string} member Data object member to filter on
 */
const removeLocalStorage = (obj, data, member) => {
  const storedData = JSON.parse(localStorage.getItem(obj));
  let newData = [];
  // Need a polyfill to support IE
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  newData = storedData.filter((item) => { return item[member] !== data[member] })
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
module.exports.getMockStorage = getMockStorage;
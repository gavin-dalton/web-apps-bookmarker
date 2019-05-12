import { useEffect, useReducer } from 'react';
import StateReducer from '../reducers/StateReducer';
import { getLocalStorage } from '../utilities/localstorage';


// Custom hook
const DataHook = (index) => {
  const [state, dispatch] = useReducer(StateReducer, {
    isLoading: true,
    bookmarks: [],
  });
  console.log('Hook index...', index);

  useEffect(() => {
    // Catch a cancelled effect
    let didCancel = false;
    
    // Simulate network latency
    setTimeout(() => {
      let storedData = {};
      !didCancel && dispatch({ type: 'GET_DATA_INIT' });
      storedData = getLocalStorage('gd-bm-bookmarks');
      if (storedData.statusOk) {
        dispatch({ type: 'GET_DATA_SUCCESS', payload: storedData.data });
      } else {
        dispatch({ type: 'GET_DATA_FAILURE' });
      }
    }, 1000);

    // Effect hook cleanup function
    // Effect hook must always return a function
    return () => { return(didCancel = true); };
    // Short version
    // return () => didCancel = true;
  }, [index]);

  const handleAdd = () => {

  };

  const handleDelete = () => {

  };

  return { ...state, handleAdd, handleDelete };
};

export default DataHook;
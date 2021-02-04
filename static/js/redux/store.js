let store = {};

export const getStore = () => {
  return { ...store };
};

export const setStore = (newStore) => {
  store = { ...store, ...newStore };
  // console.log(store);
};

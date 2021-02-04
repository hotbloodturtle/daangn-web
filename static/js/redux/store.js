let store = {};

export const getStore = () => store;

export const setStore = (data) => {
  store = Object.assign({}, store, data);
};

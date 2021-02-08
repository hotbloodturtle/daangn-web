class Store {
  constructor() {
    this.store = {};
    this.changeListeners = {};
  }
  getStore() {
    return { ...this.store };
  }
  setStore(newStore) {
    this.store = { ...this.store, ...newStore };
  }
  subscribe = (type, dispatch) => {
    if (!Array.isArray(this.changeListeners[type])) {
      this.changeListeners[type] = [];
    }
    this.changeListeners[type].push(dispatch);
  };
  publish = (type) => {
    if (!Array.isArray(this.changeListeners[type])) {
      this.changeListeners[type] = [];
    }
    this.changeListeners[type].forEach((changeListener) => {
      changeListener();
    });
  };
}

const store = new Store();

export default store;

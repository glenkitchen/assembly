import store from 'store';

const settings = {
  theme: 'settings.theme',
};

export default {
  get(key: string) {
    try {
      return store.get(key);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },
  set(key: string, value) {
    try {
      if (!(key in settings)) {
        console.warn(
          `Not updating setting ${key} because it is not in the whitelist`
        );
        return;
      }

      store.set(key, value);
    } catch (error) {
      console.error(error);
    }
  },
};

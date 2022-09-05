import { LocationType } from "./type";

export const setStorage = (key: string, data: any, location: LocationType) => {
  switch (location) {
    case "local":
      window.localStorage.setItem(key, JSON.stringify(data));
      break;
    case "session":
      window.sessionStorage.setItem(key, JSON.stringify(data));
      break;
  }
};

export const getStorage = (key: string, location: LocationType) => {
  switch (location) {
    case "local":
      return window.localStorage.getItem(key);
    case "session":
      return window.sessionStorage.getItem(key);
  }
};

export const resetStorage = (key: string, location: LocationType) => {
  switch (location) {
    case "local":
      return window.localStorage.removeItem(key);
    case "session":
      return window.sessionStorage.removeItem(key);
  }
};

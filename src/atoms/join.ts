import { atom, selector, selectorFamily } from 'recoil';
import { fetchLogin } from '../service/login/login';
import { getStorage } from '../util/storage/storage';

type loginInfo = {
  id: string;
  nickname: string;
  token: boolean;
};

export const userAtom = atom<loginInfo>({
  key: '@userAtom',
  default: selector({
    key: '@userAtom/default',
    get: () => {
      const userInfo =
        getStorage('user', 'local') || getStorage('user', 'session');

      if (userInfo) {
        return JSON.parse(userInfo);
      }

      return { id: '', nickname: '', token: false };
    },
  }),
});

export const pageStepAtom = atom<string>({
  key: '@pageStepAtom',
  default: 'signIn',
});

export const loginQuery = selectorFamily({
  key: '@loginQuery',
  get: (user: { id: string; pw: string }) => async () => {
    try {
      const { id, pw } = user;
      const response = await fetchLogin(id, pw);
      const { status } = response;
      switch (status) {
        case 200:
          return response;
        case 204:
          return response;
        default:
          return response;
      }
    } catch (e: any) {
      const { response } = e;
      return response;
    }
  },
});

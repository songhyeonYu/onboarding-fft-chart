import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: persistSession } = recoilPersist({
  storage: sessionStorage,
});

const { persistAtom: persistLocal } = recoilPersist();

type loginInfo = {
  id: string | undefined;
  nickname: string | undefined;
  token: boolean;
};

export const loginState = atom<loginInfo>({
  key: "loginState",
  default: { id: "", nickname: "", token: false },
  effects_UNSTABLE: [persistSession],
});

export const autoLoginState = atom<loginInfo>({
  key: "autoLoginState",
  default: { id: "", nickname: "", token: false },
  effects_UNSTABLE: [persistLocal],
});

export const loginIdState = atom<string>({
  key: "loginIdState",
  default: "",
});

export const loginPwState = atom<string>({
  key: "loginPwState",
  default: "",
});

export const pageStepState = atom<string>({
  key: "pageStepState",
  default: "login",
});

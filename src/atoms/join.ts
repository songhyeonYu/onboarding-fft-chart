import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: persistSession } = recoilPersist({
  storage: sessionStorage,
});

const { persistAtom: persistLocal } = recoilPersist();

type loginInfo = {
  id: string;
  nickname: string;
  token: boolean;
};

export const loginAtom = atom<loginInfo>({
  key: "@loginAtom",
  default: { id: "", nickname: "", token: false },
  effects_UNSTABLE: [persistSession],
});

export const autoLoginAtom = atom<loginInfo>({
  key: "@autoLoginAtom",
  default: { id: "", nickname: "", token: false },
  effects_UNSTABLE: [persistLocal],
});

export const pageStepAtom = atom<string>({
  key: "@pageStepAtom",
  default: "login",
});

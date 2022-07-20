import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

type loginInfo = {
  id: string;
  pw: string;
  token: boolean;
};

export const loginIdState = atom<string>({
  key: "loginIdState",
  default: "",
});

export const loginPwState = atom<string>({
  key: "loginPwState",
  default: "",
});

export const loginState = atom<loginInfo>({
  key: "loginState",
  default: { id: "", pw: "", token: false },
  effects_UNSTABLE: [persistAtom],
});

export const pageStepState = atom<string>({
  key: "pageStep",
  default: "login",
});

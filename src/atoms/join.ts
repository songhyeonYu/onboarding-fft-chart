import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  storage: sessionStorage,
});

type loginInfo = {
  id: string | undefined;
  nickname: string | undefined;
  token: boolean;
};

export const loginState = atom<loginInfo>({
  key: "loginState",
  default: { id: "", nickname: "", token: false },
  effects_UNSTABLE: [persistAtom],
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

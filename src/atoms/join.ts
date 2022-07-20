import { atom } from "recoil";

export const loginIdState = atom<string>({
  key: "loginIdState",
  default: "",
});

export const loginPwState = atom<string>({
  key: "loginPwState",
  default: "",
});

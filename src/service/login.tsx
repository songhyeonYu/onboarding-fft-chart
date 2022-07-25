import users from "../mock/users.json";

type loginType = {
  index: number;
  id: string;
  pw: string;
  nickName: string;
};

export const loginRequest = (id: string, pw: string): loginType | undefined =>
  users.find((user) => user.id === id && user.pw === pw);

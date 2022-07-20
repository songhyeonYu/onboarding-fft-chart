import users from "../mock/users.json";

export const loginRequest = (id: string, pw: string): boolean =>
  !!users.find((user) => user.id === id && user.pw === pw);

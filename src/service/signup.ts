import users from "../mock/users.json";

export const signupRequest = (
  id: string,
  nickname: string,
  pw: string
): void => {
  const maxUser = users.reduce((prev, current) =>
    prev.index > current.index ? prev : current
  );
  users.push({ index: maxUser.index + 1, id: id, pw: pw, nickName: nickname });
};

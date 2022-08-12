import users from "../mock/users.json";

export const signupRequest = (
  id: string,
  nickname: string,
  pw: string
): boolean => {
  const maxUser = users.reduce((prev, current) =>
    prev.index > current.index ? prev : current
  );
  users.push({ index: maxUser.index + 1, id: id, pw: pw, nickName: nickname });
  return true;
};

export const idDuplicationRequest = (id: string): boolean => {
  return !users.filter((user) => user.id === id).length;
};

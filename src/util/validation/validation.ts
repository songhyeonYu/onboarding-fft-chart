export const idValidation = (id: string): boolean => {
  return id.length < 2;
};

export const nicknameValidation = (nickname: string): boolean => {
  return nickname.length < 2;
};

export const passwordValidation = (pw: string) => {
  return pw.length < 2;
};

export const pwConfirmValidation = (pwConfirm: string) => {
  return pwConfirm.length < 6;
};

export const pwEqualValidation = (pw: string, pwConfirm: string) => {
  return pw !== pwConfirm;
};
export const loginValidationMsg = {
  id: "아이디를 6글자 이상 입력해주세요!",
  nickname: "닉네임을 6글자 이상 입력해주세요",
  pw: "비밀번호를 6글자 이상 입력해주세요!",
  pwConfirm: "비밀번호 확인을 6글자 이상 입력해주세요!",
  pwEqual: "비밀번호 확인을 6글자 이상 입력해주세요!",
  idEmpty: "중복 체크 버튼을 눌러주세요!",
  idFail: "아이디가 중복됩니다. 아이디를 변경해주세요!",
};

export const loginValidationIntegrate = (
  id: string,
  nickname: string,
  pw: string,
  pwConfirm: string,
  idCheck: string
): string => {
  switch (true) {
    case idValidation(id):
      return loginValidationMsg["id"];
    case nicknameValidation(nickname):
      return loginValidationMsg["nickname"];
    case passwordValidation(pw):
      return loginValidationMsg["pw"];
    case pwConfirmValidation(pwConfirm):
      return loginValidationMsg["pwConfirm"];
    case pwEqualValidation(pw, pwConfirm):
      return loginValidationMsg["pwEqual"];
    case idCheck === "empty":
      return loginValidationMsg["idEmpty"];
    case idCheck === "fail":
      return loginValidationMsg["idFail"];
    default:
      return "";
  }
};

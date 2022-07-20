import React, { useState } from "react";
import JoinInput from "../component/JoinInput";
import Singup from "../presentational/Signup";

function SignupContainer() {
  const [signupInput, setSignInput] = useState({
    id: "",
    nickname: "",
    pw: "",
    pwConfirm: "",
  });
  const { id, nickname, pw, pwConfirm } = signupInput;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignInput({
      ...signupInput,
      [id]: value,
    });
  };

  return (
    <>
      <JoinInput
        type={"text"}
        label={"아이디"}
        value={id}
        id={"id"}
        onChange={onChange}
      />
      <JoinInput
        type={"text"}
        label={"닉네임"}
        value={nickname}
        id={"nickname"}
        onChange={onChange}
      />
      <JoinInput
        type={"password"}
        label={"비밀번호"}
        value={pw}
        id={"pw"}
        onChange={onChange}
      />
      <JoinInput
        type={"text"}
        label={"비밀번호 확인"}
        value={pwConfirm}
        id={"pwConfirm"}
        onChange={onChange}
      />
      <Singup active={false} />
    </>
  );
}

export default SignupContainer;

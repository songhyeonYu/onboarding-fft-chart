import React, { useState } from "react";
import JoinInput from "../component/JoinInput";
import Signup from "../presentational/Signup";
import { signupRequest } from "../service/signup";
import { pageStepState } from "../atoms/join";
import { useRecoilState } from "recoil";

function SignupContainer() {
  const [_, setPageStep] = useRecoilState(pageStepState);

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

  const signupOnClick = () => {
    signupRequest(id, nickname, pw);
    setPageStep("login");
    console.log("회원가입");
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
      <Signup active={false} signupSubmit={signupOnClick} />
    </>
  );
}

export default SignupContainer;

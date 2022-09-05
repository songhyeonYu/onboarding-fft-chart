import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { pageStepAtom } from '../../../atoms/join';
import InputWithLabel from '../../../components/combination/inputWithLabel/InputWithLabel';
import Flex from '../../../components/elements/flex/Flex';
import Text from '../../../components/elements/text/Text';
import Button from '../../../components/elements/button/Button';
import { DuplicationCheckProps, msgType } from './type';
import {
  idValidation,
  loginValidationIntegrate,
  loginValidationMsg,
} from '../../../util/validation/validation';
import { fetchIdDuplication, fetchSignup } from '../../../service/login/login';
import { useErrorHandler } from 'react-error-boundary';

export const DuplicationCheck = (props: DuplicationCheckProps) => {
  const { msgType, onClick } = props;

  const msg = (type: msgType) => {
    switch (type) {
      case 'empty':
        return (
          <Text
            text={'중복체크를 눌러주세요!'}
            color={'#000'}
            size={'0.7rem'}
          />
        );
      case 'fail':
        return (
          <Text
            text={'아이디가 중복됩니다.'}
            color={'#ff0000'}
            size={'0.7rem'}
          />
        );
      case 'success':
        return (
          <Text
            text={'사용 가능한 아이디입니다.'}
            color={'green'}
            size={'0.7rem'}
          />
        );
    }
  };

  return (
    <Flex
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      {msg(msgType)}
      <Button onClick={onClick} text={'중복확인'} size={'0.7rem'} />
    </Flex>
  );
};

function SignUp() {
  const setPageStep = useSetRecoilState(pageStepAtom);
  const [input, setInput] = useState({
    id: '',
    nickname: '',
    pw: '',
    pwConfirm: '',
  });
  const [idCheck, setIdCheck] = useState<msgType>('empty');
  const { id, nickname, pw, pwConfirm } = input;
  const errorHandler = useErrorHandler();
  const checkOnClick = async () => {
    if (idValidation(id)) {
      alert(loginValidationMsg['id']);
      return;
    }

    try {
      const duplicationCheck = await fetchIdDuplication(id);
      const { status } = duplicationCheck;
      switch (status) {
        case 200:
          setIdCheck('success');
          break;
        case 204:
          setIdCheck('fail');
          break;
      }
    } catch (e) {
      errorHandler(true);
    }
  };

  const signupOnClick = async () => {
    const message = loginValidationIntegrate(
      id,
      nickname,
      pw,
      pwConfirm,
      idCheck
    );
    if (message) {
      alert(message);
      return;
    }

    try {
      const { status } = await fetchSignup({
        id: id,
        nickname: nickname,
        pw: pw,
      });
      switch (status) {
        case 200:
          setPageStep('signIn');
          break;
      }
    } catch (e) {
      errorHandler(true);
    }
  };

  useEffect(() => {
    setIdCheck('empty');
  }, [id]);

  return (
    <>
      <Flex direction={'column'} gap={'5px'}>
        <InputWithLabel
          type={'text'}
          value={id}
          text={'아이디'}
          id={'id'}
          onChange={(e) => {
            const { id, value } = e.target;
            setInput({ ...input, [id]: value.trim() });
          }}
          placeholder={'아이디를 6글자 이상 입력해주세요!'}
        />
        <DuplicationCheck msgType={idCheck} onClick={checkOnClick} />
      </Flex>
      <InputWithLabel
        type={'text'}
        value={nickname}
        text={'닉네임'}
        id={'nickname'}
        onChange={(e) => {
          const { id, value } = e.target;
          setInput({ ...input, [id]: value.trim() });
        }}
        placeholder={'닉네임을 2글자 이상 입력해주세요!'}
      />

      <InputWithLabel
        type={'password'}
        value={pw}
        text={'비밀번호'}
        id={'pw'}
        onChange={(e) => {
          const { id, value } = e.target;
          setInput({ ...input, [id]: value.trim() });
        }}
        placeholder={'비밀번호를 6글자 이상 입력해주세요!'}
      />
      <InputWithLabel
        type={'password'}
        value={pwConfirm}
        text={'비밀번호 확인'}
        id={'pwConfirm'}
        onChange={(e) => {
          const { id, value } = e.target;
          setInput({ ...input, [id]: value.trim() });
        }}
        placeholder={'비밀번호를 6글자 이상 입력해주세요!'}
      />

      <Flex
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text
          text={'로그인하러 가기'}
          color={'#666'}
          cursor={'pointer'}
          hoverColor={'#000'}
          onClick={() => setPageStep('signIn')}
          size={'0.7rem'}
        />
        <Button onClick={signupOnClick} text={'회원가입'} />
      </Flex>
    </>
  );
}

export default SignUp;

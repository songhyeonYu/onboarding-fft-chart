import React, { useState } from 'react';
import InputWithLabel from '../../../components/combination/inputWithLabel/InputWithLabel';
import Flex from '../../../components/elements/flex/Flex';
import Button from '../../../components/elements/button/Button';
import CheckBox from '../../../components/elements/checkBox/CheckBox';
import Label from '../../../components/elements/label/Label';
import Text from '../../../components/elements/text/Text';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { loginQuery, pageStepAtom } from '../../../atoms/join';
import { setStorage } from '../../../util/storage/storage';
import { useErrorHandler } from 'react-error-boundary';

function SignIn() {
  const [input, setInput] = useState({
    id: '',
    pw: '',
  });
  const { id, pw } = input;
  const [autoLogin, setAutoLogin] = useState(false);
  const setPageStep = useSetRecoilState(pageStepAtom);
  const errorHandle = useErrorHandler();

  const login = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        const userInfo = await snapshot.getPromise(loginQuery({ id, pw }));
        const { status, data } = userInfo;
        switch (status) {
          case 204:
            alert('아이디 또는 패스워드를 확인 해주세요!');
            setInput({ ...input, pw: '' });
            return;
          case 200:
            if (autoLogin) {
              setStorage(
                'user',
                {
                  id: data.id,
                  nickname: data.nickName,
                  token: true,
                },
                'local'
              );
            } else {
              setStorage(
                'user',
                {
                  id: data.id,
                  nickname: data.nickName,
                  token: true,
                },
                'session'
              );
            }
            window.location.replace('/chart');
            return;
          case 404:
            errorHandle(true);
            return;
          default:
            errorHandle(true);
            return;
        }
      },
    [input]
  );

  return (
    <>
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
      <InputWithLabel
        type={'password'}
        value={pw}
        text={'패스워드'}
        id={'pw'}
        onChange={(e) => {
          const { id, value } = e.target;
          setInput({ ...input, [id]: value.trim() });
        }}
        placeholder={'비밀번호를 6글자 이상 입력해주세요!'}
      />
      <Flex direction={'row'} alignItems={'center'} gap={'10px'}>
        <CheckBox
          id={'autoLogin'}
          checked={autoLogin}
          onChange={() => setAutoLogin((prev) => !prev)}
        />
        <Label text={'자동 로그인'} id={'autoLogin'} fontSize={'0.8rem'} />
      </Flex>
      <Flex
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text
          text={'회원가입'}
          color={'#666'}
          cursor={'pointer'}
          hoverColor={'#000'}
          onClick={() => setPageStep('signUp')}
        />
        <Button
          onClick={login}
          text={'로그인'}
          disabled={!(id.length > 5 && pw.length > 5)}
        />
      </Flex>
    </>
  );
}

export default SignIn;

import React from 'react';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import { useRecoilValue } from 'recoil';
import { pageStepAtom } from '../../atoms/join';
import Wrap from '../../components/elements/wrap/Wrap';
import Center from '../../components/elements/center/Center';
import Padding from '../../components/elements/padding/Padding';
import Flex from '../../components/elements/flex/Flex';
import Logo from '../../components/elements/logo/Logo';
import { PageStepType } from './type';

function Login() {
  const pageStep = useRecoilValue(pageStepAtom);
  const pageStepObject: PageStepType = {
    signIn: <SignIn />,
    signUp: <SignUp />,
  };

  return (
    <Flex direction={'row'} background={'#6f86d6'} minHeight={'100vh'}>
      <Center>
        <Wrap background={'#fff'} minWidth={'320px'}>
          <Padding padding={'30px'} width={'100%'}>
            <Flex direction={'column'} gap={'20px'}>
              <Logo />
              {pageStepObject[pageStep]}
            </Flex>
          </Padding>
        </Wrap>
      </Center>
    </Flex>
  );
}

export default Login;

import { FallbackProps } from 'react-error-boundary';
import Flex from '../flex/Flex';
import React from 'react';
import Text from '../text/Text';
import Button from '../button/Button';

const ErrorPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Flex
      minHeight={'100vh'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'10px'}
    >
      <Text
        fontWeight={'bold'}
        text={'에러가 발생 하였습니다. 잠시 후 다시 시도해 주세요!'}
      />
      <Button text={'재시도'} onClick={resetErrorBoundary} />
    </Flex>
  );
};

export default ErrorPage;

export const ErrorComponent = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <Flex
      minHeight={'500px'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'10px'}
    >
      <Text
        fontWeight={'bold'}
        text={'에러가 발생 하였습니다. 잠시 후 다시 시도해 주세요!'}
      />
      <Button text={'재시도'} onClick={resetErrorBoundary} />
    </Flex>
  );
};

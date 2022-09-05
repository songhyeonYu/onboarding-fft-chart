import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routeList from './RouteList';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../atoms/join';
import { AuthDispatchContext } from '../../container/Auth/AuthProvider';
import { RenderProps } from './type';
import Login from '../login/Login';
import Community from '../commnunity/Community';
import News from '../news/News';
import ChartView from '../chart/ChartView';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '../../components/elements/error/ErrorPage';

const routeComponent = (token: boolean, routeId: string) => {
  const componentList: RenderProps = {
    root: <Navigate to={'/chart'} />,
    login: <Login />,
    chart: <ChartView />,
    community: <Community />,
    news: <News />,
  };

  const fallBack = <Navigate to={'/'} />;

  // 로그인 토큰이 없을 시 login 페이지가 아니라면 로그인으로 돌아가기
  if (!token && routeId !== 'login') {
    return fallBack;
  }

  // 로그인 토큰이 존재하는데 로그인 페이지를 접근하려하면 root 페이지로 전환
  if (token && routeId === 'login') {
    return componentList['root'];
  }

  return componentList[routeId];
};

function View() {
  const dispatch = useContext(AuthDispatchContext);
  const userInfo = useRecoilValue(userAtom);
  const { token } = userInfo;

  useEffect(() => {
    if (token) {
      dispatch({
        type: 'changeAuth',
        user: userInfo,
      });
    }
  }, [userInfo, dispatch, token]);

  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={ErrorPage}
        onReset={() => window.location.reload()}
      >
        <Routes>
          {routeList.map((route) => (
            <Route
              path={route.path}
              key={route.name}
              element={routeComponent(token, route.name)}
            />
          ))}
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default View;

import client from '../common/AxiosInstance';

export const loginAuth = async (id: string, pw: string) => {
  return await client.post('/login', { id: id, pw: pw });
};
export const fetchLogin = async (id: string, pw: string) => {
  return await client.post('/login', { id: id, pw: pw });
};

export const fetchSignup = async (userInfo: {
  id: string;
  nickname: string;
  pw: string;
}) => {
  return await client.post(`/signup/`, userInfo);
};

export const fetchIdDuplication = async (params: string) => {
  return await client.get(`/duplication/${params}`);
};

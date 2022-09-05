import { rest } from 'msw';
import users from './data/users.json';
import chart from './data/chart.json';
import { url } from '../service/common/AxiosInstance';

export const handlers = [
  rest.post(`${url}/login`, (req, res, ctx) => {
    const { id, pw } = req.body;
    try {
      const state = users.find((user) => user.id === id && user.pw === pw);
      return state
        ? res(ctx.status(200), ctx.json(state))
        : res(ctx.status(204));
    } catch (error) {
      return res(ctx.status(400));
    }
  }),

  rest.get(`${url}/login/:id`, (req, res, ctx) => {
    const { id } = req.params;

    try {
      const state = users.find((user) => user.id === id);
      return state ? res(ctx.status(204)) : res(ctx.status(200));
    } catch (error) {
      res(ctx.status(400));
    }
  }),
  rest.post(`${url}/signup`, (req, res, ctx) => {
    const { id, pw, nickname } = req.body;

    try {
      const maxUser = users.reduce((prev, current) =>
        prev.index > current.index ? prev : current
      );
      users.push({
        index: maxUser.index + 1,
        id: id,
        pw: pw,
        nickName: nickname,
      });
      return res(ctx.status(200));
    } catch (error) {
      res(ctx.status(400));
    }
  }),

  rest.get(`${url}/duplication/:id`, (req, res, ctx) => {
    const { id } = req.params;

    try {
      const duplication = !users.filter((user) => user.id === id).length;
      return duplication ? res(ctx.status(200)) : res(ctx.status(204));
    } catch (error) {
      res(ctx.status(400));
    }
  }),
  rest.get(`${url}/chart`, (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(chart));
    } catch (error) {
      return res(ctx.status(400));
    }
  }),
];

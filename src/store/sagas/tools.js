import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import ToolsActions from '../ducks/tools';

export function* getToolsRequest({ searchText, searchTagOnly }) {
  try {
    let endpoint = '/tools';

    if (searchText) {
      if (searchTagOnly) {
        endpoint = `${endpoint}?tags_like=${searchText}`;
      } else {
        endpoint = `${endpoint}?q=${searchText}`;
      }
    }

    const { data } = yield call(api.get, endpoint);

    yield put(ToolsActions.getToolsSuccess(data));
  } catch (error) {
    yield put(ToolsActions.getToolsFailure('Ocorreu um erro inexperado!'));
  }
}

export function* addToolRequest({
  title, link, description, tags,
}) {
  try {
    const { data } = yield call(api.post, '/tools', {
      title,
      link,
      description,
      tags,
    });
    yield put(ToolsActions.addToolSuccess(data));
  } catch (error) {
    yield put(ToolsActions.addToolFailure('Ocorreu um erro inexperado!'));
  }
}

export function* deleteToolRequest({ id }) {
  try {
    yield call(api.delete, `/tools/${id}`);
    yield put(ToolsActions.deleteToolSuccess(id));
  } catch (error) {
    yield put(ToolsActions.deleteToolFailure('Ocorreu um erro inexperado!'));
  }
}

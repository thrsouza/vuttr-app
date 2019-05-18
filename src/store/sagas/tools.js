/* eslint-disable no-console */

import { call, put } from 'redux-saga/effects';
import { NotificationError, NotificationSuccess } from '../../utils/notification';

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
    console.error(error);
    NotificationError('An unexpected error has occurred!');
    yield put(ToolsActions.getToolsFailure());
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
    NotificationSuccess('Tool registered successfully!');
  } catch (error) {
    console.error(error);
    NotificationError('An unexpected error has occurred!');
    yield put(ToolsActions.getToolsFailure());
  }
}

export function* deleteToolRequest({ id }) {
  try {
    yield call(api.delete, `/tools/${id}`);
    yield put(ToolsActions.deleteToolSuccess(id));
    NotificationSuccess('Tool removed successfully!');
  } catch (error) {
    console.error(error);
    NotificationError('An unexpected error has occurred!');
    yield put(ToolsActions.getToolsFailure());
  }
}

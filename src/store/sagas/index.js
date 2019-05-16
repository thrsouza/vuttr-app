import { all, takeLatest } from 'redux-saga/effects';

import { ToolsTypes } from '../ducks/tools';
import { getToolsRequest, deleteToolRequest } from './tools';

export default function* rootSaga() {
  yield all([
    takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getToolsRequest),
    takeLatest(ToolsTypes.DELETE_TOOL_REQUEST, deleteToolRequest),
  ]);
}

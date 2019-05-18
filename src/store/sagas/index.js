import { all, takeLatest } from 'redux-saga/effects';

import { ToolsTypes } from '../ducks/tools';
import { getToolsRequest, addToolRequest, deleteToolRequest } from './tools';

export default function* rootSaga() {
  yield all([
    takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getToolsRequest),
    takeLatest(ToolsTypes.ADD_TOOL_REQUEST, addToolRequest),
    takeLatest(ToolsTypes.DELETE_TOOL_REQUEST, deleteToolRequest),
  ]);
}

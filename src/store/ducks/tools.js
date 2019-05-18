import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getToolsRequest: ['searchText', 'searchTagOnly'],
  getToolsSuccess: ['data'],
  getToolsFailure: [],
  addToolRequest: ['title', 'link', 'description', 'tags'],
  addToolSuccess: ['data'],
  addToolFailure: [],
  deleteToolRequest: ['id'],
  deleteToolSuccess: ['id'],
  deleteToolFailure: [],
});

export const ToolsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: true,
  data: [],
});

/* Reducers */

const getToolsRequest = state => state.merge({
  ...state,
  loading: true,
});

const getToolsSuccess = (state, { data }) => state.merge({
  data,
  loading: false,
});

const getToolsFailure = state => state.merge({
  ...state,
  loading: false,
});

const addToolRequest = state => state.merge({
  ...state,
  loading: true,
});

const addToolSuccess = (state, { data }) => state.merge({
  loading: false,
  data: [...state.data, data],
});

const addToolFailure = state => state.merge({
  ...state,
  loading: false,
});

const deleteToolRequest = state => state.merge({
  ...state,
  loading: true,
});

const deleteToolSuccess = (state, { id }) => state.merge({
  loading: false,
  data: state.data.filter(p => p.id !== id),
});

const deleteToolFailure = state => state.merge({
  ...state,
  loading: false,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOOLS_REQUEST]: getToolsRequest,
  [Types.GET_TOOLS_SUCCESS]: getToolsSuccess,
  [Types.GET_TOOLS_FAILURE]: getToolsFailure,
  [Types.ADD_TOOL_REQUEST]: addToolRequest,
  [Types.ADD_TOOL_SUCCESS]: addToolSuccess,
  [Types.ADD_TOOL_FAILURE]: addToolFailure,
  [Types.DELETE_TOOL_FAILURE]: deleteToolFailure,
  [Types.DELETE_TOOL_SUCCESS]: deleteToolSuccess,
  [Types.DELETE_TOOL_REQUEST]: deleteToolRequest,
});

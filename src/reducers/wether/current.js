import { createSelector } from "reselect";

import { GET_WETHER_SUCCESS, GET_WETHER_REQUEST, GET_WETHER_FAIL } from "../../actionTypes";

import createLoadableReducer from "../../utils/createLoadableReducer";

export default createLoadableReducer({
    requestActionType : GET_WETHER_REQUEST,
    successActionType : GET_WETHER_SUCCESS,
    failureActionType : GET_WETHER_FAIL
});

const getRoot = (state) => state.wether.current;

const getWetherState = createSelector(getRoot, (state) => state.state);
const getWetherError = createSelector(getRoot, (state) => state.error);
const getWether = createSelector(getRoot, (state) => state.data || []);

export { getWetherState, getWetherError, getWether };

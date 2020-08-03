import { createAction } from "redux-actions";
import { GET_WETHER_SUCCESS, GET_WETHER_REQUEST, GET_WETHER_FAIL } from "../actionTypes";
import { wetherApi } from "../api";

export const getWetherRequest = createAction(GET_WETHER_SUCCESS);
export const getWetherSuccess = createAction(GET_WETHER_REQUEST);
export const getWetherFailure = createAction(GET_WETHER_FAIL);

export default function getWether({ lat = 35, lon = 139, city: q = "Kyiv" }) {
    return async (dispatch) => {
        const data = {
            lat,
            lon,
            q
        };

        dispatch(getWetherRequest(data));
        try {
            const res = await dispatch(wetherApi.getWether(data));

            dispatch(getWetherSuccess(res));

            return res;
        } catch (err) {
            dispatch(getWetherFailure(err));

            return null;
        }
    };
}

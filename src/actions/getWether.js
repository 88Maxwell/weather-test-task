import { createAction } from "redux-actions";
import { GET_WETHER_SUCCESS, GET_WETHER_REQUEST, GET_WETHER_FAIL } from "../actionTypes";

export const confirmDoorInstallationRequest = createAction(GET_WETHER_SUCCESS);
export const confirmDoorInstallationSuccess = createAction(GET_WETHER_REQUEST);
export const confirmDoorInstallationFailure = createAction(GET_WETHER_FAIL);


export default function confirmDoorInstallation() {
    return async (dispatch) => {
        dispatch(confirmDoorInstallationRequest());

        try {
            return null;
        } catch (err) {
            return err;
        }
    };
}

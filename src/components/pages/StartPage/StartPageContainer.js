import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StartPage from "./StartPage";

import { getWetherState, getWetherError, getWether } from "../../../reducers/wether/current";
import getWetherAction from "../../../actions/getWether";

const mapState = createStructuredSelector({
    wetherState : getWetherState,
    wetherError : getWetherError,
    wether      : getWether
});

const mapDispatch = (dispatch) => ({
    onGetWether : ({ lat, lon, city }) => dispatch(getWetherAction({ lat, lon, city }))
});

export default connect(mapState, mapDispatch)(StartPage);

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { push, goBack } from "connected-react-router";
import StartPage from "./StartPage";

import { getWetherState, getWetherError, getWether } from "../../../reducers/wether/current";
import getWetherAction from "../../../actions/getWether";

const mapState = createStructuredSelector({
    wetherState : getWetherState,
    wetherError : getWetherError,
    wether      : getWether
});

const mapDispatch = (dispatch) => ({
    onGetWether        : ({ lat, lon, city }) => dispatch(getWetherAction({ lat, lon, city })),
    onOpenWetherByCity : ({ city }) => dispatch(push(`/?city=${city}`)),
    onGoBack           : () => dispatch(goBack())
});

export default withRouter(connect(mapState, mapDispatch)(StartPage));

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { push, goBack } from "connected-react-router";
import WetherPage from "../../components/Wether/WetherPage";

import { getWetherState, getWetherError, getWether } from "../../reducers/wether/current";
import getWetherAction from "../../actions/getWether";

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

export default withRouter(connect(mapState, mapDispatch)(WetherPage));

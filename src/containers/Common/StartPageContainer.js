import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { push } from "connected-react-router";
import StartPage from "../../components/Common/StartPage";

import { getWetherState, getWetherError, getWether } from "../../reducers/wether/current";
import getWetherAction from "../../actions/getWether";

const mapState = createStructuredSelector({
    wetherState : getWetherState,
    wetherError : getWetherError,
    wether      : getWether
});

const mapDispatch = (dispatch) => ({
    onGetWether        : ({ lat, lon, city }) => dispatch(getWetherAction({ lat, lon, city })),
    onOpenWetherByCity : ({ city }) => dispatch(push(`/wether?city=${city}`))
});

export default withRouter(connect(mapState, mapDispatch)(StartPage));

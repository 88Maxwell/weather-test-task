import React from "react";
import PropTypes from "prop-types";

function LoaderHelper({
    data, state, LoadingComponent, ErrorComponent = null, DataComponent
}) {
    return (
        <>
            {data && state === "loaded" && DataComponent}
            {!data && state === "loading" && LoadingComponent}
            {state === "error" && ErrorComponent}
        </>
    );
}

LoaderHelper.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data             : PropTypes.any,
    state            : PropTypes.oneOf([ "error", "loaded", "loading" ]),
    LoadingComponent : PropTypes.node.isRequired,
    ErrorComponent   : PropTypes.node.isRequired,
    DataComponent    : PropTypes.node.isRequired
};


LoaderHelper.defaultProps = {
    data  : null,
    state : null
};

export default LoaderHelper;

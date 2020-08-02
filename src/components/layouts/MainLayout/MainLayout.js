import React from "react";
import PropTypes from "prop-types";

function Main({ children }) {
    return <div>{children}</div>;
}

Main.propTypes = {
    children : PropTypes.node.isRequired
};

export default Main;

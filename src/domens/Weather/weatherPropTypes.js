/* eslint-disable camelcase */
import PropTypes from "prop-types";

export default {
    coord : PropTypes.shape({
        lon : PropTypes.number,
        lat : PropTypes.number
    }),
    weather : PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(
            PropTypes.shape({
                id          : PropTypes.number,
                main        : PropTypes.string,
                description : PropTypes.string,
                icon        : PropTypes.string
            })
        )
    ]),
    base : PropTypes.string,
    main : PropTypes.shape({
        temp     : PropTypes.number,
        pressure : PropTypes.number,
        humidity : PropTypes.number,
        temp_min : PropTypes.number,
        temp_max : PropTypes.number
    }),
    visibility : PropTypes.number,
    wind       : PropTypes.shape({
        speed : PropTypes.number,
        deg   : PropTypes.number
    }),
    clouds : PropTypes.shape({
        all : PropTypes.number
    }),
    dt  : PropTypes.number,
    sys : PropTypes.shape({
        type    : PropTypes.number,
        id      : PropTypes.number,
        message : PropTypes.number,
        sunrise : PropTypes.number,
        sunset  : PropTypes.number,
        country : PropTypes.string
    }),
    id   : PropTypes.number,
    name : PropTypes.string,
    cod  : PropTypes.number
};

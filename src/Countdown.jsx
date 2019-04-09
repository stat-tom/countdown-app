import React from 'react';
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";

import "./Countdown.css";

const Countdown = props => {
    console.log(props.timeNow.hour);
    return (
        <div className="countdown">
            <strong>{props.name}</strong> - {props.hour}:{props.minute}
            <div className="countdown__icons">
                <i className="icon edit" onClick={() => props.onEditInit(props.id)} />
                <i className="icon times" onClick={() => props.onRemove(props.id)} />
            </div>
        </div>
    );
};

Countdown.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onEditInit: PropTypes.func,
    timeNow: PropTypes.shape({
        hour: PropTypes.number,
        minute: PropTypes.number,
        seconds: PropTypes.number,
    }),
    onRemove: PropTypes.func
};

export default Countdown;
import React, { Component } from 'react';
import "./Overlay.css";

class Overlay extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    render() {
        return (
            <div>
                <span>info</span>
            </div>
        )
    }
}

export default Overlay;
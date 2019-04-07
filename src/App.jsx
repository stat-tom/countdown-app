import React, { Component } from 'react';

import "./App.css";
import Countdown from "./Countdown";
import EditEvent from "./EditEvent";

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                { id: 0, name: "śniadanie", hour: "07", minute: "00" },
                { id: 1, name: "obiad", hour: "15", minute: "00" },
                { id: 2, name: "kolacja", hour: "19", minute: "00" },
            ],
            editedEvent: {
                id: 3,
                name: "",
                hour: "",
                minute: ""
            }
        };
        this.handleEditEvent = this.handleEditEvent.bind(this);
    }

    handleEditEvent(val) {
        this.setState(prevState => {
            return {
                editedEvent: Object.assign(prevState.editedEvent, val)
            };
        });
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id} name={el.name} hour={el.hour} minute={el.minute} />;
        })

        return (
            <div className="app">
                {events}
                <EditEvent onInputChange={val => this.handleEditEvent(val)} onSave={() => alert("A")} />
            </div> 
        );
    }
}

export default App;
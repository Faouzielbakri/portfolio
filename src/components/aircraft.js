import React, { Component } from 'react';
import aircraft from '../images/aircraft.png';
import './aircraft.css';

export default class Aircraft extends Component {
    render() {
        return(
            <div className="aircraftContainer">
                <img alt="aircraft" src={aircraft} className="aircraft shadow-sm" />
            </div>
        )
    }
}
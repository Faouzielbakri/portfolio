import React, { Component } from 'react';
import lambo from '../images/lambo.png';
import './car.css';

export default class Car extends Component {
    render() {
        return(
            <div className="carContainer">
                <img alt="lambo" src={lambo} className="car shadow-lg" style={{opacity: 0.75}} />
            </div>
        )
    }
}
import React, { Component } from 'react';
import './bonus.css';
import Music from '../components/music';


export default class Bonus extends Component {
    constructor(props) {
        super(props);
        this.state ={
            playing: this.props.playing
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }

    render() {
        return(
            <div>
                <div className="row justify-content-center mt-5">
                    <button className="btn-site pl-5 pr-5 textspaced btn-larger" id="MENU" onClick={this.handleClick}>
                        MENU
                    </button>
                    
                </div>

                <div className="row justify-content-center mt-3">
                    <Music togglePlaying={this.props.togglePlaying} playing={this.props.playing} />
                </div>

                {this.props.playing 
                ?   <div className="text-center textpink textspaced">
                        <h4>Song: "Midas Touch"</h4> 
                        <h4>Artist: Shammy</h4>
                    </div>
                : null }
            </div>
        )
    }
}

/*
var audio = new Audio(song)

<div className="text-center textyellow textspaced">
    <h5>Song: "Midas Touch"</h5> 
    <h5>Artist: "Shammy"</h5>
</div>

<button className="btn-site pl-5 pr-5 ml-3 textspaced btn-larger" onClick={ () => audio.play() }>
    MUSIC
</button>
*/
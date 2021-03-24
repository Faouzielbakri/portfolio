import React, { Component } from 'react';
import './avatar.css';
import avatar from '../images/avatar.jpg';


export default class Avatar extends Component {
    render() {
        return(
            <div className="avatar-container">
                <div className="row justify-content-center mt-0">
                    <img src={avatar} className="avatar" alt="avatar" />
                </div>
                <div className="socialicons d-flex justify-content-center justify-content-around pt-2">
                    <a href="https://github.com/faouzielbakri" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-github"></span></a>
                    <a href="mailto:faouzielbakri@gmail.com" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-mail_outline"></span></a>
                    <a href="https://www.linkedin.com/in/Faouzielbakri/" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-linkedin-square"></span></a>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import pic from './jpic.png'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className="row">
                <img src={pic} alt="" className="left" />
                
                <div className="right">
                    <h1 className="hello">Hi I'm Jon!</h1>
                    <p>I'm a software developer currently interning at <a href="https://www.thetradedesk.com/us">The Trade Desk</a>. As well as that I am currently a Senior at the Colorado School of Mines majoring in Computer Science.</p>
                    <br/>
                    <p>My interests are in backend development and game development. I spent the first half of 2021 as a full-stack intern with Ultrasend and I would love to further my experience in backend technologies. As for game development I have been making games since high school for school projects or for game james. Check out the projects page for more information on some of the work I've done.</p>
                    <br/>
                    <p>I am honored to have received many awards and scholarships for my schooling (<a href="https://paths.mines.edu/">PATHS Scholar</a>, <a href="http://mapp.mines.edu/">Salesforce C-MAPP Scholar</a>, and Colorado Scholar). </p>
                                    
                </div>
            </div>
        )
    }
}
import React from "react";
import GreenSciDotForm from './GreenSciDotForm'

import '../../../../App.css'
import Green from '../../../../Images/green.png';

class GreenSciDot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style : {
                width : 0
            }
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.closeNav);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.closeNav);
    }

    openNav() {
        const style = { width : 500 };
        this.setState({ style });
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
        document.body.style.backgroundColor = "#F3F3F3";
    }

    render() {
        return (
          <div>
            <img src={Green} className="colorbutton" alt="green little orb" onClick={this.openNav} style={{cursor:"pointer"}}/>
            <div
                ref       = "snav"
                className = "overlay"
                style     = {this.state.style}
            >
                <div className = "sidenav-container">
                    {/* <div className = "text-center">
                      <h2>Form</h2>
                      <p>This is a sample input form</p>
                    </div> */}
                    <button
                        className = "closebtn"
                        onClick   = {this.closeNav}
                    >
                        ×
                    </button>
                  <div className = "list-group">
                      <GreenSciDotForm closeNav={this.closeNav}/>
                  </div>
                </div>
            </div>
          </div>
        );
    }
}

export default GreenSciDot;
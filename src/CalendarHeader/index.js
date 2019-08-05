import React, { Component } from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default class CalendarHeader extends Component {
  state = {
    
  };

  render() {
    return (
        <div className="CalendarHeader">
                <i className="fas fa-arrow-left"></i>
                <span> December 2017 </span>
                <i className="fas fa-arrow-right"></i>
        </div>
    );
  }
}

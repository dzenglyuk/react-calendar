import React, { Component } from "react";
import "./index.css";

export default class CalendarBody extends Component {
  state = {
    
  };

  render() {
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    let days = []
    
    dayNames.map(day => days = [...days, <div> {day} </div>]);

    for (let i = 1; i < 36; i++) {
      days = [...days, <div> {i} </div>];
    }
    return (
        <div className="CalendarBody">
            <div className="grid-container">
              {days}
            </div>
        </div>
    );
  }
}

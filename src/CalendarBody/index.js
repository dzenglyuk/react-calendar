import React, { Component } from "react";
import "./index.css";

export default class CalendarBody extends Component {
  state = {
    
  };

  render() {
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    let days = []
    
    dayNames.map(day => days = [...days, <div> {day} </div>]);

    let counter = 1;
    for (let i = 1; i < 36; i++) {
      if (counter === 6 || counter === 7) {
        days = [...days, <div className="weekend"> {i} </div>];
        if (counter === 7) {
          counter = 0;
        }
      } else {
        days = [...days, <div> {i} </div>];
      }
      counter++;
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

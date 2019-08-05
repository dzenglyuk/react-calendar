import React, { Component } from "react";
import "./index.css";
import CalendarHeader from '../CalendarHeader';
import CalendarBody from '../CalendarBody';

export default class Calendar extends Component {
  state = {
    
  };

  render() {
    return (
        <div className="Calendar">
            <CalendarHeader/>
            <CalendarBody/>
        </div>
    );
  }
}

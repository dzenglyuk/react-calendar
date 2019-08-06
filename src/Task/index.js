import React, { Component } from "react";
import "./index.css";

export default class Task extends Component {
  data = this.props.notification;
  parseDate = dates => {  
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return {
        day: days[dates[0].getDay()],
        dates: dates.length === 1 ? dates[0].getDate() + ' ' + months[dates[0].getMonth()] : dates[0].getDate() + ' ' + months[dates[0].getMonth()] + ' to ' + dates[1].getDate() + ' ' + months[dates[1].getMonth()],
        time: dates[0].toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    };
  }
  date = this.parseDate(this.data.dates);
  task = 
    <div className={"Task " + this.data.color}>
        <div className="task-header">
            <span> {this.date.day} - {this.date.dates} </span>
            <span> {this.date.time} </span>
        </div>
        <div className="task-body">
            <span> {this.data.title} </span>
            <span> {this.data.details} </span>
        </div>
    </div>
  render() {
    return (
        this.task
    );
  }
}

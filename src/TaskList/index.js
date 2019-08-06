import React, { Component } from "react";
import "./index.css";
import Task from "../Task";


export default class TaskList extends Component {
  state = {
    
  };

  notifications = this.props.notifications.map(notification => <Task notification={notification}/>);

  render() {
    return (
        <div className="TaskList">
          {this.notifications}
        </div>
    );
  }
}

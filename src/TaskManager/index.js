import React, { Component } from "react";
import "./index.css";
import TaskHeader from "../TaskHeader";
import Tasks from "../Tasks";


export default class TaskManager extends Component {
  state = {
    
  };

  render() {
    return (
        <div className="TaskManager">
          <TaskHeader/>
          <Tasks/>
        </div>
    );
  }
}

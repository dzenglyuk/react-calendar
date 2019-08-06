import React, { Component } from "react";
import "./index.css";
import TaskHeader from "../TaskHeader";
import TaskList from "../TaskList";
// import TaskCreator from "../TaskCreator";


export default class TaskManager extends Component {
  state = {
    
  };

  array = [
    {
      dates: [new Date()],
      title: 'Meeting with designers',
      details: 'Design updates (revision 3)',
      color: 'green' 
    },
    {
      dates: [new Date('2019-08-09T09:00:00Z'), new Date('2019-08-10')],
      title: 'Short trip to Bangkok',
      details: 'Bring passport',
      color: 'red' 
    },
    {
      dates: [new Date('2019-08-19T08:00:00Z'), new Date('2019-08-21')],
      title: 'Short trip to Bangkok',
      details: 'Bring passport',
      color: 'blue'
    }
  ];

  render() {
    return (
        <div className="TaskManager">
          <TaskHeader/>
          <TaskList notifications={this.array}/>
          {/* {window.innerHeight >= 600 ? <TaskCreator/> : null} */}
        </div>
    );
  }
}

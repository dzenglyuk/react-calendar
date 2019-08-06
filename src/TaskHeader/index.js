import React, { Component } from "react";
import "./index.css";


export default class TaskHeader extends Component {
    state = {
        selected: 'today'
    };
    isActive = val => {
        return val === this.state.selected ? 'active' : null;
    };
    setFilter = val => {
        return this.setState({selected: val})
    }

  render() {
    return (
        <div className="TaskHeader">
          <span> Your events </span>
          <div className="navbar"> 
            <ul>
                <li className={this.isActive('today')} onClick={this.setFilter.bind(this, 'today')}> Today </li>
                <li className={this.isActive('week')} onClick={this.setFilter.bind(this, 'week')}> Week </li>
                <li className={this.isActive('month')} onClick={this.setFilter.bind(this, 'month')}> Month </li>
            </ul>
          </div>
        </div>
    );
  }
}

import React, { Component } from "react";
import "./index.css";
import TaskCreator from "../TaskCreator";


export default class Header extends Component {
  state = {
    showMenu: false
  };

  openMenu = () => {
      this.setState({showMenu: true}, () => {
        document.addEventListener('click', this.closeMenu);
      });
  }

  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }    
    }
  render() {
    return (
        <div className="Header">
            <span className="header-name"> Event calendar </span>
            <div className="menu">
                <TaskCreator/>
                <img onClick={this.openMenu} src={require('./avatar50x50.png')} alt="Avatar"/>
                {this.state.showMenu ? (
                <div className="menu-content" ref={el => this.dropdownMenu = el}>
                    menu
                </div> ) : (null) }
            </div>
      </div>
    );
  }
}

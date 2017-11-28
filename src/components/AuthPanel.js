import React, { Component } from 'react';
import {Icon} from 'react-fa';
import {NavLink} from 'react-router-dom';

class AuthPanel extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.isLoggedin != nextProps.isLoggedIn ){
      console.log('should update');
      this.forceUpdate();
      return true;
    }
    return false;
  }
  render() {
    if (this.props.isLoggedIn==true) {
      return(
        <div className='navbar-end'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>
                <span className="icon">
                    <Icon name="user"/>
                </span>
                {this.props.username}
              </a>
              <div className='navbar-dropdown is-boxed'>
                <NavLink className='navbar-item' to={`/users/${this.props.uid}`} activeClassName='is-active'>
                  <div className='navbar-content'>

                    Profile
                  </div>
                </NavLink>
                <a className='navbar-item' onClick={this.props.onLogOut}>
                  <div className='navbar-content'><button className='button is-danger'>Logout</button></div>
                </a>
              </div>
            </div>
        </div>
      )
    } else {
      return (
      <div className='navbar-end'>
        <a className="navbar-item " onClick={this.props.onSignIn}>Sign In</a>
      </div>
      )
    }
  }
}

export default AuthPanel;
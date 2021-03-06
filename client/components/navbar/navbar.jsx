import React from 'react';
import './navbar.css';
import LoginBttn from '../loginbttn/loginbttn.jsx';

export default class NavBar extends React.Component {
  render() {
    let routes = [
      { path: "/"},
      { path: "/about"},
      { path: "/testing"}
    ];
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
          <div className='navbar-header'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href={routes[0].path}>Fuse</a>
          </div>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href={routes[1].path}>about <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href={routes[2].path}>Testing</a>
              </li>
            </ul>
          </div>
          <LoginBttn/>
        </nav>
      </div>
    );
  }
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Tooltip } from './Tooltip.js';
import Tip from 'grommet/components/Tip';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'
//import 'grommet/scss/vanilla/index';
class App extends Component {
  onHover=() => {
    this.setState({hover:!this.state.hover});
  }
  state={
    hover:false
  }
  render() {
    //const tooltip=<Tooltip message="this is a hover message" />;
    const tooltip = (
      <Tooltip id="tooltip" >
        <strong>Holy guacamole!</strong> Check this info.
        <div style={{ padding:"10px"}}>Hellow World</div>
      </Tooltip>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <h1 className="App-title" data-tip='' data-for='test' onMouseOver={this.onHover} onMouseOut={this.onHover} style={{cursor:'pointer'}}>Welcome to React</h1>
          { this.state.hover && <Tooltip placement="right" className="in" id="tooltip-right">Hellow World</Tooltip> }
          { this.state.error && <Tip target='App-title'>
              Available actions
              </Tip>}
          </div>
        </header>
        <ReactTooltip  id='test' >
          <p>This is a global react component tooltip</p>
          <p>You can put every thing here</p>
          <ul>
            <li>Word</li>
            <li>Chart</li>
            <li>Else</li>
          </ul>
          </ReactTooltip>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tooltip placement="right" className="in" id="tooltip-right"><div style={{ padding:"10px"}}>Hellow World</div></Tooltip>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Tooltip } from './Tooltip.js';
import Tip from 'grommet/components/Tip';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import {
  Tooltip as ReactTippy
} from 'react-tippy';

import 'react-tippy/dist/tippy.css';
import { PortalProvider } from 'react-portals';

class App extends Component {
  onHover=(el) => {
    console.log(el);
    this.setState({hover:!this.state.hover , el});
  }
  state={
    hover:false,
    el:'dummy'
  }
  render() {
    //const tooltip=<Tooltip message="this is a hover message" />;
    const tooltip = (
      <Tooltip id="tooltip" >
        <strong>Holy guacamole!</strong> Check this info.
        <div style={{ padding:"10px"}}>Hellow World</div>
      </Tooltip>
    );
    let colorClass='critical';
    if(this.state.el=='custom1') {
      colorClass='ok';
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <h1 className="App-title" data-tip='' data-for='custom1' onMouseOver={this.onHover.bind(this,'custom1')} onMouseOut={this.onHover.bind(this,'dummy')} style={{cursor:'pointer'}}>Welcome to React</h1>
          <h1 className="App-title1" data-tip='' data-for='custom2' onMouseOver={this.onHover.bind(this,'custom2')} onMouseOut={this.onHover.bind(this, 'dummy')} style={{cursor:'pointer'}}>Welcome to Angular</h1>
          { this.state.hover && <Tooltip placement="right" className="in" id="tooltip-right">Hellow World</Tooltip> }
          { this.state.error && <Tip target='App-title'>
              Available actions
              </Tip>}
          </div>
        </header>

        <div className={colorClass}>
          <ReactTooltip  className="custom1" place="right" id="custom1" >
            <p>This is a global react component tooltip</p>
            <p>You can put every thing here</p>
            <ul>
              <li>Word</li>
              <li>Chart</li>
              <li>Else</li>
            </ul>
          </ReactTooltip>
          <ReactTooltip  id="custom2" >
            <p>This is a global react component tooltip</p>
            <p>You can put every thing here</p>
            <ul>
              <li>Word</li>
              <li>Chart</li>
              <li>Else</li>
            </ul>
          </ReactTooltip>
        </div>
        <Tooltip placement="right" className="in" id="tooltip-right"><div style={{ padding:"10px"}}>Hellow World</div></Tooltip>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>

        <div
          className="col-xs-7 col-sm-4 col-md-4 col-lg-4"
        >
          Hello World
        </div>

        
 
<ReactTippy
  html={<h1 style={{ border:"1px solid black"}}>Welcome to react</h1>}
  className="criticalColor"
  theme="light"
  style={{ backgroundColor:"yellow"}}
  followCursor
  trigger="mouseenter"
>
  <div style={{ height: "50px" }} className="col-xs-7 col-sm-4 col-md-4 col-lg-5">
    Click here to show popup using react-tippy package
  </div>
</ReactTippy>

<ReactTippy
  theme="light"
  className="okColor"
  // options
  //title="Welcome to React"
  html={<h1>Welcome to react</h1>}
  followCursor
  trigger="mouseenter"
>
  <div style={{ height: "50px" }} className="col-xs-7 col-sm-4 col-md-4 col-lg-6">
    Click here to show popup using react-tippy package
  </div>
</ReactTippy>
<PortalProvider>
        <h1>Render your app content here!</h1>
      </PortalProvider>
      </div>
    );
  }
}

export default App;

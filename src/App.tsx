import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Store from './Store';
import { IProps } from './index';
import Navibar from './Components/NaviBar/Navibar';

class App extends React.Component<IProps> {
  render() {
    return (
      <div className="App">
        <Topbar></Topbar>
        <Navibar></Navibar>
      </div>
    );
  }
}

export default App;

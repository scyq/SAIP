import React from 'react';
import './App.css';
import Topbar from '../../Components/Topbar/Topbar';
import Store from '../../Store';
import Navibar from '../../Components/Navibar/Navibar';
import { Provider } from 'mobx-react';

class App extends React.Component {
  render() {
    return (
      <Provider Store={new Store()}>
        <div className="App">
          <Topbar></Topbar>
          <Navibar></Navibar>
        </div>
      </Provider>
    );
  }
}

export default App;

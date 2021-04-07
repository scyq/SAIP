import React from 'react';
import './App.css';
import Topbar from '../../Components/Topbar/Topbar';
import Navibar from '../../Components/Navibar/Navibar';
import { observer, Provider } from 'mobx-react';
import StepController from '../../Components/StepController/StepController';

@observer
class App extends React.Component {
  render() {
    return (
      <Provider {...this.props}>
        <div className="App">
          <Topbar></Topbar>
          <Navibar></Navibar>
          <StepController></StepController>
        </div>
      </Provider>
    );
  }
}

export default App;

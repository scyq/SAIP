import React from 'react';
import './App.css';
import Topbar from '../../Components/Topbar/Topbar';
import Navibar from '../../Components/Navibar/Navibar';
import { observer, Provider } from 'mobx-react';
import StepController from '../../Components/StepController/StepController';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';
import Generation from '../Generation/Generation';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

@observer
class App extends React.Component {
  render() {
    let show = null;
    if (this.props.store.state === 0) {
      show = (
        <div className="App">
          <Backdrop className="mask" open={this.props.store.isAnalysizing} >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Topbar></Topbar>
          <Navibar></Navibar>
          <SearchPanel></SearchPanel>
          <StepController></StepController>
        </div>
      );
    } else if (this.props.store.state === 1) {
      show = <Generation></Generation>;
    }
    return (
      <Provider {...this.props}>
        {show}
      </Provider>
    )
  }
}

export default App;

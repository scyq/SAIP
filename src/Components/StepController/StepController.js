import './StepController.css';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReplayIcon from '@material-ui/icons/Replay';

@inject('store')
@observer
class StepController extends React.Component {
    render() {
        const { store } = this.props;

        if (store.activeStep < store.steps.length - 1) {
            return (
                <div className="buttonPos">
                    <Button
                        disabled={store.activeStep === 0}
                        onClick={() => store.changeActiveStep("--")}
                        className="button"
                        size="large"
                        startIcon={<ArrowBackIosIcon />}
                    >
                        Back
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => store.changeActiveStep("++")}
                        className="button"
                        size="large"
                        endIcon={<ArrowForwardIosIcon />}
                    >
                        {store.activeStep === store.steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            );
        } else {
            return (
                <div className="buttonPos">
                    <Button
                        onClick={store.resetActiveStep}
                        className="button"
                        size="large"
                        startIcon={<ReplayIcon />}
                    >
                        重新选择
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className="button"
                        onClick={() => { }}
                        size="large"
                        endIcon={<PlayArrowIcon />}
                    >
                        查看效果
                    </Button>
                </div>
            );
        }
    }
}

export default StepController;
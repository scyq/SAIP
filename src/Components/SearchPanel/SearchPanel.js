import { inject, observer } from 'mobx-react';
import React from 'react';
import TextField from '@material-ui/core/TextField'
import saip from '../../assets/saip_row.png';
import arrow from '../../assets/arrow.png';
import "./SearchPanel.css";
import Recommendation from '../Recommendation/Recommendation';
import ConfigTable from '../ConfigTable/ConfigTable';


@inject('store')
@observer
class SearchPanel extends React.Component {
    render() {
        const { store } = this.props;
        switch (store.activeStep) {
            case 0:
                return (
                    <div className="flex-col-center">
                        <img
                            src={saip}
                            alt="SAIP"
                        >
                        </img>

                        <TextField
                            className="form"
                            value={store.functionalRequirements}
                            variant="outlined"
                            margin="normal"
                            required
                            id="funcInput"
                            label='Try "for news and newspaper"'
                            name="funcInput"
                            autoComplete="funcInput"
                            autoFocus
                            onChange={event => { store.changeFunctionalRequirement(event.target.value) }}
                        />

                        <span>
                            <img
                                src={arrow}
                                alt="null"
                                className="arrow"
                            >
                            </img>
                            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                                Please enter your application scenario.
                            </span>
                        </span>
                    </div >
                );
            case 1:
                return (
                    <div className="flex-col-center">
                        <img
                            src={saip}
                            alt="SAIP"
                        >
                        </img>

                        <TextField
                            className="form"
                            value={store.styleRequiremnets}
                            variant="outlined"
                            margin="normal"
                            required
                            id="colorInput"
                            label='Try "lovely and cute style"'
                            name="colorInput"
                            autoComplete="colorInput"
                            autoFocus
                            onChange={event => { store.changeStyleRequirement(event.target.value) }}
                        />

                        <span>
                            <img
                                src={arrow}
                                alt="null"
                                className="arrow"
                            >
                            </img>

                            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                                Please enter the styles you want.
                        </span>
                        </span>

                    </div>
                );
            case 2:
                return <Recommendation></Recommendation>;
            case 3:
                return <ConfigTable></ConfigTable>;
            default:
                return <div></div>;
        }
    };
}

export default SearchPanel;
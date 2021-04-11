import { inject, observer } from 'mobx-react';
import React from 'react';
import TextField from '@material-ui/core/TextField'
import saip from '../../assets/saip_row.png';
import arrow from '../../assets/arrow.png';
import "./SearchPanel.css";


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
                        <form noValidate className="form">
                            <TextField
                                value={''}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="funcInput"
                                label='试试输入 "我想要一个记录生活的个人博客"'
                                name="funcInput"
                                autoComplete="funcInput"
                                autoFocus
                                onChange={() => { }}
                            />
                        </form>
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
                    </div>
                );
            case 1:
                return (
                    <div className="flex-col-center">
                        <img
                            src={saip}
                            alt="SAIP"
                        >
                        </img>
                        <form noValidate className="form">
                            <TextField
                                value={''}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="colorInput"
                                label='试试输入 "我喜欢活泼生动的画风"'
                                name="colorInput"
                                autoComplete="colorInput"
                                autoFocus
                                onChange={() => { }}
                            />
                        </form>
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
                return <div></div>;
            default:
                return <div></div>;
        }
    };
}

export default SearchPanel;
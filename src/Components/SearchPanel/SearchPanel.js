import { inject, observer } from 'mobx-react';
import React from 'react';
import TextField from '@material-ui/core/TextField'
import saip from '../../assets/saip_row.png';
import arrow from '../../assets/arrow.png';


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
                            className="logo"
                            alt="SIPAG"
                        >
                        </img>
                        <form noValidate>
                            <TextField
                                value={() => { }}
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
                            <span className="input-hint">
                                请输入您软件的应用场景
                            </span>
                        </span>
                    </div>
                );
            default:
                return <div></div>
        }
    };
}

export default SearchPanel;
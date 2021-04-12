import { inject, observer } from 'mobx-react';
import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import "./Recommendation.css";
import { getLayoutName } from '../../Layout';
import ColorSelection from '../ColorSelection/ColorSelection';


@inject('store')
@observer
class Recommendation extends React.Component {

    constructor() {
        super();
        this.state = {
            openColorSetting: false,
            currentSettingColor: undefined
        }
    }

    render() {
        const { store } = this.props;

        const layoutImgs = store.recommendLayout.map(ele => {
            return (
                <div className="flex-row" key={ele.key}>
                    {store.chosenLayout === ele.layoutIndex && <CheckIcon fontSize="large" color="primary" />}
                    <img src={ele.key} className="layoutImg" alt={ele.key} onClick={() => {
                        store.setChosenLayout(ele.layoutIndex);
                    }}></img>
                    <div className="flex-col">
                        <div>
                            <span style={{ fontWeight: "bold" }}>From: </span>
                            {ele.origin.join(',')}
                        </div>
                        <view style={{ fontWeight: "bold" }}>{getLayoutName(ele.layoutIndex)}</view>
                    </div>
                </div>
            );
        });


        const colorBlock = store.recommendStyle.map(ele => {
            return (
                <div className="flex-row" key={ele.key} >
                    {store.chosenPrimaryColor === ele.key && <CheckIcon fontSize="large" color="primary" />}
                    {store.chosenSecondaryColor === ele.key && <CheckIcon fontSize="large" color="secondary" />}
                    <div className="colorBlock" style={{ background: ele.key }} onClick={() => {
                        this.setState({
                            openColorSetting: true,
                            currentSettingColor: ele.key
                        })
                    }}></div >
                    <div className="flex-col">
                        <div>
                            <span style={{ fontWeight: "bold" }}>From: </span>
                            {ele.origin}
                        </div>
                        <div>
                            {ele.key}
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="root" >

                <div className="column">
                    {layoutImgs}
                </div>

                {this.state.openColorSetting &&
                    <ColorSelection
                        color={this.state.currentSettingColor}
                        close={() => { this.setState({ openColorSetting: false }); }}
                    >
                    </ColorSelection>}

                <div className="column">
                    {colorBlock}
                </div>

            </div >
        );
    }
}


export default Recommendation;
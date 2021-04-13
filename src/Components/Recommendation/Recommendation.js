import { inject, observer } from 'mobx-react';
import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import "./Recommendation.css";
import { getLayoutName } from '../../Layout';
import ColorSelection from '../ColorSelection/ColorSelection';
const ColorScheme = require('color-scheme');


function hex2Hue(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    if (r >= g && g >= b) {
        return 60 * (g - b) / (r - b);
    } else if (g > r && r >= b) {
        return 60 * (2 - (r - b) / (g - b));
    } else if (g >= b && b > r) {
        return 60 * (2 + (b - r) / (g - r));
    } else if (b > g && g > r) {
        return 60 * (4 - (g - r) / (b - r));
    } else if (b > r && r >= g) {
        return 60 * (4 + (r - g) / (b - g));
    } else if (r >= b && b > g) {
        return 60 * (6 - (b - g) / (r - g));
    } else {
        return Math.abs(Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b));
    }
}

export function recommendColor(hex) {
    //recommend color
    let res = [];
    let recommender = new ColorScheme();
    let hue = hex2Hue(hex);
    recommender.from_hue(hue)
        .scheme('tetrade')
        .add_complement(false)
        .variation('light')
        .web_safe(true);

    let colors = recommender.colors();

    res.push(colors[0]);

    recommender.from_hue(hue)
        .scheme('contrast')
        .add_complement(false)
        .variation('default')
        .web_safe(true);

    colors = recommender.colors();

    res.push(colors[0]);

    return res;
}

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
            <div className="recommendation" >

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
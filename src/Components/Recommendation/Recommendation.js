import { inject, observer } from 'mobx-react';
import React from 'react';
import "./Recommendation.css";


@inject('store')
@observer
class Recommendation extends React.Component {
    render() {
        const { store } = this.props;

        const layoutImgs = store.recommendLayout.map(ele => {
            console.log(ele)
            return (
                <div className="flex-row">
                    <img src={ele.key} className="layoutImg" alt={ele.key} key={ele.key}></img>
                    <div>
                        <span style={{ fontWeight: "bold" }}>From: </span>
                        {ele.origin.join(',')}
                    </div>
                </div>
            );
        });


        const colorBlock = store.recommendStyle.map(ele => {
            return (
                <div className="flex-row">
                    <div className="colorBlock" style={{ background: ele.key }} key={ele.key}></div >
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


                <div className="column">
                    {colorBlock}
                </div>

            </div>
        );
    }
}


export default Recommendation;
import { inject, observer } from 'mobx-react';
import React from 'react';
import { getLayoutImage } from '../../Layout';
import "./Recommendation.css";


@inject('store')
@observer
class Recommendation extends React.Component {
    render() {
        const { store } = this.props;

        const layoutImgs = store.recommendLayout.map(ele => {
            return getLayoutImage(ele);
        }).map(img => {
            console.log(img);
            return <img src={img} className="layoutImg" alt={img} key={img}></img>
        });


        const colorBlock = store.recommendStyle.map(ele => {
            return (
                <div className="flex-row">
                    <div className="colorBlock" style={{ background: ele }} key={ele}></div >
                    <div className="flex-col">
                        <div>{ele}</div>
                    </div>
                </div>
            )



        })

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
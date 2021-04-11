import { inject, observer } from 'mobx-react';
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { generateDOM, layoutParser } from '../../Layout';
import './Generation.css';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

@inject("store")
@observer
class Generation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        this.setState({
            mounted: true
        });
    }

    render() {
        const { store } = this.props;
        const layoutsArray = layoutParser(store.targetLayout);
        const layoutsObject = {
            lg: layoutsArray
        }
        const generation = generateDOM(layoutsArray);
        return (
            <ResponsiveReactGridLayout
                className="generation"
                layouts={layoutsObject}
                rowHeight={1}
                width={window.innerWidth}
                measureBeforeMount={false}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                useCSSTransforms={this.state.mounted}
            >
                {generation}
            </ResponsiveReactGridLayout>
        )
    }
}

export default Generation;
import { inject, observer } from 'mobx-react';
import React from 'react';
import GridLayout from 'react-grid-layout';
import { getGeneratedLayout, layoutParser } from '../../Layout';
import './Generation.css';


@inject("store")
@observer
class Generation extends React.Component {
    render() {
        const { store } = this.props;
        const layout = layoutParser(store.targetLayout);
        const generation = getGeneratedLayout(layout);
        return (
            <GridLayout className="generation" layout={layout} cols={12} rowHeight={10} width={window.innerWidth}>
                {generation}
            </GridLayout>
        )
    }
}

export default Generation;
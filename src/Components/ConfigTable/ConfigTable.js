import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import ColorizeIcon from '@material-ui/icons/Colorize';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
import "./ConfigTable.css";
import { inject, observer } from 'mobx-react';
import { getLayoutName } from '../../Layout';


@inject("store")
@observer
class ConfigTable extends React.Component {

    render() {
        const { store } = this.props;
        return (
            <div className="config-table">
                <Divider></Divider>
                <List>
                    <ListItem button key={'layout'}>
                        <ListItemIcon>
                            <BorderAllIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Layout'}>
                        </ListItemText>
                        <Box>
                            {getLayoutName(store.chosenLayout)}
                        </Box>
                    </ListItem>

                    <Divider></Divider>

                    <ListItem button key={'colorPrimary'} >
                        <ListItemIcon>
                            <ColorizeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Primary Color'}>
                        </ListItemText>
                        <Box bgcolor={store.chosenPrimaryColor} p={2} m={1}>
                        </Box>
                    </ListItem>

                    <Divider></Divider>

                    <ListItem button key={'colorSecondary'}>
                        <ListItemIcon>
                            <ColorizeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Secondary Color'}>
                        </ListItemText>
                        <Box bgcolor={store.chosenSecondaryColor} p={2} m={1}>
                        </Box>
                    </ListItem>

                    <Divider></Divider>

                </List>
            </div >
        );
    }

}

export default ConfigTable;
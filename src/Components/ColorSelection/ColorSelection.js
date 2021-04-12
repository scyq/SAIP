import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { inject, observer } from 'mobx-react';


@inject("store")
@observer
class ColorSelection extends React.Component {
    render() {

        const { store } = this.props;

        return (
            <Dialog
                aria-labelledby="simple-dialog-title"
                open={true}
                style={{
                    backgroundColor: "transparent",
                    boxShadow: 'none'
                }}
                onClose={this.props.close}
            >
                <DialogTitle id="simple-dialog-title">Color Setting</DialogTitle>
                <List>
                    <ListItem autoFocus button onClick={() => {
                        store.setPrimaryColor(this.props.color);
                        this.props.close();
                    }}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: "white" }}>
                                <BorderColorIcon color="primary" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Set as Primary Color" />
                    </ListItem>
                    <ListItem autoFocus button onClick={() => {
                        store.setSecondaryColor(this.props.color);
                        this.props.close();
                    }}>
                        <ListItemAvatar>
                            <Avatar style={{ backgroundColor: "white" }}>
                                <BorderColorIcon color="secondary" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Set as Secondary Color" />
                    </ListItem>
                </List>
            </Dialog>
        );
    }
}

export default ColorSelection;
import { Fab } from '@material-ui/core';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Draggable from 'react-draggable';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import "./Draggable.css";
import { inject, observer } from 'mobx-react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas'

@inject("store")
@observer
class DraggableList extends React.Component {

    constructor() {
        super();
        this.state = {
            anchor: null
        }
    }

    savePrototype() {
        let blob = new Blob([document.documentElement.outerHTML], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "prototype code.html");
        const generation = document.getElementById("generationCanvas");
        html2canvas(generation).then(function (canvas) {
            canvas.setAttribute("id", "exportCanvas");
            generation.appendChild(canvas);
        }).then(() => {
            document.getElementById("exportCanvas").toBlob(function (blob) {
                saveAs(blob, "prototype.png");
            });
        });
    }

    render() {

        const { store } = this.props;

        return (
            <Draggable>
                <div id="toRemove" className="DraggableList" >
                    <Menu
                        id="simple-menu"
                        keepMounted
                        open={Boolean(this.state.anchor)}
                        anchorEl={this.state.anchor}
                        onClose={() => {
                            this.setState({
                                anchor: null
                            });
                        }}
                    >
                        <MenuItem onClick={this.savePrototype}><SaveIcon></SaveIcon> Save Prototype</MenuItem>
                        <MenuItem onClick={() => store.allRestart()}><ReplayIcon></ReplayIcon> Restart</MenuItem>
                    </Menu>
                    <Fab color="primary" onClick={e => {
                        this.setState({
                            anchor: e.currentTarget
                        })
                    }}>
                        <UpIcon></UpIcon>
                    </Fab>
                </div>
            </Draggable >
        );
    }
}

export default DraggableList;
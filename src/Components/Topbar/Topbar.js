import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './Topbar.css';

export default function Topbar() {
    return (
        <AppBar position="static" className="root">
            <Toolbar>
                <Typography variant="h6" className="title">
                    A Prototype Tool for Semi-Automatic User Interface Prototyping
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
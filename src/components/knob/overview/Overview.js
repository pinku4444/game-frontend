import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import './overview.scss';

const Overview = (props) => {
    return (
        <Grid container >
            <Grid item xs={4} md={1} ></Grid>
            <Grid item xs={6} md={3} >
                <div className="statitics">
                    <div className="Score">
                        {props.score}
                    </div>
                    <div className="Score-Card">
                        {57.3}
                    </div>
                    <div className="Score-Text">
                        <h4>Profit on win</h4>
                    </div>
                    <Divider className="Divider"  />
                    <div className="Score-Text">
                        <h4>0.12345678</h4>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2} md={8} ></Grid>
        </Grid>

    );
};

export default Overview;
import React, { Fragment } from 'react';
import './usersection.scss';
import Avatar from '@material-ui/core/Avatar';
import profile from '../../../assests/image/profile.jpg';
import { Grid } from '@material-ui/core';

const UserSection = () => {
    return (
        <div className="UserSection">
            <Grid container>
                <Grid item xs={8}>
                    <p className="UserName">Hane-Alexa</p>
                </Grid>
                <Grid item xs={4}>
                    <Avatar className="Avatar" alt="Remy Sharp" src={profile} />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserSection;
import React from 'react';
import './header.scss';
import Grid from '@material-ui/core/Grid';
import Logo from './logo';
import UserSection from './userSection';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className="Header">
                    <Grid container>
                        <Grid item xs={2} md={4}>
                            <Logo />
                        </Grid>
                        <Grid item xs={4} md={5}>
                        <Button className="Button" variant="contained" color="secondary" >
                            BONUSES
                        </Button>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className="userSection">
                                <UserSection />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
};

export default Header;
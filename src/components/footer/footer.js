import React from 'react';
import './footer.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Flag from '../../icons/uk.svg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Image from '../../icons/download.png';
import { InputAdornment, TextField } from '@material-ui/core';
import Bitcoin from '../../icons/Bitcoin.png';

const Footer = (props) => {
    return (
        <div className="footer">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography align="left">How to Play</Typography>
                    <Typography align="left">Bonuses</Typography>
                    <Typography align="left">Affiliate</Typography>
                    <Typography align="left">Verification</Typography>
                    <Typography align="left">Support & FAQ</Typography>
                    <Typography align="left">Terms of use</Typography>
                </Grid>
                <Grid item xs={6}>
                    <div className="Footer-Right">
                        <img className="logo" src={Image} alt="company logo" width='126px' />
                        <Grid container>
                            <Grid item xs={6} md={3}>
                                <div className='language'>
                                    <Typography noWrap>English</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6} md={9}>
                                <div>
                                    <Avatar alt="flag" src={Flag} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item md={12}>
                                <div className='copyright'>
                                    <Typography>
                                        &copy; 2018-2019 Futbolifederacia. All Rights Reserved.
                                </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                </Grid>
                <Grid container>
                    <Grid  item xs={12} md={3}></Grid>
                    <Grid alignItems='center' item xs={12} md={9}>
                        <TextField
                            style={{ borderRadius: 25, border: '2px solid #338efa', width: 230,}}
                            value="0.1234546789"
                            InputProps={{
                                disableUnderline: true,
                                className: 'input',
                                endAdornment: <InputAdornment position="end">
                                    <img src={Bitcoin} alt='BitcoinImage' width='34px' />
                                </InputAdornment>,
                            }}
                        />
                        <Button className="button" variant="contained" size="large" >
                            CASHIER
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
};

export default Footer;

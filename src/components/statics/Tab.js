import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import './tab.scss';
import LatestBets from './latestbets';
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

const Statics = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			backgroundColor: "gray",
			width: "100%",
			margin: "10px"
		},
	}));
	const classes = useStyles();

	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	function a11yProps(index) {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	}

	function handleChange(event, newValue) {
		setValue(newValue);
	}
	function handleChangeIndex(index) {
		setValue(index);
	}

	return (
		<Grid container>
			<Grid item xs={12} md={2}></Grid>
			<Grid item xs={12} md={8}>
				<div className={classes.root}>
					<AppBar position="static" className="AppBar">
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="primary"
							variant="fullWidth"
							aria-label="full width tabs example"
						>
							<Tab label="LATEST BETS" {...a11yProps(0)} />
							<Tab label="MY BETS" {...a11yProps(1)} />
							<Tab label="LEADERBOARD" {...a11yProps(2)} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={handleChangeIndex}
					>
						<TabPanel value={value} index={0} dir={theme.direction}>
							<LatestBets />
        				</TabPanel>
						<TabPanel value={value} index={1} dir={theme.direction}>
							Item Two
                		</TabPanel>
						<TabPanel value={value} index={2} dir={theme.direction}>
							Item Three
                		</TabPanel>
					</SwipeableViews>
				</div>
			</Grid>
			<Grid item xs={12} md={2}></Grid>
		</Grid>

	);
};

export default Statics;
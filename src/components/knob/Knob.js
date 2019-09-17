import React, { Component } from 'react';
import './knob.scss';
import { CircleSlider } from 'react-circle-slider';
import { Grid } from '@material-ui/core';

class Knob extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    handleChange = value => {
        console.log(`Changed value ${value}`);
        this.setState({ value });
    };

    handleChangeRange = event => {
        this.setState({
            value: event.target.valueAsNumber,
        });
    };

    render() {
        const { value } = this.state;
        return (
            <Grid container spacing={3}>
                <Grid item xs={1} md={3}>
                </Grid>
                <Grid item xs={11} md={9}>
                    <CircleSlider
                        className="Slider"
                        value={value}
                        size={300}
                        circleWidth={10}
                        showTooltip={true}
                        gradientColorFrom="#FF6666"
                        gradientColorTo="#FF6666"
                        tooltipColor="#FFFF00"
                        circleColor="#228B22"
                    />
                </Grid>
            </Grid>
        );
    }
}

export default Knob;
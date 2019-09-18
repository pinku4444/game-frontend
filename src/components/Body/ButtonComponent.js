import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../Body/button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

const ButtonComponent = () => {
  const classes = useStyles();
  return (
    <div className='buttonBody'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <Grid container>
              <Grid className="rollButtonDiv" item xs={6} md={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  className="rollButton"
                >
                  Roll
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  className="inputButton"
                  variant="outlined"
                  margin="normal"
                  id="rollOver"
                  label="Roll Over"
                  value="25.00"
                  disabled
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="reloadButton"
                >
                  <FontAwesomeIcon icon={faRedoAlt} size="2x" />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <Grid container>
              <Grid item xs={12} md={12}>
                <TextField
                  className="inputBetButton"
                  variant="outlined"
                  margin="normal"
                  id="rollOver"
                  label="Bet"
                  value="0.12345678"
                  disabled
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="reloadBetButton"
                >
                  1/2
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="reloadBetButton"
                >
                  x2
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="reloadBetButton"
                >
                  ALL
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <Grid container>
              <Grid className="rollPayoutButtonDiv" item xs={6} md={6}>
              <TextField
                  className="inputPayoutButton"
                  variant="outlined"
                  margin="normal"
                  id="rollOver"
                  label="Payout"
                  value="x81.23"
                  disabled
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  className="inputWinButton"
                  variant="outlined"
                  margin="normal"
                  id="rollOver"
                  label="Win Chance"
                  value="1.6231 %"
                  disabled
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonComponent;

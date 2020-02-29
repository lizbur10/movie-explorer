import React  from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    header: {
      width:"100%"
    },
  });


export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.header}>
                <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="baseline"
            >

                <h1>Movie-Ex</h1>
                <form  noValidate autoComplete="off">
                <TextField  id="standard-search" label="Movies" type="search" />
                <Button variant="contained" color="primary" size="large">
                Search
                </Button>
                </form>
            </Grid>
            </div>
    )
}



import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
export default function Header(props) {
    const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField onChange={e=>props.search(e)} id="standard-basic" label="Movie Name" />
      <Button onClick={e=>props.onsearch(e)} variant="contained">search</Button>

    </form>
  );
}


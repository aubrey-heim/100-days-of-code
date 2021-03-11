import React from 'react';
import {
    TextField,
    Button
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();
    return (
      <form 
        style={{
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:"30px",
        }}
        className={classes.root} 
        noValidate autoComplete="off" 
        onSubmit={props.onSubmit}
      >
        <div
        style={{
          minWidth: "200px",
          maxWidth:"400px",
          marginLeft:"auto",
          marginRight:"auto",
          }}
        >
          <div>
          <TextField
              id="outlined-password-input"
              label="Admin Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={props.onChange}
          />   
          </div>
          <Button 
            type="submit" 
            variant="contained" 
            style={{
              width:"100%",
              marginTop:"20px",
            }}
          >
            Submit
          </Button>
        </div>

      </form>
    )
};
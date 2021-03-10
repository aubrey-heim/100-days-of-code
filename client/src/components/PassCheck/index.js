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
        <form className={classes.root} noValidate autoComplete="off" onSubmit={props.onSubmit}>
            <div>
                <TextField
                    id="outlined-password-input"
                    label="Admin Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={props.onChange}
                />
                <Button type="submit" variant="contained">Default</Button>
            </div>
        </form>
    )
};
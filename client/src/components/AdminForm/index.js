import React from 'react';
import {
    TextField,
    Button 
}from '@material-ui/core/';
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
  const {onSubmit, onChange} = props

  return (
    <form style={{
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"30px",
      }}
      className={classes.root} 
      noValidate autoComplete="off"
      onSubmit={onSubmit}
    >
      <div style={{
        minWidth: "200px",
        maxWidth:"400px",
        borderColor:"black",
        borderWidth: "2px",
        borderStyle:"solid",
        borderRadius:"10px",
        padding:"30px",
        paddingRight:"40px",
        marginLeft:"auto",
        marginRight:"auto",
        }}
      >
        <TextField
          style={{width:"100%"}}
          id="standard-number-day"
          label="Day"
          name="dayNumber"
          onChange={onChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          style={{width:"100%"}}
          id="standard-multiline-static"
          label="Description"
          name="description"
          multiline
          onChange={onChange}
          rows={4}
        />
        <TextField
          style={{width:"100%"}}
          id="standard-number-duration"
          label="Duration"
          name="duration"
          type="number"
          onChange={onChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField style={{width:"100%"}} name="repo" required id="standard" label="Repo" onChange={onChange}/>
        <Button style={{marginTop:"20px"}}type="submit" variant="contained">Submit</Button>
      </div>
    </form>
  );
}
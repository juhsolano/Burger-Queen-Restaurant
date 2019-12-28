import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// const options = [
//   'carne bovina',
//   'frango',
//   'vegetariano',
// ];

const HamburguerOptions = (props) => {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth='xs'
      onEntering={handleEntering}
      aria-labelledby='confirmation-dialog-title'
      open={open}
      {...other}
    >
      <DialogTitle id='confirmation-dialog-title'>Opções Hambúrguer</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label='burger'
          name='burger'
          value={value}
          onChange={handleChange}
        >
          {props.options.map(option => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color='primary'>
          Cancel
                </Button>
        <Button onClick={handleOk} color='primary'>
          Ok
                </Button>
      </DialogActions>
    </Dialog>
  );
}

HamburguerOptions.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.pallete.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
}));



const ConfirmationOption = () => {
  const classes = useStyles;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = newValue => {
    setOpen(false);
    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <div className={classes.root}>
      <List component='div' role='list'>
        <ListItem
          button
          divider
          aria-haspopup='true'
          aria-controls='burger-options'
          aria-label='hamburguer options'
          onClick={handleClickListItem}
          role='listitem'
        >
          <ListItemText primary='Opções Hambúrguer' secondary={value} />
        </ListItem>
        <HamburguerOptions
          classes={{
            paper: classes.paper,
          }}
          id='burger-options'
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </div>
  );
}

export default ConfirmationOption;

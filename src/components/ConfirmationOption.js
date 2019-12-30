import React from 'react';
// import PropTypes from 'prop-types';
import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import Dialog from '@material-ui/core/Dialog';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import AdditionalOptions from '../components/AdditionalOptions';

const options = [
  'carne bovina',
  'frango',
  'vegetariano',
];

// HamburguerOptions.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.pallete.background.paper,
//   },
//   paper: {
//     width: '80%',
//     maxHeight: 435,
//   },
// }));

const ConfirmationOption = () => {
  // const classes = useStyles;
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
    <div>
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
        <AdditionalOptions
          options={options}
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

//Na div que contém a list
//<div className={classes.root}>
//Na tag HamburguerOptions, antes do id
// classes={{
//   paper: classes.paper,
// }}

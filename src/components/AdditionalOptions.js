import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';

const AdditionalOptions = (props) => {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef(null);
  const [extra, setExtra] = useState({});
  console.log(extra)

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

  const handleChecked = name => event => {
    setExtra({ ...extra, [name]: event.target.checked });
  };

  return (
    <List component='div' role='list'>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth='xs'
        onEntering={handleEntering}
        aria-labelledby='confirmation-dialog-title'
        open={open}
        {...other}
      >
        <DialogTitle id='confirmation-dialog-title'>Opções de Burguer</DialogTitle>
        <DialogContent dividers>
          <RadioGroup
            ref={radioGroupRef}
            aria-label='burger'
            name='burger'
            value={value}
            onChange={handleChange}
          >
            {props.burgerOption.map(option => (
              <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogTitle id='confirmation-dialog-title'>Extras</DialogTitle>
        <DialogContent dividers>
          <FormGroup column
          >
            {props.burgerOption.map(extra => (
              <FormControlLabel
                control={<Checkbox checked={extra.checked} onChange={handleChecked('checked')} value={extra} />}
                label={extra}
              />))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel} color='primary'>Cancelar</Button>
          <Button onClick={handleOk} color='primary'>Ok</Button>
        </DialogActions>
      </Dialog>
    </List>
  );
}

export default AdditionalOptions;

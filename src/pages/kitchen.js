import React from 'react';
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
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
import { useEffect } from 'react';

const options = [
    'carne bovina',
    'frango',
    'vegetariano',
];

const ConfirmationDialogRaw = (props) => {
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
            <DialogTitle id='confirmation-dialog-title'>Phone Ringtone</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label='ringtone'
                    name='ringtone'
                    value={value}
                    onChange={handleChange}
                >
                    {options.map(option => (
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

ConfirmationDialogRaw.propTypes = {
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

export default function ConfirmationDialog() {
    const classes = useStyles;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('frango');

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
                <ListItem button divder disabled role='listitem'>
                    <ListItemText primary='Interruptions' />
                </ListItem>
                <ListItem
                    button
                    divider
                    aria-haspopup='true'
                    aria-controls='ringtone-menu'
                    aria-label='phone ringtone'
                    onClick={handleClickListItem}
                    role='listitem'
                >
                    <ListItemText primary='Phone ringtone' secondary={value} />
                </ListItem>
                <ListItem button divider disabled role='listitem'>
                    <ListItemText primary='Default notification ringtone' secondary='batata' />
                </ListItem>
                <ConfirmationDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id='ringtone-menu'
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                />
            </List>
        </div>
    );
}

// import React, {useState} from 'react';
// import {render} from 'react-dom';
// import useModal from 'react-hooks-use-modal';


// const Kitchen = () => {
//     const [Modal, open, close] = useModal('root');
//     return (
//         <div>
//             <button onClick={open}>OPEN</button>
//             <Modal>
//                 <div>
//                     <h1>MODALZINHO</h1>
//                     <p>Eu sou um pequeno modal</p>
//                     <button onClick={close}>CLOSE</button>
//                     <button onClick={close}>close</button>
//                 </div>
//             </Modal>
//         </div>
//     );
// };

// render(<Kitchen />, document.getElementById('root'));

// export default Kitchen;



// import React from 'react';

// const Kitchen = () => {
//     return (
//         <p>JUANITA ESTÁ NA COZINHA FAZENDO!</p>
//     );
// };

// export default Kitchen;
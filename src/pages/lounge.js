import React, { useState, useEffect } from 'react';
import firebaseApp from '../utils/firebaseUtils';
import Input from '../components/Input';
import OptionsCard from '../components/OptionsCard';
import OrderCard from '../components/OrderCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'; import { StyleSheet, css } from 'aphrodite';
import AdditionalOptions from '../components/AdditionalOptions';
import alertify from 'alertifyjs';

const styles = StyleSheet.create({
  loungeStandard: {
    display: 'flex',
    justifyContent: 'space-around',
  }
});

const Lounge = () => {

  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({ options: '' });
  const [burgerOption, setBurgerOption] = useState([]);

  useEffect(() => {
    firebaseApp.collection('menu')
      .get()
      .then((snapshot) => {
        const breakfastFood = snapshot.docs.filter(docs => docs.data().breakfast).map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setBreakfastMenu(breakfastFood);

        const lunchFood = snapshot.docs.filter(doc => doc.data().lunch).map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setLunchMenu(lunchFood);
      })
  }, [])

  const submitOrder = () => {
    if (order.length && client && table) {
      firebaseApp.collection('order')
        .add({
          clientName: client,
          table: table,
          clientOrder: order,
          bill: total,
          dispatchTime: new Date().toLocaleString('pt-BR'),
          status: 'Encaminhado',
        })
        .then(() => {
          alertify.success('Pedido encaminhado com sucesso!');
          setClient(['']);
          setTable(['']);
          setOrder([]);
        })
    } else if (!order.length) {
      alertify.error('Selecione ao menos um item');
    } else if (!client) {
      alertify.error('Informe o nome do cliente');
    } else if (!table) {
      alertify.error('Informe o nº da mesa');
    }
  }

  const selectOptions = (item) => {
    if (item.options.length !== 0) {
      handleClickListItem(item.options);
      setOrder([...order, value])//aqui
    } else if (!order.includes(item)) {
      item.count = 1;
      setOrder([...order, item])
    } else {
      item.count += 1;
      setOrder([...order])
    }
  }

  const handleClickListItem = (item) => {
    setOpen(true);
    setBurgerOption(item);
  };

  const handleClose = newValue => {
    setOpen(false);
    if (newValue) {
      setValue({ options: newValue })
    }
    console.log(newValue, "Fui selecionado! (lounge)");
    console.log(value, 'nada acontece feijoada!');
  };

  const reduceItem = (item) => {
    if (order.includes(item)) {
      item.count -= 1;
    }
    const minus = order.filter(element => element.count > 0)
    setOrder([...minus])
  }

  const removeOrder = (item) => {
    const deleteItem = (order.indexOf(item));
    order.splice(deleteItem, 1);
    setOrder([...order]);
  }

  const total = order.reduce((acc, item) => acc + (item.count * item.price), 0)

  return (
    <div>
      <div>
        <Input type='text' value={client} placeholder='Nome cliente' handleChange={event => setClient(event.currentTarget.value)} />
        <Input type='number' value={table} placeholder='Nº de Mesa' handleChange={event => setTable(event.currentTarget.value)} />
      </div>
      <div className={css(styles.loungeStandard)}>
        <OptionsCard
          breakfastMenu={breakfastMenu}
          lunchMenu={lunchMenu}
          selectOptions={selectOptions}
        />
        <OrderCard
          order={order}
          removeOrder={removeOrder}
          reduceItem={reduceItem}
          total={total}
          submitOrder={submitOrder}
        />
        <List component='div' role='list'>
          <AdditionalOptions
            id='burger-options'
            keepMounted
            open={open}
            onClose={handleClose}
            value={value}
            burgerOption={burgerOption}
          />
        </List>
      </div>
    </div>
  );
}

export default Lounge;


<List component="div" role="list">
  <ListItem button divider disabled role="listitem">
    <ListItemText primary="Interruptions" />
  </ListItem>
  <ListItem
    button
    divider
    aria-haspopup="true"
    aria-controls="ringtone-menu"
    aria-label="phone ringtone"
    onClick={handleClickListItem}
    role="listitem"
  >
    <ListItemText primary="Phone ringtone" secondary={value} />
  </ListItem>
  <ListItem button divider disabled role="listitem">
    <ListItemText primary="Default notification ringtone" secondary="Tethys" />
  </ListItem>
  <ConfirmationDialogRaw
    classes={{
      paper: classes.paper,
    }}
    id="ringtone-menu"
    keepMounted
    open={open}
    onClose={handleClose}
    value={value}
  />
</List>







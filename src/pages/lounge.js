import React, { useState, useEffect } from 'react';
import firebaseApp from '../utils/firebaseUtils';
import Header from '../components/Header';
import Input from '../components/Input';
import OptionsCard from '../components/OptionsCard';
import OrderCard from '../components/OrderCard';
import { StyleSheet, css } from 'aphrodite/no-important';
import AdditionalOptions from '../components/AdditionalOptions';
import alertify from 'alertifyjs';

const styles = StyleSheet.create({
  loungeStandard: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  inputStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 5,
    marginTop: '4%',
    marginBottom: '1%',
  },
  commonInput: {
    display: 'flex',
    fontSize: 16,
    padding: 5,
    backgroundColor: '##ecf0f1',
    borderColor: '#95a5a6',
    borderRadius: 5,
    height: '4vw',
    margin: 1.5,
    width: '35%',
  },
  inputNumber: {
    width: '12%',
  }
});

const Lounge = () => {

  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [open, setOpen] = useState(false);
  const [value] = useState('carne bovina');
  const [burger, setBurger] = useState([]);
  const [option, setOption] = useState({});
  const [extra, setExtra] = useState({});

  useEffect(() => {
    firebaseApp.collection('menu')
      .get()
      .then((snapshot) => {
        const dataMenu = snapshot.docs.map((menuItens) => ({
          id: menuItens.id,
          ...menuItens.data()
        }))
        setBreakfastMenu(dataMenu.filter((breakfastFood) => breakfastFood.breakfast === true));
        setLunchMenu(dataMenu.filter((lunchFood) => lunchFood.lunch === true));
      })
  }, []);

  const submitOrder = () => {
    if (order.length && client && table) {
      firebaseApp.collection('order')
        .add({
          clientName: client,
          table: table,
          clientOrder: order,
          bill: total,
          dispatchTime: new Date().getTime(),
          status: 'A preparar',
        })
        .then(() => {
          alertify.success('Pedido encaminhado com sucesso!');
          setClient(['']);
          setTable(['']);
          setOrder([]);
        })
    } else {
      alertify.error('Selecione ao menos um item e identifique o cliente com nº mesa');
    }
  };

  const handleClickListItem = (item) => {
    setOpen(true);
    setBurger(item);
  };

  const handleClose = (selectOption) => {
    if (extra.extra === undefined) {
      extra.extra = '';
    }
    const optionName = option.name + ' ' + selectOption + ' ' + extra.extra;
    const itemIndex = order.findIndex(orderItem => orderItem.name === optionName);
    if (itemIndex === -1) {
      option.count = 1;
      if (Object.keys(extra).length !== 0 && extra.extra !== '') {
        setOrder([...order, { ...option, name: optionName, price: option.price + 1 }]);
      } else {
        setOrder([...order, { ...option, name: optionName }])
      }
    } else {
      order[itemIndex].count += 1;
      setOrder([...order])
    }
    setOpen(false);
    setExtra({});
  };

  const selectOptions = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.name === item.name);
    if (item.options.length === 0) {
      if (itemIndex === -1) {
        item.count = 1;
        setOrder([...order, item])
      } else {
        item.count += 1;
        setOrder([...order])
      }
    } else {
      handleClickListItem(item);
      setOption(item)
    }
  };

  const reduceItem = (item) => {
    if (order.includes(item)) {
      item.count -= 1;
    }
    const minus = order.filter(selectItem => selectItem.count > 0)
    setOrder([...minus])
  };

  const removeOrder = (item) => {
    setOrder(order.filter(product => product.name !== item.name))
  };

  const total = order.reduce((acc, item) => acc + (item.count * item.price), 0);

  return (
    <div>
      <Header />
      <div className={css(styles.inputStyle)}>
        <Input className={css(styles.commonInput)} type='text' value={client} placeholder='Nome do cliente' handleChange={event => setClient(event.currentTarget.value)} />
        <Input className={css(styles.commonInput, styles.inputNumber)} type='number' value={table} placeholder='Nº da Mesa' handleChange={event => setTable(event.currentTarget.value)} />
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
        <AdditionalOptions
          id='burger-options-extras'
          open={open}
          onClose={handleClose}
          value={value}
          burger={burger}
          extra={extra}
          setExtra={setExtra}
          onCancel={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default Lounge;

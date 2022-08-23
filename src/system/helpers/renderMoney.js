const renderMoney = (value) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

export default renderMoney;

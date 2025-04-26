import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';

function App() {
  //currentPage state
  const [currentPage, setCurrentPage] = useState('home');

  //orderData state
  const [orderData, setOrderData] = useState({
    name: '',
    size: '',
    toppings: [],
    specialNote: ''
  });

  //navpage func.
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'order' && <OrderPizza navigateTo={navigateTo} setOrderData={setOrderData} />}
      {currentPage === 'success' && <Success orderData={orderData} />}
    </div>
  );
}

export default App;

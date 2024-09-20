import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import useFetch from './hooks/useFetch';

function App() {
  const API = 'https://dummyjson.com/products?limit=100'
  const { data, loading, err } = useFetch(API)
  let products;
  if (data && data.products) {
    products = (data.products)
  }
  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;

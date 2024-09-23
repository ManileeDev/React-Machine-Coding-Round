import './App.css';
import { useState } from 'react';
import './App.css';
import Products from './components/Products';
import useFetch from './hooks/useFetch';
import Pagination from './components/Pagination';

function App() {
  const API = 'https://dummyjson.com/products?limit=100'
  const { data } = useFetch(API)
  let products=[];
  const [limit,setLimit] = useState(10)
  if (data && data.products) {
    products = (data.products)
  }
  const total = Math.ceil(products.length/limit) 
  const[currentPage,setCurrentPage] = useState(1)
  const  end = currentPage*limit;
  const start = end - limit;
  const filteredProducts = products.slice(start,end) //slice(10,10)
  return (
    <div className="App">
      <Products products={filteredProducts} />
      <Pagination setLimit={setLimit} total={total} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;

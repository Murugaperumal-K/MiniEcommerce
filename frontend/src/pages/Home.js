import React, { Fragment, useEffect, useState } from 'react'
import ProductCart from '../components/Productcart'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [products,setProducts] = useState([]);
    const[searchParams,setSearchParams] = useSearchParams();

    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL + '/products?'+searchParams)
      .then((res) => res.json())
      .then(res => setProducts(res.products))
    },[searchParams])
    
    
  return (
    <Fragment>
         <section id="products" className="container mt-5">
      <div className="row">
      {products.map(product => <ProductCart product={product}/>)}
      

       
      </div>
    </section>

    </Fragment>
  )
}

export default Home
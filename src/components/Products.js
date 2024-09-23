import React from 'react'

const Products = ({ products }) => {
    return (
        <div className='products-container'>
            {products && products.map(prod => (
                <div key={prod.id} className='prod__card'>
                    <img src={prod.thumbnail} alt={prod.title} />
                    <h4>{prod.title}</h4>
                </div>))}
        </div>
    )
}

export default Products
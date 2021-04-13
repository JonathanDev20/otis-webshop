import React from 'react'

const ProductView = () => {
  return (
    <div>
      <h1>Det här sidan för en enskild produkt</h1>
      <div className="productContent" style={{ display: 'flex', margin: '10px' }}>
        <div className="productImage">
          <img src="/images/matt-pipe.JPG" alt="matt pipa" width="450" />
        </div>
        <div className="productDescription" style={{ textAlign: 'center', width: '450px' }}>
          <p>Title</p>
          <p>Price</p>
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  )
}

export default ProductView

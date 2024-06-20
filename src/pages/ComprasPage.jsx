import React, { useContext } from 'react'
import { Card } from "../components/Card"
import { ProductosContext } from '../context/ProductosContext'
import { CarritoContext } from '../context/CarritoContext'
import '../styles/comprasPage.css';

export const ComprasPage = () => {

  const { products } = useContext(ProductosContext)
  const { addPurchase, removePurchase } = useContext(CarritoContext)

  const handleAddPurchase = (compra) => {
    addPurchase(compra)
  }
  const handleRemovePurchase = (id) => {
    removePurchase(id)
  }

  return (
    <>
        <h1 >Articulos</h1>
        <hr />
        <div className='lista-contenido'>
          {products.map(product => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={"$" + product.price}
              handleAddPurchase={() => handleAddPurchase(product)}
              handleRemovePurchase={() => handleRemovePurchase(product.id)}
            />
          ))}
        </div>
      
    </>
  )
}


import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductosContext } from '../context/ProductosContext';
import { Card } from '../components/Card';
import { CarritoContext } from '../context/CarritoContext';

export const FeaturedProduct = () => {

  const { products } = useContext(ProductosContext);
  const { addPurchase, removePurchase } = useContext(CarritoContext)

  const handleAddPurchase = (compra) => {
    addPurchase(compra)
  }
  const handleRemovePurchase = (id) => {
    removePurchase(id)
  } 
  const { id } = useParams();

  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <h1>Detalles del Producto Destacado</h1>
      <hr />
      <div className='featureProduct'>
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={"$" + product.price}
          handleAddPurchase={() => handleAddPurchase(product)}
          handleRemovePurchase={() => handleRemovePurchase(product.id)}
        />
      </div>
    </>
  );
};


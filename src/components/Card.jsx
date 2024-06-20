import React from 'react';
import '../styles/cards.css';
import { useState } from 'react';
import PropTypes from 'prop-types';


export const Card = ({ image, title, description, price, handleAddPurchase, handleRemovePurchase }) => {

  const [added, setAdded] = useState(false);

  const clickAdd = () => {
    handleAddPurchase()
    setAdded(true);
  }
  const clickRemove = () => {
    handleRemovePurchase()
    setAdded(false);
  }
  
  Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    handleAddPurchase: PropTypes.func.isRequired,
    handleRemovePurchase: PropTypes.func.isRequired,
  }

  return (
    <div className="tarjeta">
      <img src={image} alt={title} className='tarjeta-imagen' />
      <div className='tarjeta-contenido'>
        <h3 className='tarjeta-titulo'>{title}</h3>
        <p className='tarjeta-descripcion'>{description}</p>
        <p className='tarjeta-precio'>{price}</p>
       </div> 
        <div className='tarjeta-botones'>
          {added
            ? <button
              type="button"
              className="boton-quitar"
              onClick={clickRemove}> quitar del carrito
            </button>
            : <button
              type="button"
              className="boton-agregar"
              onClick={clickAdd}> Agregar al carrito
            </button>
          }
        </div>
    </div>
  )
};

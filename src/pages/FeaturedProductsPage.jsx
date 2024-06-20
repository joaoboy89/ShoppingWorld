import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductosContext } from '../context/ProductosContext';
import '../styles/homePage.css'

export const FeaturedProductsPage = () => {

  const { products } = useContext(ProductosContext);

  if (!products || products.length === 0) {
    return (
      <div className="loading">
        Cargando productos destacados...
      </div>
    );
  }

  const productosDestacados = products.filter(product => product.isFeatured).slice(0, 4);

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Productos Destacados</h1>
          <p>Descubre nuestros productos destacados</p>
          <NavLink to="/home" className="btn">Volver a la página principal</NavLink>
        </div>
      </header>
      <section id="productos" className="products">
        <h2>Nuestros Productos Destacados</h2>
        {productosDestacados.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <NavLink to={`/featuredProduct/${product.id}`} className="btn">Ver Detalles</NavLink>
          </div>
        ))}
      </section>
    </>
  );
};

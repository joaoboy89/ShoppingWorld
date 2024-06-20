import '../styles/homePage.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ProductosContext } from '../context/ProductosContext'
import { React } from 'react'

export const HomePage = () => {

  const { products } = useContext(ProductosContext)
  if (!products || products.length === 0) {
    return (
      <div className="loading">
        Cargando productos...
      </div>
    );
  }

  const productosDestacados = products.filter(product => product.isFeatured).slice(0, 2);


  return (
    <>  
        <header className="hero">
          <div className="hero-content">
            <h1>Bienvenido a ShoppingWorld</h1>
            <p>Encuentra todo lo que necesitas en un solo lugar</p>
            <img src='images/Pict-w01.jpg' className="mobile-img" />
            <NavLink to="/products" className="btn">Ver Productos</NavLink>
          </div>
        </header>
        <section id="productos" className="products">
          <h2>Nuestros Productos Destacados</h2>
          {productosDestacados.map(product => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <NavLink to={`/featuredProduct/${product.id}`} className="btn"> Mas Detalles</NavLink>
            </div>
          ))}
        </section>
    </>
  );
}

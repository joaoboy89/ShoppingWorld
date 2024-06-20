import { ProductosContext } from './ProductosContext'
import { useEffect, useState } from 'react'
import { React } from 'react'
import PropTypes from 'prop-types';

export const ProductosProvider = ({ children }) => {

  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      const products = data.map(product => ({ ...product, isFeatured: product.price > 50 }));
      setProducts(products)
    } catch (error) {
      console.log("Error fetching products: ", error)
    }
  };

  useEffect(() => {
    fetchProduct()
  }, [])

  ProductosProvider.propTypes = {
    children: PropTypes.node
  }

  return (
    <ProductosContext.Provider value={{ products }}>
      {children}
    </ProductosContext.Provider>
  )
}

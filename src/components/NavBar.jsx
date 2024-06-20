import Badge from '@mui/material/Badge';
import { React } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

import "../styles/comprasPage.css"

export const NavBar = () => {

    const { listaCompras } = useContext(CarritoContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/home" className="navbar-brand" href="#">ShoppingWorld</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/products" className="nav-link" aria-current="page" href="#" activeClassName="nav-link-active">Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/featuredProductsPage" className="nav-link" aria-current="page" href="#" activeClassName="nav-link-active">Destacados</NavLink>
                        </li>
                    </ul>
                    <NavLink to="/cart">
                        <Badge badgeContent={listaCompras.length} color="secondary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}

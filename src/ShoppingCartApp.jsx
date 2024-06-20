import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./pages/ComprasPage"
import { CarritoPage } from "./pages/CarritoPage"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer"
import { FeaturedProduct } from "./pages/FeaturedProduct";
import { FeaturedProductsPage } from "./pages/FeaturedProductsPage"
import { React } from "react"

export const ShoppingCartApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/featuredProductsPage" element={<FeaturedProductsPage />} />
                        <Route path="/featuredProduct/:id" element={<FeaturedProduct />} />
                        <Route path="/products" element={<ComprasPage />} />
                        <Route path="/cart" element={<CarritoPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/" element={<Navigate to='/home' />} />
                    </Routes>
                </div>
                <Footer />
            </CarritoProvider>
        </ProductosProvider>

    )
}

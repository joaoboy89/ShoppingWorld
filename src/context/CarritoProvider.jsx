import { React } from "react"
import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";
import PropTypes from 'prop-types';

const initialState = [];

export const CarritoProvider = ({ children }) => {
    
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case 'cart add compra':
                return [...state, action.payload]
            case 'cart add amount':
                return state.map(item => {
                    const amountt = item.amount + 1
                    if (item.id === action.payload) return { ...item, amount: amountt }
                    return item;
                })
            case 'cart reduce compra':
                return state.map(item => {
                    const amountt = item.amount - 1
                    if (item.id === action.payload && item.amount > 0) return { ...item, amount: amountt }
                    return item;
                })
            case 'cart remove compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state;
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const addPurchase = (compra) => {
        compra.amount = 1;
        const action = {
            type: 'cart add compra',
            payload: compra
        }
        dispatch(action)
    }
    const addAmount = (id) => {
        const action = {
            type: 'cart add amount',
            payload: id
        }
        dispatch(action)
    }
    const reduceAmount = (id) => {
        const action = {
            type: 'cart reduce compra',
            payload: id
        }
        dispatch(action)
    }
    const removePurchase = (id) => {
        const action = {
            type: 'cart remove compra',
            payload: id
        }
        dispatch(action)
    }

    CarritoProvider.propTypes = {
        children: PropTypes.node
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, addPurchase, reduceAmount, removePurchase, addAmount }}>
            {children}
        </CarritoContext.Provider>
    )
}

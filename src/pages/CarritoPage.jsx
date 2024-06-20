import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { React } from "react"
import "../styles/comprasPage.css"
import "../styles/homePage.css"

export const CarritoPage = () => {

  const { listaCompras, reduceAmount, removePurchase, addAmount } = useContext(CarritoContext)

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
  }

  const handlePrint = () => {
    print();
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {listaCompras.map(item => (
            <tr key={item.id}>
              <td className="tdCarritoPage">{item.title}</td>
              <td className="tdCarritoPage">{item.price}</td>
              <td className="tdCarritoPager">
                <button className="btn btn-ouline-primary" onClick={() => reduceAmount(item.id)}>-
                </button>
                <button className="btn btn-primary">{item.amount}
                </button>
                <button className="btn btn-ouline-primary" onClick={() => addAmount(item.id)}>+
                </button>
              </td>
              <td className="tdCarritoPage"><button
                type="button"
                className="btn btn-danger"
                onClick={() => removePurchase(item.id)}>Eliminar
              </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"><b>TOTAL</b></td>
            <td colSpan="1"></td>
            <td className="tdCarritoPage">${calcularTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={handlePrint}>
          Comprar
        </button>
      </div>
    </>
  );
};

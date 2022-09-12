import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

export default function SalesCard() {
  const start = new Date(new Date().setDate(new Date().getDate() - 365));

  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dateMin = startDate.toISOString().slice(0, 10);
    const dateMax = endDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate${dateMin}&maxDate${dateMax}`)
      .then((response) => {
        setSales(response.data.content);
      })
  }, [startDate, endDate]);

  const formatDate = (date: String) => {
    if (date.length === 9) {
      return `0${date}`;
    }
    return date;
  }

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Sales</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={ startDate }
            onChange={(date: Date) => {
              setStartDate(date);
            }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={ endDate }
            onChange={(date: Date) => {
              setEndDate(date);
            }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Date</th>
              <th>Seller</th>
              <th className="show992">Visits</th>
              <th className="show992">Sales</th>
              <th>Total</th>
              <th>Notify</th>
            </tr>
          </thead>
          <tbody>
            {
              sales.map((sale) => (
                <tr key={sale.id}>
                  <td className="show992">{ sale.id }</td>
                  <td className="show576">{ new Date(sale.date).toLocaleDateString('pt-br') }</td>
                  <td>{sale.sellerName}</td>
                  <td className="show992">{ sale.visited }</td>
                  <td className="show992">{ sale.deals }</td>
                  <td>{ sale.amount.toFixed(2) }</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <NotificationButton saleId={ sale.id }/>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
  </div>
  )
}

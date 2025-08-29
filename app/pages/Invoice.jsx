import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";
import "../components/Invoice.css";

const InvoiceContent = ({ order, handlePrint }) => {
  const subtotal = order.items.reduce((sum, item) => sum + (item.qty * item.price), 0);
  const tax = order.taxRate ? subtotal * order.taxRate : 0;
  const total = subtotal + tax;

  return (
    <div className="invoice-box">
      <header>
        <img src="/wflogo.png" alt="Logo" className="logo" />
        <div className="header-info">
          <p><strong>Invoice No:</strong> #WFO-{order.id || '000'}</p>
          <p><strong>Date:</strong> {order.date || new Date().toISOString().split('T')[0]}</p>
        </div>
      </header>

      <section className="address">
        <div>
          <h4>Invoiced To:</h4>
          <p>{order.customer || 'Customer Name'}</p>
          <p>{order.phone || '+1234567890'}</p>
          <p>{order.email || 'customer@example.com'}</p>
          <p>{order.address || 'Customer Address'}</p>
        </div>
        <div>
          <h4>Pay To:</h4>
          <p>White Feather's Inc. Pvt. Ltd.</p>
          <p>Newroad, Kathmandu, Nepal</p>
          <p>+977-01-5365343, +977-9806091605</p>
        </div>
      </section>

      <table>
        <thead>
          <tr>
            <th>SL.</th>
            <th>Item Description</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.description}</td>
              <td>Rs {item.price.toFixed(2)}</td>
              <td>{item.qty}</td>
              <td>Rs {(item.qty * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="summary">
        <div><strong>Payment Mode:</strong> {order.paymentMethod || 'Cash on Delivery'}</div>
        <div className="right">
          <p><strong>Sub Total:</strong> Rs {subtotal.toFixed(2)}</p>
          {order.taxRate > 0 && <p><strong>Tax ({(order.taxRate * 100)}%):</strong> Rs {tax.toFixed(2)}</p>}
          <p><strong>Total:</strong> Rs {total.toFixed(2)}</p>
        </div>
      </section>

      <div className="note">
        <p><strong>NOTE:</strong> This is a computer-generated invoice and does not require a physical signature.</p>
      </div>
      <div className="print-btn">
        <button onClick={() => window.print()}>🖨️ Print</button>
      </div>

      <footer>
        <p>Call: +977-01-5365343, +977-9806091605 | <a href="https://www.whitefeathersjewellery.com">www.whitefeathersjewellery.com</a></p>
      </footer>
    </div>
  );
};


export default function Invoice() {
  const { id } = useParams();
  const componentRef = useRef();
  
  // Mock order data (in a real app, this would come from an API)
  const order = {
    id,
    customer: "John Doe",
    date: new Date().toISOString().split('T')[0],
    items: [
      { description: "Gold Necklace", qty: 1, price: 100000 },
      { description: "Silver Ring", qty: 2, price: 2000 }
    ],
    taxRate: 0.1,
    paymentMethod: "Cash on Delivery"
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          margin: 0;
        }
        .print-btn {
          display: none !important;
        }
      }
    `
  });

  return (
    <div style={{ padding: '20px' }}>
      <div ref={componentRef}>
        <InvoiceContent order={order} handlePrint={handlePrint} />
      </div>
      
    </div>
  );
}

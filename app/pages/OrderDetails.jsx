import { useParams, Link } from "react-router-dom";
import "./OrderDetails.css";

export default function OrderDetails() {
  const { id } = useParams();

  // Mock order data (in real app, fetch from API)
  const order = {
    id,
    orderNumber: `ORD-${id.padStart(5, '0')}`,
    customer: "John Doe",
    date: "2025-08-12",
    phone: "+1234567890",
    email: "john@example.com",
    shippingAddress: "123 Main St, City, Country",
    billingAddress: "123 Main St, City, Country",
    status: "Completed",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    items: [
      { id: 1, description: "Gold Necklace", qty: 2, price: 50, total: 100 },
      { id: 2, description: "Silver Ring", qty: 1, price: 100, total: 100 }
    ],
    subtotal: 200,
    tax: 20,
    shipping: 0,
    total: 220
  };

  return (
    <div className="order-details-container">
      <div className="order-header">
        <h1>Order Details</h1>
        <Link to="/" className="btn btn-back">
          &larr; Back to Orders
        </Link>
      </div>

      <div className="order-summary">
        <div className="order-info">
          <div className="info-group">
            <h3>Order Information</h3>
            <p><strong>Order Number:</strong> {order.orderNumber}</p>
            <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
            <p><strong>Status:</strong> <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></p>
          </div>

          <div className="info-group">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> {order.customer}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
          </div>

          <div className="info-group">
            <h3>Shipping Address</h3>
            <p>{order.shippingAddress}</p>
          </div>

          <div className="info-group">
            <h3>Payment Information</h3>
            <p><strong>Method:</strong> {order.paymentMethod}</p>
            <p><strong>Status:</strong> {order.paymentStatus}</p>
          </div>
        </div>

        <div className="order-items">
          <h3>Order Items</h3>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.qty}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right">Subtotal:</td>
                <td>${order.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">Tax (10%):</td>
                <td>${order.tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">Shipping:</td>
                <td>${order.shipping.toFixed(2)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3" className="text-right"><strong>Total:</strong></td>
                <td><strong>${order.total.toFixed(2)}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="order-actions">
        <Link to={`/invoice/${order.id}`} className="btn btn-primary">
          View Invoice
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

// Mock order data (in a real app, this would come from an API)
const mockOrders = [
  {
    id: 1,
    customer: "John Doe",
    date: "2025-08-13",
    total: 5000,
    status: "Completed"
  },
  {
    id: 2,
    customer: "Jane Smith",
    date: "2025-08-12",
    total: 7500,
    status: "Processing"
  },
  {
    id: 3,
    customer: "Bob Johnson",
    date: "2025-08-11",
    total: 3200,
    status: "Shipped"
  }
];

export default function OrderList() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        
      </div>
      
      <div className="order-list">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map(order => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>Rs {order.total.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td className="actions">
                  <Link to={`/order/${order.id}`} className="btn btn-sm">View</Link>
                  <Link to={`/invoice/${order.id}`} className="btn btn-sm btn-secondary">Invoice</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <style jsx>{`
        .order-list {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        th {
          background-color: #f8f9fa;
          font-weight: 600;
          color: #333;
        }
        tr:hover {
          background-color: #f8f9fa;
        }
        .status-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8em;
          font-weight: 500;
        }
        .status-badge.completed {
          background-color: #d4edda;
          color: #155724;
        }
        .status-badge.processing {
          background-color: #fff3cd;
          color: #856404;
        }
        .status-badge.shipped {
          background-color: #cce5ff;
          color: #004085;
        }
        .actions {
          display: flex;
          gap: 8px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background-color: #28a745;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          font-size: 0.9em;
          transition: background-color 0.2s;
        }
        .btn:hover {
          background-color: #218838;
        }
        .btn-sm {
          padding: 4px 10px;
          font-size: 0.8em;
        }
        .btn-secondary {
          background-color: #6c757d;
        }
        .btn-secondary:hover {
          background-color: #5a6268;
        }
      `}</style>
    </div>
  );
}

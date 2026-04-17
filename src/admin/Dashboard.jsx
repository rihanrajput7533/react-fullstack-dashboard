const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      {/* Cards Section */}
      <div className="cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>1,245</p>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <p>320</p>
        </div>

        <div className="card">
          <h3>Total Sales</h3>
          <p>₹1,20,000</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>₹85,000</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="recent-orders">
        <h3>Recent Orders</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#101</td>
              <td>Rihan</td>
              <td>Laptop</td>
              <td><span className="status success">Completed</span></td>
              <td>₹70,000</td>
            </tr>

            <tr>
              <td>#102</td>
              <td>Ali</td>
              <td>Mobile</td>
              <td><span className="status pending">Pending</span></td>
              <td>₹25,000</td>
            </tr>

            <tr>
              <td>#103</td>
              <td>John</td>
              <td>Headphones</td>
              <td><span className="status cancel">Cancelled</span></td>
              <td>₹3,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
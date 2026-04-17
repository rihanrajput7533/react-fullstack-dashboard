
const Product = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "₹80,000",
      category: "Mobile",
      status: "Active",
      image: "https://via.placeholder.com/40"
    },
    {
      id: 2,
      name: "Samsung TV",
      price: "₹55,000",
      category: "Electronics",
      status: "Inactive",
      image: "https://via.placeholder.com/40"
    },
    {
      id: 3,
      name: "Laptop",
      price: "₹70,000",
      category: "Computers",
      status: "Active",
      image: "https://via.placeholder.com/40"
    }
  ];

  return (
    <div className="product-container">
      <h2 className="title">Product Management</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td className="product-info">
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </td>

              <td>{item.price}</td>
              <td>{item.category}</td>

              <td>
                <span
                  className={
                    item.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {item.status}
                </span>
              </td>

              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
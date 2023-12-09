import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleChange = async (orderId, value) => {
    try {
      await axios.put(`/api/v1/auth/order-status/${orderId}`, { status: value });
      getOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          {orders?.map((order, index) => (
            <div className="border shadow" key={order._id}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Buyer</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <Select
                        bordered={false}
                        onChange={(value) => handleChange(order._id, value)}
                        defaultValue={order?.status}
                      >
                        {status.map((s, i) => (
                          <Option key={i} value={s}>
                            {s}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td>{order?.buyer?.name}</td>
                    <td>{moment(order?.createAt).fromNow()}</td>
                    <td>{order?.payment.success ? "Success" : "Failed"}</td>
                    <td>{order?.products?.length}</td>
                  </tr>
                </tbody>
              </table>
              <div className="container">
                {order?.products?.map((product) => (
                  <div className="row mb-2 p-3 card flex-row" key={product._id}>
                    <div className="col-md-4">
                      <img
                        src={`/api/v1/product/product-photo/${product._id}`}
                        className="card-img-top"
                        alt={product.name}
                        width="100px"
                        height="100px"
                      />
                    </div>
                    <div className="col-md-8">
                      <p>{product.name}</p>
                      <p>{product.description.substring(0, 30)}</p>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;

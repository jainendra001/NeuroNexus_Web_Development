import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title="Neuro-Bazar: Admin">
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-3">
              <h3>Admin Details</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Admin Name:</strong></td>
                    <td>{auth?.user?.name}</td>
                  </tr>
                  <tr>
                    <td><strong>Admin Email:</strong></td>
                    <td>{auth?.user?.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Admin Contact:</strong></td>
                    <td>{auth?.user?.phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

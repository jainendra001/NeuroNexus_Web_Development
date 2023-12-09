import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3" >
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-3">
              <h3>User Details</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>User Name:</strong></td>
                    <td>{auth?.user?.name}</td>
                  </tr>
                  <tr>
                    <td><strong>User Email:</strong></td>
                    <td>{auth?.user?.email}</td>
                  </tr>
                  <tr>
                    <td><strong>User Address:</strong></td>
                    <td>{auth?.user?.address}</td>
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

export default Dashboard;

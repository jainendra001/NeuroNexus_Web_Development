import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Forgot Password - Neuro-Bazar"}>
      <div className="row">
      <div className="col-md-6">
  {/* Image Section */}
  <div className="image-container" style={{ margin: 0, padding: 0 }}>
    {/* Add your image or any other content here */}
    <img
      src="https://img.freepik.com/premium-vector/man-forgot-her-personal-data-concept-web-screensaver-with-forgotten-password_505620-1427.jpg"
      alt="Your Alt Text"
      className="img-fluid"
      style={{ width: '100%', height: '100%', objectFit: 'cover', margin: 0, padding: 0 }}
    />
  </div>
</div>

        <div className="col-md-6">
          {/* Form Section */}
          <div className="form-container">
            <form onSubmit={handleSubmit} className="auth-form">
              <h4 className="auth-title">RESET PASSWORD</h4>

              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Favorite Sport Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                RESET
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;

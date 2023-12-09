import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-Neuro Bazar"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Neuro-Bazar, where innovation meets well-being! At Neuro-Bazar, we're not just an e-commerce platform; we're a community passionate about enhancing lives through cutting-edge technology and wellness solutions.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

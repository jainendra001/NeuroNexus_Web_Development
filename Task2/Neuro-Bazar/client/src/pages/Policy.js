// import React from "react";
// import Layout from "./../components/Layout/Layout";

// const Policy = () => {
//   return (
//     <Layout title={"Policy-Neuro Bazar"}>
//       <div className="row contactus ">
//         <div className="col-md-6 ">
//           <img
//             src="/images/contactus.jpg"
//             alt="contactus"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div class="col-md-4">
//   <div>
//     <h4>Privacy Policy</h4>
//     <p>Last Updated: [Date]</p>
//     <p>
//       Thank you for choosing Neuro-Bazar. This Privacy Policy is designed to help you understand how we collect, use, and safeguard your personal information when you visit our website or make a purchase from us.
//     </p>
//     <p>
//       <strong>1. Information We Collect:</strong>
//     </p>
//     <ul>
//       <li><strong>Personal Information:</strong> When you make a purchase, we collect certain personal information such as your name, billing address, shipping address, email address, and phone number.</li>
//       <li><strong>Payment Information:</strong> We do not store your payment information. All transactions are processed securely through our trusted payment gateway.</li>
//       <li><strong>Device Information:</strong> We may collect information about the device you use to access our website, including IP address, browser type, and operating system.</li>
//     </ul>
//     <p>
//       <strong>2. How We Use Your Information:</strong>
//     </p>
//     <p>
//       We use the information we collect for the following purposes:
//     </p>
//     <ul>
//       <li>To process and fulfill your orders.</li>
//       <li>To communicate with you about your orders and provide customer support.</li>
//       <li>To improve our website and enhance your shopping experience.</li>
//       <li>To send you promotional offers and updates with your consent.</li>
//     </ul>
//     {/* <!-- ... (continue with the rest of the sections) --> */}
//     <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@neurobazar.com">contact@neurobazar.com</a></p>
//     <p>Thank you for trusting Neuro-Bazar with your information.</p>
//   </div>
// </div>

//       </div>
//     </Layout>
//   );
// };

// export default Policy;



import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  const [readPolicy, setReadPolicy] = useState(false);

  const handleReadPolicy = () => {
    setReadPolicy(true);
  };

  return (
    <Layout title={"Policy-Neuro Bazar"}>
      <div className="row contactus">
        <div className="col-md-6">
          {/* Display the image */}
          <img
            src="/images/contactus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          {!readPolicy ? (
            // Display the slider content
            <div className="slider-container">
              <div className="slider-content">
                <h4 className="bg-dark p-2 text-white text-center">Privacy Policy</h4>
                <p>Last Updated: 06-12-2023</p>
                <p>
                  Thank you for choosing Neuro-Bazar. This Privacy Policy is
                  designed to help you understand how we collect, use, and
                  safeguard your personal information when you visit our
                  website or make a purchase from us.
                </p>
                {/* ... (rest of the content) */}
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
                  <a href="mailto:contact@neurobazar.com">
                    contact@neurobazar.com
                  </a>
                </p>
                <p>
                  Thank you for trusting Neuro-Bazar with your information.
                </p>
                <button onClick={handleReadPolicy}>
                  I have read and understood the Privacy Policy
                </button>
              </div>
            </div>
          ) : (
            // Display a message or additional content after the policy has been read
            <div className="read-policy-message">
              <p>
                Thank you for taking the time to read our Privacy Policy. If you
                have any further questions, please feel free to contact us.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;


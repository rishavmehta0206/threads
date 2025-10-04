import React, { useState } from "react";
import "./Checkout.scss";
import { X } from "lucide-react";

const Checkout = ({ checkoutModal, setCheckoutModal, total }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", formData);
  };

  const totalAmount = 49.99;

  if (!checkoutModal) return null;

  return (
    <>
      <div className="backdrop" />
      <div className="checkout-container">
        <div className="checkout-card">
          <div onClick={() => setCheckoutModal(false)} className="close">
            <X />
          </div>
          <h2 className="checkout-title">Checkout</h2>

          <div className="summary">
            {/* <div className="summary-item">
              <span>Product Name</span>
              <span>$49.99</span>
            </div> */}
            <div className="summary-total">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name on Card</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group half">
                <label>CVV</label>
                <input
                  type="password"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="pay-btn">
              Pay ${total}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;

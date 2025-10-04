import React, { useState } from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown, ChevronUp, Trash } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  resetCart,
} from "../../redux/cartReducer";
import Checkout from "../../components/Checkout/Checkout";
const uploadUrl = import.meta.env.VITE_APP_UPLOAD_URL;

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const handlePayment = async () => {
    setCheckoutModal(true);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          {products?.length > 0 ? (
            <div className="filledCart">
              <div className="left">
                <h1>Products in your cart</h1>
                {products?.map((item) => (
                  <div className="item" key={item.id}>
                    <img src={uploadUrl + item.img} alt="" />
                    <div className="details">
                      <h1>{item.title}</h1>
                      <p>{item.desc?.substring(0, 100)}</p>
                      <div className="price">
                        {item.quantity} x ${item.price}
                      </div>
                    </div>
                    <div className="actionItem">
                      <div
                        onClick={() => dispatch(increaseQuantity(item?.id))}
                        className="quantity"
                      >
                        <ChevronUp className="icon" />
                      </div>
                      <Trash
                        className="delete"
                        onClick={() => dispatch(removeItem(item.id))}
                      />
                      <div
                        className="quantity"
                        onClick={() => {
                          if (item?.quantity === 1) {
                            dispatch(removeItem(item.id));
                          } else {
                            dispatch(decreaseQuantity(item?.id));
                          }
                        }}
                      >
                        <ChevronDown className="icon" />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="total">
                  <span>SUBTOTAL</span>
                  <span>${totalPrice()}</span>
                </div>
                <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
                <span className="reset" onClick={() => dispatch(resetCart())}>
                  Reset Cart
                </span>
              </div>
              {/* <div className="right"></div> */}
            </div>
          ) : (
            <div className="emptycart">
              <img src="./img/cart.png" className="img" alt="" />
              <h1 className="message">Cart is Empty!!!</h1>
            </div>
          )}
        </div>
      </div>
      <Checkout checkoutModal={checkoutModal} setCheckoutModal={setCheckoutModal} total={totalPrice()} />
    </>
  );
};

export default Cart;

import React from "react";
import { useState } from "react";
import "./Product.scss";
import { Heart, Scale, ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import useFetch from "../../hooks/useFetch";
const uploadUrl = import.meta.env.VITE_APP_UPLOAD_URL;

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log('singleData',data)
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={uploadUrl + data?.img?.url}
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={uploadUrl + data?.img2?.url}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  uploadUrl +
                  data?.[selectedImg]?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.title}</h1>
            <span className="price">${data?.price}</span>
            <p>{data?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data?.title,
                    desc: data?.desc,
                    price: data?.price,
                    img: data?.img?.url,
                    quantity,
                  })
                )
              }
            >
              <ShoppingCart /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <Heart /> ADD TO WISH LIST
              </div>
              <div className="item">
                <Scale /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

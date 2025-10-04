import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const uploadUrl = import.meta.env.VITE_APP_UPLOAD_URL;

const Card = ({ item }) => {
  console.log("singleitem",item);
  return (
    <Link className="link" to={`/product/${item.documentId}`}>
      <div className="card">
        <div className="image">
          {item?.isNew && <span>New Season</span>}
          <img
            src={
              uploadUrl + item?.img?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              uploadUrl + item?.img2?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.price + 20}</h3>
          <h3>${item?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
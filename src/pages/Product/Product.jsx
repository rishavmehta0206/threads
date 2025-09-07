import React, { useState } from "react";
import "./Product.scss";
import { Heart, Scale, ShoppingCart } from "lucide-react";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity,setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img onClick={() => setSelectedImg(0)} src={images[0]} alt="" />
          <img onClick={() => setSelectedImg(1)} src={images[1]} alt="" />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Test</h1>
        <span className="price">$100</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem labore
          perspiciatis impedit minima magni deserunt aliquam, sunt pariatur
          voluptatibus voluptatem!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          // onClick={() =>
          //   dispatch(
          //     addToCart({
          //       id: data.id,
          //       title: data.attributes.title,
          //       desc: data.attributes.desc,
          //       price: data.attributes.price,
          //       img: data.attributes.img.data.attributes.url,
          //       quantity,
          //     })
          //   )
          // }
        >
          <ShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <Heart /> ADD TO WISH LIST
          </div>
          <div className="item"><Scale/> ADD TO COMPARE</div>
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
    </div>
  );
};

export default Product;

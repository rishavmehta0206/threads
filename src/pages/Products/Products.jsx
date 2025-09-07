import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const id = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortByPrice, setSortByPrice] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input id="1" type="checkbox" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input id="1" type="checkbox" />
            <label htmlFor="1">Skirts</label>
          </div>
          <div className="inputItem">
            <input id="1" type="checkbox" />
            <label htmlFor="1">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              onChange={(e) => setSortByPrice(e.target.value)}
              type="radio"
              id="asc"
              value="asc"
              name="price"
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              onChange={(e) => setSortByPrice(e.target.value)}
              type="radio"
              id="desc"
              value="desc"
              name="price"
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600
"
          alt=""
        />
        <List />
      </div>
    </div>
  );
};

export default Products;

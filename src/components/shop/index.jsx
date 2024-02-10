import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { Card } from "antd";
import CardItem from "./card";
const Shop = () => {
  const { data } = useSelector((state) => state.shopSlice);
  const price = data.reduce((acc, value) => (acc += value.userPrice), 0);
  return (
    <div className="container">
      <div className="shop">
        <div>
          {data.map((value) => (
            <CardItem key={value.id} {...value} />
          ))}
        </div>
        <Card className="order">
          <h3>Buyurtmangiz</h3>
          <h4> Mahsulotlar({data.length})</h4>
          <div className="jami">
            <p>Jami</p>
            <h2>{price} so'm</h2>
          </div>
          <button>Rasmiylashtrishga o'tish</button>
        </Card>
      </div>
    </div>
  );
};

export default Shop;

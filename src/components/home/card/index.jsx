import { ShoppingOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../../redux/shop-slice";
import { notification } from "antd";

const Card = (value) => {
  const dispatch = useDispatch();
  const getDataProduct = () => {
    dispatch(getData(value));
    notification.success({ message: "Add to Cart !" });
  };
  return (
    <div className="product">
      <div className="product_img">
        <img src={value.img} alt="" />
      </div>
      <div className="product_title">
        <h3>{value.title}</h3>
        <div className="buy_price">
          <h2>{value.price} so'm</h2>
          <div onClick={getDataProduct} className="cart">
            <ShoppingOutlined className="shop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

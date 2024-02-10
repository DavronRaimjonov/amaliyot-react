import { DeleteOutlined } from "@ant-design/icons";
import { Card, notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { decrement, deleteData, increment } from "../../../redux/shop-slice";

const CardItem = (value) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ marginBottom: "20px" }}>
      <div className="cart_shop">
        <div>
          <img src={value.img} alt="" />
        </div>
        <div className="card_left">
          <div className="top">
            <h3>{value.title}</h3>
            <div
              onClick={() => {
                dispatch(deleteData(value.id));
                notification.success({ message: "Delete product !" });
              }}
              className="delete"
            >
              <DeleteOutlined />
              Yo'q qilish
            </div>
          </div>
          <div className="bottom">
            <div className="counter">
              <button onClick={() => dispatch(decrement(value.id))}>-</button>
              <p>{value.count}</p>
              <button onClick={() => dispatch(increment(value.id))}>+</button>
            </div>
            <h2>{value.userPrice}</h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;

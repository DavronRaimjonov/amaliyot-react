import React from "react";
import { useQueryHendler } from "../../hook/useQueryHandler";
import Card from "./card";
import "./style.scss";
const Home = () => {
  const { data, isLoading, isError } = useQueryHendler({
    url: "products",
    pathname: "products",
  });
  return (
    <div className="container">
      <div className="products">
        {data?.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default Home;

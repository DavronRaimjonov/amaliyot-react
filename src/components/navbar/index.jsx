import { LikeOutlined, ShoppingOutlined } from "@ant-design/icons";
import LogoSvg from "../../assets/svg/logo";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.shopSlice);
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar_logo">
            <LogoSvg />
          </div>
          <div className="navbar_links">
            <div>
              <LikeOutlined className="icon" />
              Saralanganlar
            </div>
            <div onClick={() => navigate("/shop")}>
              <ShoppingOutlined className="icon" />
              Savat
              <span className="count">{data.length}</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

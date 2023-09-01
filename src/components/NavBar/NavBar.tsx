import { navigation } from "../../config/navigation";
import {} from "../../index.css";
import { Link } from "react-router-dom";
import { NavBarStlyed } from "./NavBarStyled";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
    <>
      <NavBarStlyed>
        <div>
          <h1>{title}</h1>
        </div>
        {navigation.map((item) => {
          return (
            <p key={item.key}>
              <Link to={item.url}>{item.label}</Link>
            </p>
          );
        })}
      </NavBarStlyed>
    </>
  );
};

export default NavBar;

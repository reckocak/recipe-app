import {useState} from 'react'
import { Nav, Logo, Hamburger, MenuLink, Menu } from "./NavbarStyles";
import home from '../../assets/rk.jpg'


const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <i>
          {" "}
          <img src={home} style={{ width: "50px" }} alt="Logo" />
        </i>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to={{ pathname: "https://github.com/reckocak" }}>
          Github
        </MenuLink>
        <MenuLink to="/login">Login</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar
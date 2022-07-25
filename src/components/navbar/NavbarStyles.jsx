import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  /* açık yeşil olan navbar */

  background: #e1f1dd;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  height: 40px;
  
`;


export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime ... tek tek about vs yazanların özellikleri */

  text-decoration: none;
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: "Girassol", sans-serif;
  padding: 0.5rem 1.5rem;
  &:hover{
    color: green;
    font-weight: bold;
  }

`;
export const Menu = styled.div`
  /* navbardaki 3 kelime about ...hepsini içine alan sarmalın (kutunun ) özellikleri*/
  background: #e1f1dd;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  padding: 1rem 0;
  i {
    font-family: "Girassol", sans-serif;
  }
  span {
    font-family: "Girassol", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #ad757e;
  }
`;
export const Logo = styled(Link)`
  color: #393e46;
 

  i {
    font-family: "Girassol", sans-serif;
  }
  span {
    font-family: "Girassol", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #00adb5;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: #c9a7aa;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

import styled from "styled-components";

export const AboutContainer = styled.div`
  /* bütün about */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  line-height: 2;
  span {
    color: lightblue;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
text-align: right;
padding: 3rem;
border: 1px solid white;
border-radius: 10px;
  a {
    color: orange;
  }
`;
export const HeaderContainer = styled.div``;


export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 2rem;
`;

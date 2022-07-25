import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* başlık ve 3 arama kutusunu taşıyan kutu */
  background: #00adb5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeader = styled.h2`
  /* food app başlık */
  margin-top: 0.8rem;
  font-size: 2rem;


`;

export const FormContainer = styled.form`
  /* 3 arama kutusunun toplandığı kutu */
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 1rem;
border: 1px solid white 0.7;

 
`;

export const FoodInput = styled.input`
  /* arama yapılacak ürünün yazıldığı input */
  border: 1px solid white 0.7;
  outline: none;
`;

export const Button = styled.button`
  /* search butonu */
  background-color: #e1f1dd;
  cursor: pointer;
  
`;

export const Select = styled.select`
  /* breakfast yazan select */


`;

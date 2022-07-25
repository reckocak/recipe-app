import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: fit-content;

`;

export const RecipeCard = styled.div`
  /* search den sonra çıkan herbir yiyecek kart */
  background: #e1f1dd;
  border-radius: 5px;
  display: flex;
  width: 25vw;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem;
  margin: 1rem;
  &:hover{
    transition: all 0.4s ease-in;
  }
`;

export const RecipeImage = styled.img`
  /* kartların içindeki resimler */
  height: 150px;
  border-radius: 10px;
`;

export const Button = styled.button`
  /* view more  buton */
  background-color: #00adb5;
  cursor: pointer;
  border:none;
  border-radius: 5px;


`;

export const RecipeHeader = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  justify-content: center;
  margin: 50px;
  background-color: #00adb5;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki esas resim */
  width: 80%;
  max-width: 750px;
`;

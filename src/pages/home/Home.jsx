import {useState} from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { HomeImg, MainContainer, ImgDiv } from "./HomeStyles"
import homeSvg from '../../assets/home.svg'
import RecipeCards from "./RecipeCards";

const APP_ID = "7164b2bc"; 
const APP_KEY = "6752e657e8aba29be6a2f75c9a0fc48a";
/****buraya kendi id ve key imizi yaziyoruz**********/
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();

  
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  console.log(meal);

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;


const getData = async () => {
  if (query !== "") {
    const result = await axios.get(url);
    console.log(result.data.hits);
    if (result.data.more) {
      console.log("no food a this name");
    }
    setRecipes(result.data.hits);
    setQuery("");
  } else {
    console.log("Please fill the form");
  }
};
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCards key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;

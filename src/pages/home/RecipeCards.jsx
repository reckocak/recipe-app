
import { RecipeImage, RecipeCard, RecipeHeader, Button } from "./HomeStyles";
import { useNavigate } from "react-router-dom";
import defaultImage from '../../assets/default-image.jpg'


const RecipeCards = ({ recipe }) => {
  let navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };
  return (
    <RecipeCard>
      <RecipeHeader>{recipe.label}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCards;

import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyles'

const Header = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  return (
    <HeaderContainer>
      <MainHeader> Food App</MainHeader>
      <Form
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </HeaderContainer>
  );
};

export default Header
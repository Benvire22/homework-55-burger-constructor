import { useState } from 'react';
import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import lettuceImage from './assets/lettuce.png';
import baconImage from './assets/bacon.png';
import Burger from './components/Burger/Burger';
import IngredientsList from './components/IngredientsList/IngredientsList';
import { Ingredient, IngredientInfo } from './lib/interfaces';

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: lettuceImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState<IngredientInfo[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const addIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          return {
            ...ingredient,
            count: ingredient.count + 1
          };
        }

        return ingredient;
      });
    });
  };

  const removeIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          return {
            ...ingredient,
            count: ingredient.count - 1
          };
        }

        return ingredient;
      });
    });
  };

  const getPrice = () => {
    return ingredients.reduce((acc, current) => {
      INGREDIENTS.forEach(ingredient => {
        if (ingredient.name === current.name) {
          acc += ingredient.price * current.count;
        }
      });

      return acc;
    }, 30);
  };

  return (
    <div className="App">
        <IngredientsList
          ingredients={INGREDIENTS}
          ingredientsInfo={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
        <Burger ingredients={ingredients} price={getPrice}/>
    </div>
  );
};

export default App;
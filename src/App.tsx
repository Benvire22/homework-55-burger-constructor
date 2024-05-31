import {useState} from 'react';
import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import lettuceImage from './assets/lettuce.png';
import baconImage from './assets/bacon.png';
import IngredientItem from './components/IngredientItem/IngredientItem';
import Burger from './components/Burger/Burger';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: lettuceImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

const App = () => {
  const [ingredients, setIngredients] = useState([
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
    return ingredients.reduce((price, ingredient) => {
      for (let i = 0; i < ingredient.count; i++) {
        INGREDIENTS.map(ingr => {
          if (ingr.name === ingredient.name) {
            price += ingr.price;
          }
        });
      }

      return price;
    }, 30);
  };

  return (
    <div className="App">
      <div className="content">
        <div className="col">
          <h2 className="title">Ingredients:</h2>
          {INGREDIENTS.map(({name, price, image}, i) => (
            <IngredientItem
              key={i}
              image={image}
              name={name}
              price={price}
              count={ingredients[i].count}
              addIngredient={() => addIngredient(name)}
              removeIngredient={() => removeIngredient(name)}
            />
          ))}
        </div>
        <Burger ingredients={ingredients} price={getPrice}/>
      </div>
    </div>
  );
};

export default App;
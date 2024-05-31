import React from 'react';
import IngredientItem from './IngredientItem/IngredientItem';
import { Ingredient, IngredientInfo } from '../../lib/interfaces';

interface Props {
  ingredients: Ingredient[];
  ingredientsInfo: IngredientInfo[];
  addIngredient: (name: string) => void;
  removeIngredient: (name: string) => void;
}

const IngredientsList: React.FC<Props> = ({
     ingredients,
     ingredientsInfo,
     addIngredient,
     removeIngredient
   }) => {

  return (
    <div className="IngredientsBlock col">
      <h2 className="title">Ingredients:</h2>
      {ingredients.map(({name, price, image}, i) => (
        <IngredientItem
          key={i}
          image={image}
          name={name}
          price={price}
          count={ingredientsInfo[i].count}
          addIngredient={() => addIngredient(name)}
          removeIngredient={() => removeIngredient(name)}
        />
      ))}
    </div>
  );
};

export default IngredientsList;


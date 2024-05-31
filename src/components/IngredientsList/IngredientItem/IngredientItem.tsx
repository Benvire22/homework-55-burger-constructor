import React from 'react';
import './IngredientItem.css';

interface Props {
  name: string;
  price: number;
  image: string;
  count: number;
  addIngredient: () => void;
  removeIngredient: () => void;
}

const IngredientItem: React.FC<Props> = ({
   name,
   price,
   image, count,
   addIngredient, removeIngredient
}) => {

  return (
    <div className="Ingredient">
      <div className="Ingredient-info">
        <img onClick={addIngredient} className="Ingredient-image" src={image} alt={name}/>
        <span className="Ingredient-name">{name}</span>
        <strong className="Ingredient-price">Price {price}</strong>
        <span className="Ingredient-count">x{count}</span>
        <div className="remove-ingredient">
          {count > 0 ? (
            <button className="remove-btn" onClick={removeIngredient} type="button"></button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default IngredientItem;
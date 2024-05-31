import React from 'react';
import "./IngredientBlock.css";

interface Props {
    name: string;
    price: number;
    image: string;
    count: number;
    addIngredient: () => void;
    removeIngredient: () => void;
}
const IngredientBlock: React.FC<Props> = ({name, price, image, count, addIngredient, removeIngredient}) => {
    return (
        <div className="Ingredient">
            <div className="Ingredient-info">
                <img onClick={addIngredient} className="Ingredient-image" src={image} alt={name}/>
                <span className="Ingredient-name">{name}</span>
                <strong className="Ingredient-price">Price {price}</strong>
                <span className="Ingredient-count">x{count}</span>
            {count > 0 ? (
                <button onClick={removeIngredient} type="button">Remove</button>
            ) : null}
            </div>
        </div>
    );
};

export default IngredientBlock;
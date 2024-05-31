import "./Burger.css";
import React from "react";


interface Ingredient {
    name: string;
    count: number;
}

interface Props {
    ingredients: Ingredient[];
}
const Burger: React.FC<Props> = ({ingredients}) => {
    const getIngredient = (name: string, count: number) => {
        const ingredients: React.ReactNode[] = [];

        for (let i = 0; i < count; i++) {
            ingredients.push(<div className={name}></div>);
        }

        return ingredients;
    };

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {ingredients.map(({name, count}) => getIngredient(name, count))}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;
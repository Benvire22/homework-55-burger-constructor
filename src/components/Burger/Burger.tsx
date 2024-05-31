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

    const addIngredient = (ingredients: Ingredient[]) => {
        return ingredients.reduce((acc: React.ReactNode[], current) => {
            for (let i = 0; i < current.count; i++) {
                acc.push(<div key={current.count + current.name + i} className={current.name}></div>);
            }
            return acc;
        }, []);
    };

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {addIngredient(ingredients)}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;
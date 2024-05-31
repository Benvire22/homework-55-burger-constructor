import './Burger.css';
import React from 'react';

interface Ingredient {
  name: string;
  count: number;
}

interface Props {
  ingredients: Ingredient[];
  price: () => number;
}

const Burger: React.FC<Props> = ({ingredients, price}) => {

  const addIngredient = (ingredients: Ingredient[]) => {
    return ingredients.reduce((acc: React.ReactNode[], current) => {
      for (let i = 0; i < current.count; i++) {
        acc.push(<div key={current.count + current.name + i} className={current.name}></div>);
      }

      return acc;
    }, []);
  };

  return (
    <div className="col burgerBlock">
      <h2 className="title">Burger</h2>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {addIngredient(ingredients)}
        <div className="BreadBottom"></div>
      </div>
      <h3 className="burgerPrice">Price: {price()}.</h3>
    </div>

  );
};

export default Burger;
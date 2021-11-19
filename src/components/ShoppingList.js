import React from "react";
import PlantItem from "./PlantItem";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css"

const ShoppingList = () => {
    const categories = [];
    plantList.forEach((element) => {
        const rowData = {
            category: element.category,
        };
        if (!categories.find((category) => rowData.category === category.category)) {
            categories.push(rowData);
        }
    });
    return (
        <div className="shopping-container">
            <ul className="categories">
                {categories.map((category, index) => (
                    <li key={`${category}-${index}`}>{category.category}</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map(({id, cover, name, water, light, isSpecialOffer, price}) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        offer={isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                        price={<div className="lmj-price">{price}€</div>}                  
                    />
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;

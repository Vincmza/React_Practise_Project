import React from "react";
import { plantList } from "../datas/plantList";
import { FaFireAlt } from "react-icons/fa";
import "../styles/ShoppingList.css"

const ShoppingList = () => {
    const categories = [];
    plantList.forEach((element) => {
        const rowData = {
            category: element.category,
        };
        if (!categories.find((category) => rowData.category == category.category)) {
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
                {plantList.map((plant) => (
                    <li key={plant.id} className="lmj-plant-item">
                        {plant.name}
                        {plant.isBestSale ? <span><FaFireAlt/></span> : null}
                        {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;

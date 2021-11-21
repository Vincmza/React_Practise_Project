import React, { useState } from "react";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

const ShoppingList = ({ cart, updateCart }) => {
    const [activeCategory, setActiveCategory] = useState("");
    // const categories = [];
    // plantList.forEach((element) => {
    //     const rowData = {
    //         category: element.category,
    //     };
    //     if (!categories.find((category) => rowData.category === category.category)) {
    //         categories.push(rowData);
    //     }
    // });
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 },
            ]);
        } else {
            updateCart([...cart, { name, price, amount: 1 }]);
        }
    }
    return (
        <div className="shopping-container">
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className="lmj-plant-list">
                {plantList.map(
                    ({ id, cover, name, water, light, isSpecialOffer, price, category }) => (
                        !activeCategory || activeCategory === category ? (
                            <div>
                            <PlantItem
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                offer={isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                                price={<div className="lmj-price">{price}€</div>}
                            />
                            <button className="add-button" onClick={() => addToCart(name, price)}>
                                Ajouter
                            </button>
                            </div>

                        ) : null                        
                    )
                )}
            </ul>
        </div>
    );
};

export default ShoppingList;

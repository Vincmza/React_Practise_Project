import React from "react";
import { FaSun, FaHandHoldingWater} from "react-icons/fa";

const quantity = {
    1 : "peu",
    2 : "modéremment",
    3 : "beaucoup"
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];

    const scaleType =
        careType === "light" ? (
            <FaSun className="sun"/>
        ) : (
            <FaHandHoldingWater className="water" />
        );

    return (
        <div onClick={()=>alert(`Votre plante nécessite ${quantity[scaleValue]} ${careType === 'light' ? "de lumière" : "d'arrosage"}`)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    );
}

export default CareScale;

import React from "react";
import {plantList} from "../datas/plantList";

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                // <li key={plant.id}>{plant.name} {plant.isSpecialOffer ? <span>En solde</span> : null}</li>
                <li key={plant.id}>
                    {plant.name} {plant.isSpecialOffer && <span>En solde</span>}
                    <CareScale careType="light" scaleValue={plant.light}/>
                    <CareScale careType="water" scaleValue={plant.water}/>
                </li>
            ))}
        </ul>
    )
}

function CareScale(props) {
    const scaleValue = props.scaleValue;
    const careType = props.careType;
    // Possible de remplacer les 2 lignes ci-dessus par une seule grace à la déstructuration :
    // const {scaleValue, careType} = props;
    // On aurait aussi peut les passer en paramètres : function CareScale({scaleValue, careType}){...}
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀' : '💧'
    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>)
}

export default ShoppingList;
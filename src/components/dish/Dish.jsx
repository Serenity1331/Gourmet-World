import React from 'react'
import './styles.css'

function Dish(props) {

    return (
        <div className="dish">
            <img src={ props.link } alt="Dish" height="150" width="250"/>
            <div className="dish__description">
                <h2 className="dish__title">{props.name}</h2>
                <div className="dish__text">{props.text}</div>
            </div>
        </div>
    )
}

export default Dish
import React from 'react'
import './styles.css'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePrice() {
    const price = getRandomInt(5,15);
    return `$${price}`;
}

function generateIpsumText() {

    const arr = [
        'Cupcake ipsum dolor sit',
        'Amet gummi bears halvah wafer chocolate bar bear claw marzipan marshmallow fruitcake. Liquorice ipsum macaroon bonbon',
        'Gingerbread ipsum dolor halvah chocolate lollipop bonbon brownie chocolate cake pie ',
        'Sesame snaps cake I love sweet wafer toffee pie. Cupcake ipsum dolor sit',
        'Donut ipsum dolor marzipan jelly-o marzipan jujubes jelly biscuit',
        'Topping jelly lollipop chocolate cake gingerbread sweet. Liquorice ipsum macaroon bonbon',
        'Liquorice ipsum macaroon bonbon, ipsum dolor marzipan',
        'Apple ipsum pie cookie cupcake ice cream marzipan bonbon pie.',
        'Dolor tootsie roll ipsum chocolate tiramisu croissant'
    ]

    const randomNum = getRandomInt(0, arr.length - 1)

    return arr[randomNum]
}

function Dish(props) {

    return (
        <div className="dish">

            <div className="img-box">
                <div className="background-image" style={{backgroundImage:`url(${props.link})`}} />
         
                <img src="/Gourmet-World/icons/shopping-cart.svg" 
                     alt="Add to cart" 
                     className="img-cart" />
            </div>

            <div className="dish__description">
                <h2 className="dish__title">{ props.name }</h2>
                <span className="dish__price">{ generatePrice() }</span>
                <div className="dish__text">{ generateIpsumText() }</div>
            </div>
            
        </div>
    )
}

export default Dish
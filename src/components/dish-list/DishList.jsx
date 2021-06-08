import React, { Component } from 'react'
import Dish from '../dish/Dish'
import './styles.css'

class DishList extends Component {

    render() {

        const showImages = () => {
            return this.props.link.map(dish => (
                <Dish link={dish.link} 
                      key={dish.id}
                      name={dish.name} 
                      text={dish.text} />)
            )
        }

        return (
            <div className="dish-list">
                { showImages() }
            </div>
        )
    }
}

export default DishList

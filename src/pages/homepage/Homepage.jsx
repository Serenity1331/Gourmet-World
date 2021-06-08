import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DishList from '../../components/dish-list/DishList';
import SearchBox from '../../components/search-box/SearchBox';
import './homepage.styles.css'

class Homepage extends Component {

  constructor() {
    super();

    this.state = {
      dishes: [],
      searchBox: ''
    }
  }

  componentDidMount() {

    const imageURLs = [

      { link: "Gourmet-World/images/tacos.jpeg", id: "1", name: "Tacos", text: "Rolled tortilla filled with various mixtures, such as seasoned mince, chicken, or beans" },
      { link: "Gourmet-World/images/huitlacoche.jpg", id: "2", name: "Huitlacoche", text: "Tortilla with mexican truffles" },
      { link: "Gourmet-World/images/burritoVegan.jpg", id: "3", name: "Vegan Burrito", text: "A flour tortilla rolled or folded around veggies, beans, and cheese" },
      { link: "Gourmet-World/images/chickenFajitas.jpg", id: "4", name: "Chicken Fajitas", text: "A marinated strip of chicken grilled and served with a flour tortilla and various savory fillings" },
      { link: "Gourmet-World/images/chilaquiles.jpg", id: "5", name: "Chilaquiles", text: "Traditional Mexican breakfast dish consisting of corn tortillas cut into quarters and lightly fried" },
      { link: "Gourmet-World/images/churrosChocolate.webp", id: "6", name: "Churros", text: "Sweet Spanish snack consisting of a strip of fried dough dusted with cinnamon and covered with chocolate." },
      { link: "Gourmet-World/images/nachos.webp", id: "7", name: "Nachos", text: "Tortilla chips topped with melted cheese and often also with other savoury toppings" },
      { link: "Gourmet-World/images/payDeElote.jpg", id: "8", name: "Pay-De-Elote", text: "Mexican pie with a creamy sweet corn custard flavored with cinnamon" }

    ]

    this.setState({ dishes: imageURLs })

  }

  handleSearch = e => {
    this.setState({ searchBox: e.target.value })
  }

  render() {

    const { dishes, searchBox } = this.state;
    const filteredDishes = dishes.filter(dish => {
      return dish.name.toLowerCase().includes(searchBox.toLowerCase())
    })


    return (
    <>
        <nav className="navBar">
            <Link className="pageLink" to="/Gourmet-World/About">About</Link>
            <Link className="pageLink" to="/Gourmet-World/Contacts">Contacts</Link>
        </nav>
        <h1 className="title">Our Menu</h1>
        <SearchBox handleSearch={this.handleSearch} />
        <DishList link={filteredDishes} />
    </>
    )
  }
}

export default Homepage;

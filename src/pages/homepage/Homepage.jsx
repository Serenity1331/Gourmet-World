import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DishList from '../../components/dish-list/DishList';
import SearchBox from '../../components/search-box/SearchBox';
import Country from '../../components/country/Country';
import './homepage.styles.css'

class Homepage extends Component {

  constructor() {
    super();

    this.state = {
      dishes: [],
      searchBox: '',
      active: 'Italian',
      dishData: ''
    }
  }

  fetchAllData = async () => {

    const lst = ['Mexican', 'Indian', 'Chinese', 'Italian', 'Japanese'];
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
    const res = {};

    for (let elem of lst) {
      
      const link = url + elem;
      const response = await fetch(link).then(res => res.json());
      res[elem] = response.meals;

    }
    
    this.setState({ dishData: res })
    this.setState({ dishes: res[this.state.active] })

  }

  async componentDidMount() {

    await this.fetchAllData()

  }

  displayMenu = (e) => {

    const text = e.target.textContent;
    const data = this.state.dishData[text];

    this.setState({ dishes: data })
    this.setState({ active: text })

}

  handleSearch = e => {
    this.setState({ searchBox: e.target.value })
  }

  render() {

    const { dishes, searchBox } = this.state;
    const filteredDishes = dishes.filter(dish => {
      return dish.strMeal.toLowerCase().includes(searchBox.toLowerCase())
    })

    return (
    <>
        <nav className="navBar">
            <Link className="pageLink" to="/Gourmet-World/About">About</Link>
            <Link className="pageLink" to="/Gourmet-World/Contacts">Contacts</Link>
        </nav>
        <h1 className="title">Our Menu</h1>

        <div className="countryList">
          <Country name='Mexican' onclick={(e) => this.displayMenu(e)} active={this.state.active} />
          <Country name='Indian' onclick={(e) => this.displayMenu(e)} active={this.state.active} />
          <Country name='Italian' onclick={(e) => this.displayMenu(e)} active={this.state.active} />
          <Country name='Japanese' onclick={(e) => this.displayMenu(e)} active={this.state.active} />
          <Country name='Chinese' onclick={(e) => this.displayMenu(e)} active={this.state.active} />
        </div>

        <SearchBox handleSearch={this.handleSearch} />
        <DishList link={filteredDishes} />
    </>
    )
  }
}

export default Homepage;

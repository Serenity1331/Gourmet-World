import React, { Component } from 'react'
import './country.styles.css'

export default class Country extends Component {

    constructor() {
        super()
    
        this.state = {
            chosen: 'chosen'
        }
    }

    handleClick = (e) => {

        this.props.onclick(e)
        this.setState({ chosen: 'chosen' })

    }
    
    
    render() {

        return (
            <div 
                className={`countryName ${this.props.active === this.props.name ? this.state.chosen : ''}`}
                onClick={this.handleClick} 
                id={this.props.name}>
                    
                    {this.props.name}
            </div>
        )
    }
}

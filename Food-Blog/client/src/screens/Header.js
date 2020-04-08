import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  constructor() {
    super()
  }

  unauthenticatedOptions = () => (
    < div className="links" >
      <NavLink className='Home' to="/">Home</NavLink>
      <NavLink className='Recipes' to="/recipes">Recipes</NavLink>
      <NavLink className='Signin' to="/Signin">SignIn</NavLink>
    </div>
  )

  render() {
    return (
      <div>
        BOBBY's BEST FOOD BLOG
        {this.unauthenticatedOptions()}
      </div>
    )
  }
}


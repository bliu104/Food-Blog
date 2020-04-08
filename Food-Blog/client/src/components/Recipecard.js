import React, { Component } from 'react'

export default class Recipecard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: props
    }
  }




  render() {
    const { card } = this.state
    return (
      <div className="Cards">
        <div>Food: {card.name}</div>
        <div>Catagory: {card.catagories}</div>
        <div>Tag: {card.tag}</div>
        <img src={card.image} />
        {/* <div>Ingredients: {card.ingredient}</div>
        <div>Instructions: {card.how_to_make}</div> */}

      </div>
    )
  }
}

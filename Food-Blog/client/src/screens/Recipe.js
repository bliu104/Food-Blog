import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { showRecipeID } from "../services/api-helper"

export default class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: null
    }
    console.log(props)

  }

  async componentDidMount() {
    try {
      const recipe = await showRecipeID(this.props.match.params.id);
      this.setState({ recipe: recipe });
    } catch (err) {
      console.error(err);
    }
  }

  createButton = () => {
    const { history, match } = this.props;
    return (
      <button onClick={() => history.push(`${match.url}/EditRecipe`)}> Edit</ button>
    )
  }



  Info = () => {
    if (this.state.recipe) {
      const { recipe } = this.state
      return <>
        <div>{recipe.name}</div>
        <div>{recipe.catagories}</div>
        <div>{recipe.tag}</div>
        <img src={recipe.image} />
        <div>{recipe.ingredient}</div>
        <div>{recipe.how_to_make}</div>
        {this.createButton()}
      </>
    } else {
      return ('loading')
    }
  }

  deleteButton = () => {
    const { history, match } = this.props;
    console.log(match)
    return (<button onClick={() => history.push(`${match.url}/Delete`)}> Delete</ button>)
  }

  render() {

    return (
      <div>
        {this.Info()}
        {this.deleteButton()}
      </div>
    )
  }
}

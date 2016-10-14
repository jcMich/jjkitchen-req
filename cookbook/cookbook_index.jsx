import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import { RecipesList } from './components/recipes_list'
import { MenuBar, NavBar } from './components/menu';

export class App extends Component {
	constructor(props){
		super(props);

		this.state = { recipes: [] }
		axios.get('http://127.0.0.1:8000/cookbook/api/v1/recipe/', {

		}).then(response => {
			this.setState({recipes: response.data})
		});
	}

	render(){
		return (
			<div>
				<MenuBar />
				{/*<NavBar />*/}
				{/*<RecipesList recipes={this.state.recipes} />*/}
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('container'))

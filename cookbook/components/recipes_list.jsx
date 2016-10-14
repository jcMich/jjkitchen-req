import React from 'react'
import { RecipeItem } from '../components/recipe_item';

export const RecipesList = ({recipes}) => {
	const recipes_items = recipes.map((recipe)  => {
		return (
			<RecipeItem recipe={ recipe } key={recipe.title}/>
		);
	});

	return (
		<div className='row'>
			{ recipes_items }
		</div>
	);
}

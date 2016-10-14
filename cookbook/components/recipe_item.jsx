import  React from 'react';

export const RecipeItem = ({recipe}) => {
	return (
	  <div className="col-sm-4">
	  	<img className="card-img-top img-fluid" src={ recipe.image || 'http://i0.wp.com/recetasparaceliacos.info/wp-content/uploads/2015/11/cocinero.jpg?zoom=2&resize=462%2C515' } alt={ recipe.title } />
	    <div className="card card-block">
	      <h3 className="card-title">{ recipe.title }</h3>
	      <p className="card-text">{ recipe.desciption }</p>
	      <small className="text-muted" style={{ color: 'grey'}}>View more</small>
	    </div>
	  </div>
	);
}

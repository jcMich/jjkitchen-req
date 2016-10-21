import React from 'react';
import { connect } from 'react-redux';
import { push as Menu } from 'react-burger-menu';

import { toggleAlerts } from '../actions/alerts';  


const menuStyles = {
    bmBurgerButton: { position: 'fixed', width: '36px', height: '30px', left: '36px', top: '36px' },
    bmBurgerBars: { background: '#373a47' },
    bmCrossButton: { height: '24px', width: '24px' },
    bmCross: { background: '#bdc3c7' },
    bmMenu: { background: '#373a47' },
    bmMorphShape: { fill: '#373a47' },
    bmItemList: { color: '#b8b7ad', padding: '0.8em' },
    bmOverlay: { background: 'rgba(0, 0, 0, 0.3)'}
}

const linksStyle = {
	color: 'orange',
	padding: '0.8em',
    display: 'block',
	borderBottom: '1px solid #1c1c1c',
	boxShadow: '0 1px 0 rgba(255, 255, 255, 0.1)',
}


const MenuButton = (props) => {
	const handleClick = () => {
		props.dispatch(toggleAlerts(!props.isOpen));
	}

	return (
		<a onClick={ handleClick.bind(this)} href="javascript:;">
			<i className="fa fa-list fa-2x" />
		</a>
	);
};

export const AlertsMenuButton = connect( store => ({
	isOpen: store.alerts
}))(MenuButton);


const AlertsBurgerMenu = (props) => {

	return(
		<Menu
		pageWrapId={ "cuerpo" }
		outerContainerId={ "container" }
		isOpen={props.isOpen} 
		width={280}
		customBurgerIcon={ false }
		customCrossIcon={ false }
		right
		onStateChange={ (state) => {
			if( state.isOpen !== props.isOpen){
				props.dispatch(toggleAlerts(state.isOpen))
			}	
		}}
		styles={ menuStyles }
		>
			<a href='#' styles={ linksStyle }> <i className='fa fa-plus-square-o'/><span><strong> Add Recipe</strong></span></a>
			<a href='#' styles={ linksStyle }> <i className='fa fa-plus-square-o'/><span><strong> Add Ingredient</strong></span></a>
			<a href='#' styles={ linksStyle }> <i className='fa fa-plus-square-o'/><span><strong> Show Ingredients</strong></span></a>
		</Menu>
	);
};

export const AlertsMenu = connect(store => ({
	isOpen: store.alerts
}))(AlertsBurgerMenu);
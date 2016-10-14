import React from 'react';
import Menu from 'react-metismenu';
import Navbar from 'react-navbar';

import 'react-metismenu/dist/react-metismenu-standart.css'

const MENU_CONTENT = [
	{
		icon: 'fa-beer',
		label: 'beer',
		to: 'https://google.com'
	},
	{
		icon: 'fa-bars;',
		label: 'select',
		content: [
			{
				icon: 'fa-book',
				label: 'book',
				content: [
					{
						icon: 'fa-book',
						label: 'book',
						to: "http:google.com"
					}
				]
			}
		]
	},
	{
		icon: 'fa-algo',
		label: 'algo',
		to: 'https://google.com'
	},
	{
		icon: 'fa-algo',
		label: 'algo',
		content: [
			{
				icon: 'fa-book',
				label: 'book',
				content: [
					{
						icon: 'fa-book',
						label: 'book',
						to: "http:google.com"
					}
				]
			}
		]
	},
]

const NBmenuItems = [
	{
		title: 'menu.dd1',
		items: [
			{
				title: 'menu.i11',
				href: 'http://google.com'
			},
			{
				title: 'menu.i12',
				href: 'http://google.com'
			}
		]
	},
	{
		title: 'menu.i1',
		href: "http://google.com"
	},
	{
		title: 'menu.i2',
		href: 'http://www.dubalu.com'
	}
]

const NBsecundaryMenuItems = [
	{
		title: 'menu.d22',
		items: [
			{
				title: 'menu.i21',
				href: 'http://google.com'
			},
			{
				title: 'menu.i22',
				href: 'http://google.com'
			}
		]
	},
	{
		title: 'menu.i3',
		href: 'http://dubalu.com'
	}
]

const messages = {
	menu: {
		dd1: 'Drop-down-1', i11: 'Item-1-1', i12: 'Item-1-2',
		i1: 'Item-1', i2: 'Item-2', i3: 'Item-3',
		dd2: 'Drop-down-2', i21: 'Item-2-1', i22: 'Item-2-2',
	},
}


export const MenuBar = () => {
	return(
		<div className='col-md-2'>
			<Menu content={ MENU_CONTENT } activateLinkFromLocation />
		</div>
	);
}

export const NavBar = () => {
	return(
		<div>
			<Navbar menuItems={ NBmenuItems } secondaryMenuItems={ NBsecundaryMenuItems } messages= { messages } />
		</div>
	);
}

import React from 'react';
import Link from 'gatsby-link'

const Menu = () => (
		<div style ={{
			background: 'lightGrey',
			paddingTop: '10px'
		}}>

			<ul	style={{
				listStyle: 'none',
				display: 'flex',
				justifyContent: 'space-evenly'
			}}>
				<l1><Link to="/">Home</Link></l1>
				<l1><Link to="/about">About</Link></l1>
				<l1><Link to="/blog">Blog</Link></l1>
			</ul>

		</div>
)

export default Menu;
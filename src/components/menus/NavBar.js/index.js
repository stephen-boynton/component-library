import React from 'react';
import styled from 'styled-components';
import { PRIMARY, PRIMARY_LIGHT, SECONDARY, SECONDARY_LIGHT } from '../../../defaults/colors'

const NavWrapper = styled.ul`
	display: flex;
	list-style: none;
`

// Components are functions, and they must start with a capital letter
function NavBar({ color, type, ...props }) {
	return (
		<nav {...props} aria-label="Navigation Menu">
			<NavWrapper {...props}>
				{React.Children.map(props.children, child => <li>{child}</li>)}
			</NavWrapper>
		</nav>
	)
}

export default NavBar;

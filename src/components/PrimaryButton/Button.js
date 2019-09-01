import React from 'react';
import styled from 'styled-components';
import { PRIMARY, PRIMARY_LIGHT, SECONDARY, SECONDARY_LIGHT } from '../../defaults/colors'

const ButtonWrapper = styled.button`
	background-color: ${PRIMARY};
	color: white;
	display: flex;
	border: none;
	font-size: 1em;
	padding: 10px 30px;

	:hover {
		background-color: ${PRIMARY_LIGHT};
		cursor: pointer;
	}
`

// Components are functions, and they must start with a capital letter
function Button({ color, type, ...props }) {
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export default Button;

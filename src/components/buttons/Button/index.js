import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../menus/DropDown'

const ButtonWrapper = styled.button`
	background-color: ${props => props.bgColor || 'white'};
	color: ${props => props.fontColor || 'black'};
	border: 1px solid; 
	border-color: ${props => props.borderColor || 'black'};
	display: flex;
	font-size: 1em;
	padding: 10px 30px;
	align-items: center;

	:hover {
		background-color: ${props => props.hoverColor || 'lightgray'};
		cursor: pointer;
	}
`

const DownCaret = styled(FontAwesomeIcon)`
	padding-left: 10px;
	color: ${props => props.fontColor || 'black'};
`

// Components are functions, and they must start with a capital letter
function Button({ color, type, items = [], ...props }) {
	const [visible, setVisible] = useState('');

	const handleHover = () => setVisible('true');
	const handleLeave = () => setVisible('');
	return (
		<div onMouseLeave={handleLeave}>
			<ButtonWrapper onMouseOver={handleHover} {...props}>
				{props.children}
				{items.length > 0 && <DownCaret fontColor={props.fontColor} icon={faCaretDown} />}
			</ButtonWrapper>
			{items.length > 0 && <Dropdown visible={visible} items={items} />}
		</div>
	);
}

export default Button;

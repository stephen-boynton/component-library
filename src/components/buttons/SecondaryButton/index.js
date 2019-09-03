import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { SECONDARY, SECONDARY_LIGHT } from '../../../defaults/colors'

// Components are functions, and they must start with a capital letter
function SecondaryButton(props) {
	return <Button
		{...props}
		bgColor={SECONDARY}
		borderColor={SECONDARY}
		fontColor="white"
		hoverColor={SECONDARY_LIGHT} >
		{props.children}
	</Button>;
}

export default SecondaryButton;

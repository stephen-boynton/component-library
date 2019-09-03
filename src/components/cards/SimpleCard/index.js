import React from 'react';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, PRIMARY_LIGHT, SECONDARY_LIGHT } from '../../../defaults/colors';

const SimpleCardWrapper = styled.div`
display: flex;
border: 1px solid;
border-color: 'black';
align-items: center;
max-width: 600px;
${props => props.type === 'link' ? ':hover { cursor: pointer; box-shadow: ' + props.accentHoverColor + ' 24px 24px 0px 1px; }' : ''};
`

const Accent = styled.div`
	flex-basis: 2%;
	height: 77%;
	background-color: ${props => props.accentColor || 'black'};
`

const MainSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 15px;
`

const DefaultHeader = styled.h2`
	padding: 0;
	margin: 0;
`

const DefaultDescription = styled.p`
padding-right: 5px;
font-family: sans-serif;
`

const SimpleCard = (defaultAccentColor, defaultAccentHoverColor) =>
	(Header = DefaultHeader, Description = DefaultDescription) =>
		({ accentColor = defaultAccentColor, accentHoverColor = defaultAccentHoverColor, headerText, descriptionText, type, ...props }) => (
			<SimpleCardWrapper type={type} accentHoverColor={accentHoverColor}>
				<Accent accentColor={accentColor} />
				<MainSectionWrapper>
					<Header>{headerText}</Header>
					<Description>{descriptionText}</Description>
				</MainSectionWrapper>
			</SimpleCardWrapper>
		);

export default SimpleCard('black', 'lightgray');

export const PrimarySimpleCard = SimpleCard(PRIMARY, PRIMARY_LIGHT);
export const SecondarySimpleCard = SimpleCard(SECONDARY, SECONDARY_LIGHT);
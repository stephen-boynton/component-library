import React from 'react';
import styled from 'styled-components';
import { PRIMARY, SECONDARY, PRIMARY_LIGHT, SECONDARY_LIGHT } from '../../../defaults/colors';

const CardImageSideWrapper = styled.div`
display: flex;
border: 1px solid;
border-color: 'black';
align-items: center;
max-width: 600px;
${props => props.type === 'link' ? ':hover { cursor: pointer; box-shadow: ' + props.accentHoverColor + ' 24px 24px 0px 1px; }' : ''};
`

const ImageContainer = styled.div`
	flex-basis: 50%;
	background-color: ${props => props.accentColor || 'black'};
`

const DefaultImage = styled.div`
	background-image: url(${props => props.imageSrc});
`

const MainSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 15px;
`

const CardImageSide = (defaultAccentColor, defaultAccentHoverColor) =>
	(Header, Description, Image = DefaultImage) =>
		({ imageSrc = "https://source.unsplash.com/random", overlayText, type, ...props }) => (
			<CardImageSideWrapper type={type}>
				<ImageContainer>
					<Image src={imageSrc} overlayText={overlayText} />
				</ImageContainer>

				<MainSectionWrapper>
					<Header>{headerText}</Header>
					<Description>{descriptionText}</Description>
				</MainSectionWrapper>
			</CardImageSideWrapper>
		);

export default CardImageSide('black', 'lightgray');

// export const PrimaryCardImageSide = CardImageSide(PRIMARY, PRIMARY_LIGHT);
// export const SecondaryCardImageSide = CardImageSide(SECONDARY, SECONDARY_LIGHT);
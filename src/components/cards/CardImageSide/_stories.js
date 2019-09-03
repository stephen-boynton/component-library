import React from 'react';
import styled from 'styled-components'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SimpleCardHOF, { PrimarySimpleCard, SecondarySimpleCard } from '.';
import Wrapper from '../../../../testingUtils/storyWrapper';

const Header = styled.h2`
	padding: 0;
	margin: 0;
`
const Description = styled.p`
	font-style: italic;
`

const SimpleCard = SimpleCardHOF(Header, Description);
// p;lo m

storiesOf('Cards/SimpleCards/Default')
	.addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
	.add('default', () => (
		<SimpleCard headerText="This is a Card" descriptionText="this is the description of card that is in this library and has a lot of text in it just to see how long it would go with all of these words, look at those turkerys" />
	))
	.add('as link', () => (
		<SimpleCard type="link" headerText="This is a Card" descriptionText="this is the description of card that is in this library and has a lot of text in it just to see how long it would go with all of these words, look at those turkerys" />
	))
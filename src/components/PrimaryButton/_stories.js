import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Wrapper from '../../../testingUtils/storyWrapper';

storiesOf('Buttons/Primary Button')
	.addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
	.add('default', () => (
		<Button onClick={action('clicked')}>Primary Button</Button>
	))
	.add('with a lot of text', () => (
		<Button onClick={action('clicked')}>This is my button that I made myself for using as a button</Button>

	))

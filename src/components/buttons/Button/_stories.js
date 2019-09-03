import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './';
import Wrapper from '../../../../testingUtils/storyWrapper';
import { items } from '../../menus/DropDown/_stories';

storiesOf('Buttons/Button')
	.addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
	.add('default', () => (
		<Button onClick={action('clicked')}>Blank Button</Button>
	))
	.add('with a lot of text', () => (
		<Button onClick={action('clicked')}>This is my button that I made myself for using as a button</Button>
	))
	.add('with dropdown', () => (
		<Button items={items} onClick={action('clicked')}>With DropDown</Button>
	))

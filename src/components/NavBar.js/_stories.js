import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NavBar from './';
import Button from '../PrimaryButton';
import Wrapper from '../../../testingUtils/storyWrapper';

storiesOf('Menus/NavBar')
	.addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
	.add('default', () => (
		<NavBar onClick={action('clicked')}>
			<Button>Home</Button>
			<Button>Blog</Button>
			<Button>About Me</Button>
			<Button>For Hire</Button>
		</NavBar>
	))
	.add('with a lot of text', () => (
		<NavBar onClick={action('clicked')}>
			<Button>Home</Button>
			<Button>Blog</Button>
			<Button>About Me</Button>
			<Button>For Hire</Button>
		</NavBar>

	))

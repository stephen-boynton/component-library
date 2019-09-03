import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DropDown from './';
import Wrapper from '../../../../testingUtils/storyWrapper';

export const items = [
  { name: 'Our Story', onClick: action('clicked sublink') },
  { name: 'Where We Started', onClick: action('clicked sublink') },
  { name: 'Mission Statement', onClick: action('clicked sublink') },
  { name: 'Copyright', onClick: action('clicked sublink') },
]

storiesOf('Menus/DropDowns')
  .addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
  .add('default', () => (
    <DropDown visible="true" items={items} />
  ));

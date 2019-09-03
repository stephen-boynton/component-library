import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { PRIMARY, PRIMARY_LIGHT } from '../../../defaults/colors'

// Components are functions, and they must start with a capital letter
function PrimaryButton(props) {
  return <Button
    {...props}
    bgColor={PRIMARY}
    borderColor={PRIMARY}
    fontColor="white"
    hoverColor={PRIMARY_LIGHT} >
    {props.children}
  </Button>;
}

export default PrimaryButton;

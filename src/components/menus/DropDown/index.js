import React from 'react';
import styled from 'styled-components';

const SubNav = styled.nav`
  display: ${props => props.visible ? 'relative' : 'none'};
`

const DropDown = styled.ul`
	display: flex;
  flex-direction: column;
  justify-content: space-around;
	list-style: none;
  margin: 0;
  padding: 0;
`
const SubLinkContainer = styled.li`
  padding: 10px 0 10px 5px;
  width: 100%;
  border-bottom: 1px solid lightgray;

  :hover {
    background-color: lightgray;
    cursor: pointer;
  }
`

const SubLink = styled.a`
  text-decoration: none;
  color: black;
`

// Components are functions, and they must start with a capital letter
function DropDownMenu({ visible, color, items = [], type, ...props }) {
  return (
    <SubNav visible={visible} aria-label="Sub Navigation Menu">
      <DropDown {...props}>
        {items.map(item => <SubLinkContainer onClick={item.onClick}>
          <SubLink>{item.name}</SubLink>
        </SubLinkContainer>)}
      </DropDown>
    </SubNav>
  )
}

export default DropDownMenu;

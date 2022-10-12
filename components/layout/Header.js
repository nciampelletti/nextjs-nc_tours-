import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import NavUsers from "./NavUsers"

const Header = () => {
  return (
    <Wrapper>
      <Logo color='white' />
      <NavUsers />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  background-color: var(--clr-grey-2);
  padding: 0 5rem;
  height: 8rem;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

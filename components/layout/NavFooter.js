import React from "react"
import styled from "styled-components"
import Link from "next/link"
import links from "../../utils/footerlinks"

const NavFooter = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.to}>
            <a className='link__descn'>{link.text}</a>
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default NavFooter

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  .link__descn {
    justify-self: end;
    font-size: 1rem;
    color: var(--clr-grey-6);
  }
`

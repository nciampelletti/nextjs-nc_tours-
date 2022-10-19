import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { image_user_url } from "../../utils/constants"

const NavUsers = () => {
  // console.log(user)
  return (
    <Wrapper>
      <Link href='/login' className='nav__el'>
        LOGIN
      </Link>
      <Link href='/signup' className='nav__el nav__el--cta'>
        Sign Up
      </Link>
      {/* {!user && (
        <Link href='/login' className='nav__el'>
          LOGIN
        </Link>
      )}

      {user && (
        <button type='button' className='nav__el' onClick={() => logout()}>
          Logout
        </button>
      )}

      {!user && (
        <Link href='/signup' className='nav__el nav__el--cta'>
          Sign Up
        </Link>
      )}

      {user && (
        <Link href='/userprofile' className='nav__el'>
          <a>
            <img
              className='nav__user-img'
              src={`${image_user_url}${user.photo}`}
              alt='user'
            />
            <span>{user.name}</span>
          </a>
        </Link>
      )} */}
    </Wrapper>
  )
}

export default NavUsers

const Wrapper = styled.div`
  /* flex: 0 1 40%; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  .nav__user-img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .nav__el--cta {
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: 1px solid white !important;
    transition: all 0.3s;
  }

  @media (max-width: 992px) {
    display: none;
  }

  .nav__el,
  .nav__el:link,
  .nav__el:visited {
    color: #f7f7f7;
    text-transform: uppercase;
    font-size: 1.3rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;
    font-weight: 400;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
`

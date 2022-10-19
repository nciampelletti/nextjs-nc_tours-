import styled from "styled-components"

function Button(props) {
  // if (props.link) {
  //   return (
  //     <Link href={props.link} className='btn btn--blue'>
  //       <a>{props.children}</a>
  //     </Link>
  //   )
  // }

  return (
    <Wrapper className='btn btn--blue' onClick={props.onClick}>
      {props.children}
    </Wrapper>
  )
}

export default Button

const Wrapper = styled.button`
  padding: 1rem 0rem;
`

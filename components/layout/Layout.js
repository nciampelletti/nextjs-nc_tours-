import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <ToastContainer position='top-center' />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  padding: 1rem;
  line-height: 1.6;
  font-weight: 300;
  color: red; //#777;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    background-color: var(--clr-grey-9);
  }
`

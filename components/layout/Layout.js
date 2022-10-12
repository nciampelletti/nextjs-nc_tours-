import styled from "styled-components"
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
  line-height: 1.6;
  font-weight: 300;
  color: #777;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

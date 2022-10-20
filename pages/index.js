import React from "react"
import Tours from "../components/Tours/Tours"
import styled from "styled-components"
import axios from "axios"
import { url } from "../utils/links"
import { fetchData } from "../utils/external-api"

const Index = ({ tours }) => {
  return (
    <Wrapper>
      <Tours tours={tours} />
    </Wrapper>
  )
}

// export async function getStaticProps() {
//   // const response = await axios.get(`${url}/tours`)
//   const data = await fetchData(`${url}/tours`)

//   return {
//     props: {
//       tours: data,
//     },
//   }
// }

export async function getServerSideProps({ context }) {
  const data = await fetchData(`${url}/tours`)
  return {
    props: {
      tours: data.splice(0, 3),
    },
  }
}

export default Index

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  padding: 1rem 1rem;
  position: relative;
`


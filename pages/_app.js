import "../styles/globals.css"
import "mapbox-gl/dist/mapbox-gl.css"
import { ToursProvider } from "../context/tours_context"
import { UserProvider } from "../context/user_context"
import Layout from "../components/layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    // <UserProvider>
    //   <ToursProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    //   </ToursProvider>
    // </UserProvider>
  )
}

export default MyApp


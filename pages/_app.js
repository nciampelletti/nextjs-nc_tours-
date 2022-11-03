import "../styles/globals.css"
// import "mapbox-gl/dist/mapbox-gl.css"
import Layout from "../components/layout/Layout"
import LoadingScreen from "../components/ui/LoadingScreen"
import React, { useState, useEffect } from "react"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  {
    loading && <LoadingScreen />
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp


import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Night view of Dadaocheng"
        src="../images/LINE_ALBUM_211224.jpg"
      />
    </Layout>
  )
}

export default IndexPage
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      title="I write Code"
      subtitle = "www.github.com/abhisheksingh98"
      heroclass = "hero-background"
    />
  </Layout>
)

export default IndexPage

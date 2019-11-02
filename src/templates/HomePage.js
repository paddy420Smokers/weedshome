import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackgroundVideo from '../components/BackgroundVideo'
import CountUp from 'react-countup';

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, video, videoPoster, videoTitle, body }) => (
  <main className="Home">
  <div id="fb-root"></div>
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
  <div class="container3">
  <div class="rows">
  <button href="/contact/" class="Slider--Button">◄</button>
    <div class="cardcat">
         <h3 class="tricks">News</h3>
         <img src="https://img.icons8.com/cotton/64/000000/worldwide-location--v1.png"></img>
             <p class="cardcat-text">Supporting text below as a natural lead-in to.</p>
    </div>
    <div class="cardcat">
         <h3 class="tricks">Recreational</h3>
         <img src="https://img.icons8.com/cotton/64/000000/literature-1.png"></img>
  <i class="far fa-address-card"></i>
             <p class="cardcat-text">Supporting text below as a natural lead-in to.</p>
    </div>
     <div class="cardcat">
         <h3 class="tricks">Growing</h3>
         <img src="https://img.icons8.com/cotton/64/000000/hand-planting--v1.png"></img>
             <p class="cardcat-text">Supporting text below as a natural lead-in to.</p>
    </div>
     <div class="cardcat">
       <h3 class="tricks">Trending</h3>
       <img src="https://img.icons8.com/cotton/64/000000/earth-planet--v1.png"></img>
             <p class="cardcat-text">Supporting text below as a natural lead-in to.</p>
    </div>
   <div class="cardcat">
       <h3 class="tricks">CBD</h3>
       <img src="https://img.icons8.com/cotton/64/000000/test-tube-1.png"></img>
             <p class="cardcat-text">Supporting text below as a natural lead-in to.</p>
    </div>
   <div class="cardcat">
       <h3 class="tricks">Health</h3>
             <p class="cardcat-text">Supporting text below as a natural lead-in to.</p>
    </div>
   <div class="cardcat">
       <h3 class="tricks">Products</h3>
             <p class="cardcat-text">Supporting text below as a natural lead-in to.</p>
    </div>
  </div>
</div>
   <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
  
        <section className="section2">
      <div className="container2">
        <div class="Title__TitleWrapper">
<h2 class="H2Subtitle"><CountUp duration={1000.75} start={1545623} end={1545723} /></h2>
</div>
<div class="Title__TitleWrapperSubtitle">
<h4 class="H4Subtitle">people that follow Weed's Home</h4></div></div>
<div>
<div class="icons">
  <a class="icon icon-yt" href="www.facebook.com"></a>
  <a class="icon icon-gp" href="#"></a>
  <a class="icon icon-fb" href="#"></a>
  <a class="icon icon-tw" href="#"></a>
  <a class="icon icon-in" href="#"></a>
</div>
  </div>
    </section>
  
    <section className="section2">
     <div className="container">
     <div className="content2">
     <h2>We're here to help</h2>
     <button href="/contact/" class="PageHeader--Button">Contact us</button>
     </div></div>
     </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        video
        videoPoster
        videoTitle
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'


import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import CountUp from 'react-countup';
import Section from '../components/Section';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'



const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


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
  <a href="/post-categories/news/">
    <div class="cardcat">
      <img alt="cannabis news icon" src="https://i.imgur.com/WqhiKOF.jpg"></img>
         <h3 class="tricks">News</h3>
             <p class="cardcat-text">Breaking cannabis news and current headlines</p>
             
    </div>
</a>

<a href="/post-categories/recreational/">
    <div class="cardcat">
      <img alt="recreational icon" src="https://i.imgur.com/TuuTUsi.jpg"></img>
         <h3 class="tricks">Recreational</h3>
  <i class="far fa-address-card"></i>
             <p class="cardcat-text">Discover new stoner activities today</p>
    </div>
</a>

<a href="/post-categories/growing/">
     <div class="cardcat">
      <img alt="growing cannabis icon" src="https://i.imgur.com/4q9UfLs.jpg"></img>
         <h3 class="tricks">Growing</h3>
             <p class="cardcat-text">Everything related to growing cannabis</p>
    </div>
</a>

<a href="/post-categories/trending/">
     <div class="cardcat">
      <img alt="trending icon" src="https://i.imgur.com/LI8Hkre.jpg"></img>
       <h3 class="tricks">Trending</h3>
             <p class="cardcat-text">Trends, new technologies and expert insights</p>
    </div>
</a>

<a href="/post-categories/cbd/">
   <div class="cardcat">
    <img alt="cbd icon" src="https://i.imgur.com/L6W0QZm.jpg"></img>
       <h3 class="tricks">CBD</h3>
             <p class="cardcat-text">Discover more about Cannabidiol here</p>
    </div>
</a>

<a href="/post-categories/health/">
   <div class="cardcat">
    <img alt="cannabis and health icon" src="https://ucarecdn.com/fc20761a-9a07-4170-93f2-11ee52953b08/-/progressive/yes/-/format/auto/-/resize/1000x/"></img>
       <h3 class="tricks">Health</h3>
             <p class="cardcat-text">Our cannabis related health articles</p>
    </div>
</a>

<a href="/post-categories/products/">
   <div class="cardcat">
    <img alt="stoner product reviews icon" src="https://i.imgur.com/debnRRN.jpg"></img>
       <h3 class="tricks">Products</h3>
             <p class="cardcat-text">Buyer guides for the best stoner products</p>
    </div>
</a>
  </div>
</div>
  
    <Section
     />

<section className="section2">
<SectionCaption>We talk about</SectionCaption>
<SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} />
          
      ))}
     </SectionCellGroup>
     <section className="section4">
     <a href="/blog/">
     <button href="#" align="center" className="PageHeader--Button">More Information</button>
     </a>
     </section>
    </section>




    <svg width="100%" height="120" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#47e61f" d="M 0 74.5588 C 259.121 59.2021 360.841 101.86 696.443 32.7398 C 1032.05 -36.3809 1152.99 63.2376 1399.76 86.4601 C 1679.36 115.901 1965.2 106.902 2560 74.5589 V 220.561 L 0 220.56 V 74.5588 Z"><animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"></animate></path></svg>
        <section className="section6">
      <div className="container2">
        <div class="Title__TitleWrapper">
<h2 class="H2Subtitle"><CountUp duration={1000.75} start={1545623} end={1545723} /></h2>
</div>
<div class="Title__TitleWrapperSubtitle">
<h4 class="H4Subtitle">people that follow Weed's Home</h4></div></div>
<div>
<div class="icons">
  <a class="icon icon-fb" href="https://www.facebook.com/WeedsHome/"></a>
  <a class="icon icon-in" href="https://www.instagram.com/weedshome.wh/"></a>
  <a class="icon icon-tw" href="https://mobile.twitter.com/home_weed"></a>
</div>
  </div>
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

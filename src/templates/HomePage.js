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
  <button href="/contact/" class="Slider--Button">◄</button>

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

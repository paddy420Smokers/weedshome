import React, { Fragment } from 'react'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'
import Popup from '../components/Popup'

export const SinglePostTemplate = ({
  title,
  date,
  body,
  section1,
  nextPostURL,
  prevPostURL,
  categories = []
}) => (
  <main>
    <article
      className="SinglePost section light"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >


      <div className="containersd">
      <div className="template-row">
      <div className="container skinny">
      <div class="demobox2">
      <div class="demobox3">
      <div class="addthis_inline_share_toolbox"></div>
      <Link className="SinglePost--BackButton" to="/blog/">
          <ChevronLeft /> BACK
      </Link>

      </div>
      </div>
        <div className="SinglePost--Content relative">
          <div className="SinglePost--Meta">
            {date && (
              <time
                className="SinglePost--Meta--Date"
                itemProp="dateCreated pubdate datePublished"
                date={date}
              >
                {_format(date, 'MMMM Do, YYYY')}
              </time>
            )}
            {categories && (
              <Fragment>
                <span>|</span>
                {categories.map((cat, index) => (
                  <span
                    key={cat.category}
                    className="SinglePost--Meta--Category"
                  >
                    {cat.category}
                    {/* Add a comma on all but last category */}
                    {index !== categories.length - 1 ? ',' : ''}
                  </span>
                ))}
              </Fragment>
            )}
          </div>
          {title && (
            <h1 className="SinglePost--Title" itemProp="title">
              {title}
            </h1>
          )}
          <div className="SinglePost--InnerContent">
            <Content source={body} />
          </div>

          <div id="recommended"></div>

          <div className="SinglePost--Pagination">
            {prevPostURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevPostURL}
              >
                Previous Post
              </Link>
            )}
            {nextPostURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextPostURL}
              >
                Next Post
              </Link>
            )}
          </div>
        </div>
           <div class="demobox">
           <h2 class="h2comments" >Join the Discussion</h2>
        </div>

<div class="sidebar">
<div class="sticky">
<div class="sub-text">
<div class="demoboxb">
<div><h3 class="template-name">Weed's Home Educational</h3>
<h6 class="info-text">Our Newsletter</h6>
</div></div>
</div>
<div class="white-box">
<div class="sidebar-top">
<img class="sidebar--img" alt="weeds home newsletter" src="https://i.imgur.com/8PWw1vV.png"></img>
<div class="offer">Subscribe to our educational newsletter to receive the latest news and tips to your inbox!</div>
<Popup>
          <Content source={section1} />
</Popup>
<a href="/terms-of-use/" class="terms-link">Terms and Conditions Apply</a>
</div>
</div>
</div>
</div>
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e2927b3c07a82ea"></script>
</div>
</div>

       

      </div>
    </article>



  </main>
)

// Export Default SinglePost for front-end
const SinglePost = ({ data: { post, allPosts } }) => {
  const thisEdge = allPosts.edges.find(edge => edge.node.id === post.id)
  return (
    <Layout
      meta={post.frontmatter.meta || false}
      title={post.frontmatter.title || false}
    >
      <SinglePostTemplate
        {...post}
        {...post.frontmatter}
        body={post.html}
        nextPostURL={_get(thisEdge, 'next.fields.slug')}
        prevPostURL={_get(thisEdge, 'previous.fields.slug')}
      />
    </Layout>
  )
}



export default SinglePost

export const pageQuery = graphql`
  ## Query for SinglePost data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      id
      frontmatter {
        title
        template
        subtitle
        date
        categories {
          category
        }
      }
    }

    allPosts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

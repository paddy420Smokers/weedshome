import React, { Fragment } from 'react'
import _get from 'lodash/get'
import _format from 'date-fns/format'
import { Link, graphql } from 'gatsby'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import Layout from '../components/Layout'
import './SinglePost.css'


export const SinglePostTemplate = ({
  title,
  date,
  body,
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
              <script type="text/javascript">
	var mantis = mantis || [];
	mantis.push(['display', 'load', {
		property: '56b786343e9f56d344172a7e'
	}]);
</script>

<script type="text/javascript" data-cfasync="false" src="https://assets.mantisadnetwork.com/mantodea.min.js" async></script>
          </div>

<div data-mantis-zone="weedhack"></div>

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
<div><h3 class="template-name">Weed's Home</h3>
<h6 class="info-text">More Information</h6>
</div></div>
</div>
<div class="white-box">
<div class="sidebar-top">
<div class="offer">Welcome to Weed's Home! Join our cannabis Newsletter today.</div>
<a href="/contact/" class="button-sidebar">Join our Newsletter</a>
<a href="/terms/" class="terms-link">Terms and Conditions Apply</a>
<div class="icons3"><a class="icon3 icon-fb" href="https://www.facebook.com/WeedsHome/"></a><a class="icon3 icon-in" href="https://www.instagram.com/weedshome.wh/"></a><a class="icon3 icon-tw" href="https://mobile.twitter.com/home_weed"></a></div>
</div>
</div>
</div>
</div>
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

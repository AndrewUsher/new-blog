import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Paper from 'material-ui/Paper'
import get from 'lodash/get'

import Bio from '../components/Bio'
import '../styles/_blog-post.styl'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    const styles = {
      maxWidth: 1200,
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }

    return (
      <div className="blog-post">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1 style={styles}>{post.frontmatter.title}</h1>
        <p style={styles}>Published on {post.frontmatter.date}</p>
        <Paper className="post-content" elevation={7} dangerouslySetInnerHTML={{ __html: post.html }} />
        <Bio newDepth={2} />

        <ul>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

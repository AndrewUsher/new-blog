import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import '../styles/_home.styl'

import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <Paper zDepth={1} className="post">
              <Card key={node.fields.slug}>
                <CardHeader
                  title={title}
                  subtitle={node.frontmatter.date}
                />
                <CardText>
                  {node.excerpt}
                </CardText>
                <CardActions>
                  <Link to={node.fields.slug}>
                    <FlatButton label="Read More" />
                  </Link>
                </CardActions>
              </Card>
            </Paper>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`

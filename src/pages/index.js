import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import CssBaseline from 'material-ui/CssBaseline'
import { withStyles } from 'material-ui/styles'
import '../styles/_home.styl'
import '../styles/prism-theme.css'
import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render () {
    const { title: siteTitle } = this.props.data.site.siteMetadata
    const { edges: posts } = this.props.data.allMarkdownRemark

    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Helmet title={siteTitle} />
        <CssBaseline />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Card key={node.fields.slug} className="post" raised>
              <CardHeader
                title={title}
                subheader={node.frontmatter.date}
              />

              <CardContent>
                {node.excerpt}
              </CardContent>
              <CardActions>
                <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
                  <Button className={classes.button}>Read More</Button>
                </Link>
              </CardActions>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default withStyles()(BlogIndex)

BlogIndex.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query IndexQuery {
          site {
        siteMetadata {
          title
        }
        }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
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

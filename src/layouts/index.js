import React from 'react'
import Link from 'gatsby-link'
import ThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../components/Header'
import muiTheme from '../utils/muiTheme'
import '../styles/index.styl'

class Template extends React.Component {
  render () {
    const { children, location } = this.props
    return (
      <ThemeProvider muiTheme={muiTheme}>
        <div>
          <Header />
          {children()}
        </div>
      </ThemeProvider>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
}

export default Template

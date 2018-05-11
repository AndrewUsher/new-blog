import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import '../styles/_header.styl'

const styles = {
  root: {
    marginBottom: '40px',
    padding: '10px 0 10px 0'
  }
}

const Header = ({ classes }) => (
  <AppBar position="static" color="primary" className={classes.root}>
    <Toolbar>
      <Typography variant="title" color="inherit">
        Casual Cognitions
      </Typography>
    </Toolbar>
  </AppBar >
)

export default withStyles(styles)(Header)

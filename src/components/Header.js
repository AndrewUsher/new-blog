import React from 'react'
import AppBar from 'material-ui/AppBar'
import '../styles/_header.styl'

const Header = () => (
  <AppBar className="header" style={{ padding: '0 25px' }} showMenuIconButton={false} title="Casual Cognitions" zDepth={2} />
)

export default Header

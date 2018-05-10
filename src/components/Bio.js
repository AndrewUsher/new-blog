import React from 'react'
import profilePic from './profile-pic.png'
import Paper from 'material-ui/Paper'
import '../styles/_bio.styl'

const Bio = ({ newDepth }) => (
  <Paper className="bio" zDepth={newDepth || 1}>
    <img
      src={profilePic}
      alt={`Andrew Usher`}
    />
    <p>
      I'm <strong>Andrew Usher</strong> and I live and work in Memphis having fun with front-end!{' '}
      <a href="https://twitter.com/andrewusher17">
        You can follow me on Twitter as well!
      </a>
    </p>
  </Paper>
)

export default Bio

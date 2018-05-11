import React from 'react'
import profilePic from './profile-pic.png'
import Card from 'material-ui/Card'
import '../styles/_bio.styl'

const Bio = () => (
  <Card className="bio" raised>
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
  </Card>
)

export default Bio

import React from 'react'
import profilePic from './profile-pic.png'

const Bio = () => (
  <p>
    <img
      src={profilePic}
      alt={`Andrew Usher`}
    />
    I'm <strong>Andrew Usher</strong> and I live and work in Memphis having fun with front-end!{' '}
    <a href="https://twitter.com/andrewusher17">
      You can follow me on Twitter as well!
    </a>
  </p>
)

export default Bio

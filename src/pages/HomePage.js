import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <h2>HomePage</h2>
    <Link to="memory-game">Memory</Link>
        <Link to="magic-sqaure">Magic</Link>
        <Link to="tenzies">Tenzies</Link>

    </>
  )
}

export default HomePage
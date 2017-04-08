import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Title from './Title'
import logo from '../logo.svg'

class Home extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <Title secondary='JavaScript Developer' />
        <section className='paper'>
          <div className='home-container'>
            <div className='home-image'>
              <div className='svg-container'>
                <img src={logo} className='logo' alt='tcasey logo' />
              </div>
            </div>
            <div className='home-content'>
              <p>
                I'm a creative professional and front-end developer with an obession for clean code and an eye for design
              </p>
              <p>
                I studied Information Systems at the University of Utah and attended an immersive bootcamp at DevMountain focused on full stack JavaScript Development. Currently I'm working as a JavaScript Developer at
                <a className='employer' target='blank' href='https://www.vivintsolar.com'> Vivint.solar</a>.
              </p>
              <p className='paragraph-link'>Check out my
                <Link to='/portfolio'> portfolio</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home

import React from 'react'
import './Home.css'
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/Banner.jpeg';


export default function Home() {
  return (
    <Layout>
    <div className='home' style={{backgroundImage:`url(${Banner})`}}>
      <div className="headerContainer">
        <h1>Food Website</h1>
        <p>Best Food In India</p>

        <Link to='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>
      
      Home</div>
    </Layout>
  )
}

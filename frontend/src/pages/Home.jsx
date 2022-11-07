import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <div className="home-page">
      <Header/>
      <div className="home-container">
          <div className="main-title">
              <h1 className="main-title-text">The Queen of Mystery</h1>
          </div>
          <div className="agatha-books">
            <p className="agatha-info">With over 2 billion books sold in over 100 languages, Agatha Christie is the best-selling novelist of all time.</p>
            <br></br>
            <p className="agatha-info">Here, you can keep track of which books you have read and share them with other mystery lovers.</p>
            <button type="button" class="btn start-btn btn-lg btn-secondary">Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default Home
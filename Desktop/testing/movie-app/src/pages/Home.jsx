import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <>
    <div className='home-container'>
        <h1>Unlimited movies, TV shows, and more</h1>
      <p>Starts at THB 99. Cancel anytime.</p>

      <div className='home-control'>
        <label>Ready to Watch? Enter your email to create or restart your membership.</label>
       <div className='home-input'>
         <input type='text' placeholder='Email address'/>
        <button>Get Started</button>
       </div>
      </div>
    </div>

      <section className='home-content'>
        <h2>More Reasons to Join</h2>
        <div className='content-row'>
          <h3>Enjoy on your TV</h3>
          <div className='card'>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
        </div>

        <div className='content-row'>
          <h3>Download your shows to watch offline</h3>
          <div className='card'>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>

        <div className='content-row'>
          <h3>Watch everywhere</h3>
          <div className='card'>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
        </div>

        
      </section>
    </>
  )
}

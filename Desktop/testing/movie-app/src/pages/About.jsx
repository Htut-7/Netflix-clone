import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>About Netflix</h1>
        <p>
          Netflix is one of the world’s leading entertainment services, offering
          a wide variety of award-winning TV shows, movies, anime, documentaries,
          and more — on thousands of internet-connected devices.
        </p>
      </section>

      {/* CONTENT */}
      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Netflix was created to give people more freedom to watch what they
            want, when they want, and how they want. Members can enjoy unlimited
            entertainment without ads, contracts, or commitments.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <p>
            From international blockbusters to local stories, Netflix delivers
            content across genres and languages. Members can watch anytime,
            anywhere, and download shows to watch offline.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to entertain the world. We aim to tell stories that
            inspire, connect cultures, and bring joy to millions of viewers
            globally.
          </p>
        </div>

        <div className="about-section">
          <h2>Watch Anywhere</h2>
          <p>
            Netflix is available on Smart TVs, smartphones, tablets, laptops,
            and streaming devices — so entertainment is always within reach.
          </p>
        </div>
      </section>
    </div>
  );
}
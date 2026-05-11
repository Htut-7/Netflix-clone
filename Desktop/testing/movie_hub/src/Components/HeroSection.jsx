import "../css/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          Discover the Series Streaming Experience with
          <span> MovieHub</span>
        </h1>

        <p>
          Watch trending movies and series online with the best streaming
          experience.
        </p>

        <div className="hero-buttons">
          <button className="hero-start-btn">Get Started</button>
          <button className="live-btn">Live TV</button>
        </div>
      </div>

      <div className="movie-cards">

        <div className="card-small-card">
          <img
            src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
            alt="Adventure"
          />

          <div className="overlay">
            <h3>Adventure</h3>
          </div>
        </div>

        <div className="card-big-card">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
            alt="Family Summer Time"
          />

          <div className="overlay">
            <h2>Family Summer Time</h2>
          </div>
        </div>

        <div className="card-small-card">
          <img
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c"
            alt="Animation"
          />

          <div className="overlay">
            <h3>Animation</h3>
          </div>
        </div>

      </div>

    </section>
  );
}
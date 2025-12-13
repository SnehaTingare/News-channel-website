import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div>
      
      <header style={styles.header}>
        <h1>Star 24 Fast News</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">India</a>
          <a href="#">World</a>
          <a href="#">Technology</a>
          <a href="#">Sports</a>
        </nav>
      </header>

     
      <main style={styles.main}>
        <h2>Latest Headlines</h2>

        <article style={styles.article}>
          <h3>Breaking News Title</h3>
          <p>
            This is a short description of the news article. Click to read more.
          </p>
        </article>

        <article style={styles.article}>
          <h3>Another News Headline</h3>
          <p>
            Latest updates from India and around the world.
          </p>
        </article>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 Star 24 Fast News. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
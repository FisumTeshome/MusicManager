/** @jsxImportSource @emotion/react */
import { Routes, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import SongList from './components/songList';
import SongInfo from './components/songInfo';
import CreateSong from './components/addSong';
import UpdateSong from './components/updateSong';
import backgroundImage from './background.jpg';
import Home from './components/home';

// Outer container to hold the background and content
const appContainer = css`
  position: relative;
  min-height: 100vh;
  
  justify-content: center;
  align-items: center;
  padding: 40px; /* Visible space around content for background */
  overflow: hidden; /* Ensures background doesn’t extend beyond edges */
`;

// Blurred background image styling
const backgroundStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px); /* Blurs only the background image */
  z-index: -1; /* Places background behind content */
`;

// Inner content styling
const contentWrapper = css`
background-color: white;
 
  border-radius: 8px;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1; /* Keeps content above the background */
`;

const headerStyle = css`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
`;

const footerStyle = css`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #777;
`;

function App() {
  return (
    <div css={appContainer}>
      {/* Background div with blur effect */}
      <div css={backgroundStyle}></div>
      <header>
          <h1 css={headerStyle}>Manage Your Songs</h1>
        </header>
      {/* Main content */}
      <div css={contentWrapper}>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<><SongList /><SongInfo /></>} />
          <Route path="/create" element={<CreateSong />} />
          <Route path="/update/:id" element={<UpdateSong />} />
        </Routes>

      </div>
      <footer css={footerStyle}>
          <p>Happy music store</p>
        </footer>
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import {Routes,Route} from 'react-router-dom'
import { css } from '@emotion/react';
import SongList from './components/songList'; 
import SongInfo from './components/songInfo'; 
import CreateSong from './components/addSong';
import UpdateSong from './components/updateSong';
import backgroundImage from './background.jpg'
// Basic styling using Emotion
const appContainer = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  z-index: 1;
`;

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
  filter: blur(2.5px);
  z-index: -1; /* Place the background behind content */
`;

const contentStyle = css`
  z-index: 1; /* Ensure content stays above the blurred background */
`;

const headerStyle = css`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
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
      <div css={backgroundStyle}></div>
      <div css={contentStyle}>
      <header>
        <h1 css={headerStyle}>Manager Your Songs</h1>
      </header>
      <Routes>
      <Route path="/" element={<> < SongList /><SongInfo /> </>}/>
      <Route path="/create" element={<CreateSong />} />
      <Route path="/update/:id" element={<UpdateSong />} />
      </Routes>
      <footer css={footerStyle}>
        <p className="lastWord">Happy music store </p>
      </footer>
      </div>
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchStatsStart } from '../redux/slices/songSlice';
import { RootState } from '../redux/store';
import '../styles/styles.css';

const mainContent = css`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;
const headerStyle = css`
  font-size: 2.5rem;
  color:hsl(0, 26%, 95%);
  margin-bottom: 20px;
  text-align: center;
`;
const infoStyle = css`
  font-size: 2rem;
  color:#fff;
  margin-bottom: 20px;
  text-align: center;
`;
//hekjdk

const SongInfo: React.FC = () => {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchStatsStart());
  }, [dispatch]);
  
  if (loading) {
    return <p>Loading statistics...</p>;
  }

  if (error) {
    return <p>Error loading statistics</p>;
  }

  if (!stats) {
    return <p>No statistics available</p>; 
  }

  return (
    <div className='formContainer'>
      <Box
        sx={{
          backgroundColor: 'rgba(20, 67, 69, 0.96)',  
          padding: 4,                
          width: '100%',
          maxWidth: '100%',
          border: 2, 
          borderRadius:'8px',
          boxSizing: 'border-box',  
        }}
      >
         <Typography variant="h3" gutterBottom
         sx={{color:'rgba(6, 235, 252, 1)', textAlign: 'center'}}
         >
        Song Statistics
      </Typography>
      </Box>
      <Box id="buttonList">
        <Button id="navButton" component={Link} to="/"
        >
          Home
        </Button>
        <Button id="navButton" component={Link} to="/create" 
        >
          Add Music
        </Button>
        <Button id="navButton" component={Link} to="/musicInfo"
        >
          Music Cencus
        </Button>
        <Button id="navButton" component={Link} to="/music-store"
        >
          Music Store
        </Button>
      </Box>
      <ul>
        <li>Total Songs: {stats.totalSongs}</li>
        <li>Total Artists: {stats.totalArtists}</li>
        <li>Total Albums: {stats.totalAlbums}</li>
        <li>Total Genres: {stats.totalGenres}</li>
        <h3 css={infoStyle}>Songs per Genre:</h3>
        <ul>
          {Array.isArray(stats.songsPerGenre) ? (
            stats.songsPerGenre.map((genreStat: { _id: string; count: number }) => (
              <li key={genreStat._id}>
                Genre: {genreStat._id}, Count: {genreStat.count}
              </li>
            ))
          ) : (
            <li>No genre data available</li>
          )}
        </ul>

        <h3 css={infoStyle}>Songs per Artist:</h3>
        <ul>
          {Array.isArray(stats.songsPerArtist) ? (
            stats.songsPerArtist.map((artistStat: { _id: string; count: number }) => (
              <li key={artistStat._id}>
                Artist: {artistStat._id}, Songs: {artistStat.count}
              </li>
            ))
          ) : (
            <li>No artist data available</li>
          )}
        </ul>
        <h3 css={infoStyle}>Songs per Album:</h3>
        <ul>
          {Array.isArray(stats.songsPerAlbum) ? (
            stats.songsPerAlbum.map((albumStat: { _id: string; count: number }) => (
              <li key={albumStat._id}>
                Album: {albumStat._id}, Songs: {albumStat.count}
              </li>
            ))
          ) : (
            <li>No album data available</li>
          )}
        </ul>
      </ul>
    </div>
  );
};

export default SongInfo;

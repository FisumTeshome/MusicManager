import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography,Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateSong = () => {
  const { id } = useParams<{ id: string }>();  // Get the song ID from the URL
  const navigate = useNavigate();  // For redirecting after the update
  const [song, setSong] = useState({ title: '', artist: '', album: '', genre: '' });

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/songs/${id}`);
        setSong(response.data);
      } catch (error) {
        console.error('Error fetching song data', error);
      }
    };

    fetchSong();
  }, [id]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/update/${id}`, song);
      alert('Song updated successfully');
      navigate('/');  
    } catch (error) {
      console.error('Error updating song', error);
    }
  };
  if (!song) {
    return (
      <div className="loading">
        <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
          Loading song data...
        </Typography>
      </div>
    );
  }
  return (
    <div className='formContainer' id='updateContainer'>
           <Box
        sx={{
          backgroundColor: 'rgba(129, 19, 19, 0.28)',  
          padding: 4,                
          width: '100%',
          maxWidth: '100%', 
          borderRadius:'8px',
          boxSizing: 'border-box',  
        }}
      >
         <Typography variant="h3" gutterBottom
         sx={{color:'rgba(0, 0, 0, 1)', textAlign: 'center'}}
         >
        Update Music
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
      <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Title of the music</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody> 
      
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
            </tr>
        </tbody>
      </table>
      </div>
    <form onSubmit={handleSubmit}>
    <div className="row mb-4">
      <div className="col-sm-4" ><label className="form-control">Music Title</label></div>
            <div className="col-sm-8">
              <input  type="text"  className="form-control"  name="title"  placeholder="Title"   value={song.title}  onChange={handleChange}  required />
            </div>
          </div>
          
          <div className="row mb-4">
          <div className="col-sm-4" ><label className="form-control">Artist Name</label></div>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="artist" placeholder="Artist"  value={song.artist}  onChange={handleChange} required/>
            </div>
          </div>

          <div className="row mb-4">
          <div className="col-sm-4" ><label className="form-control">Album Name</label></div>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="album" placeholder="Album" value={song.album} onChange={handleChange} required />
            </div>
          </div>
          
          <div className="row mb-4">
          <div className="col-sm-4" ><label className="form-control">Genre Type</label></div>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="genre" placeholder="Genre" value={song.genre} onChange={handleChange} required  />
            </div>
          </div>
      <button className='btn btn-success' type="submit">Update Song</button>
    </form></div>
  );
};

export default UpdateSong;

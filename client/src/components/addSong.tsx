import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateSong = () => {
  const navigate = useNavigate();
  const [song, setSong] = useState({ title: '', artist: '', album: '', genre: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/create', song);
      alert('Song created successfully');
      navigate('/');
    } catch (error) {
      console.error('Error creating song', error);
    }
  };
  return (
    <div className='formContainer'>
           <Box
        sx={{
          backgroundColor: 'rgba(28, 12, 119, 0.24)',  
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
        Add any music you want
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
      <button className='btn btn-success' type="submit">Create Song</button>
    </form></div>
  );
};

export default CreateSong;

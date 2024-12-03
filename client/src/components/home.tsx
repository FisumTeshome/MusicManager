// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { Box, Button, Grid, Card, CardContent, Typography } from '@mui/material'; // Using Material UI for styling
import Oldis from '../oldisMusic.png';
import New from '../newMusic.png';
import Abrod from '../Abroad.png';
import Ninties from '../Untitled.png'
const Home: React.FC = () => {
  return (
    <Box sx={{ marginBottom: 4, backgroundColor:'rgba(12, 74, 55, 0.15)',  justifyContent: 'center',}}>
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
        Wellcome to Music Manager
      </Typography>
      </Box>
      
     
      <Box sx={{ display: 'flex', gap: 4 }}>

      {/* First Component: Navigation buttons */}
      <Box sx={{ display: 'flex',  flexDirection: 'column',      // Stack buttons vertically
          alignItems: 'center',         // Center the buttons
          borderRadius: '8px',          // Rounded corners (optional)
          padding: 4,
          margin: 10 ,
         backgroundColor:'rgba(11, 122, 44, 0.14)'
         }}>
        <Button variant="contained" color="primary"  component={Link} to="/"
         sx={{
            backgroundColor: 'rgba(155, 176, 242, 0.46)',
            marginBottom: 2,
            padding: '10px 20px',
            width: '200px',
            textAlign: 'center',
            color:'rgba(0, 0, 0, 1)',
            fontWeight: 'bold', 
          }}
        >
          Home
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/create" 
         sx={{
            backgroundColor: 'rgba(155, 176, 242, 0.46)',
            marginBottom: 2,
            padding: '10px 20px',
            width: '200px',
            textAlign: 'center',
            color:'rgba(0, 0, 0, 1)',
            fontWeight: 'bold', 
          }}
        >
          Add Music
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/musicInfo"
         sx={{
            backgroundColor: 'rgba(155, 176, 242, 0.46)',
            marginBottom: 2,
            padding: '10px 20px',
            width: '200px',
            textAlign: 'center',
            color:'rgba(0, 0, 0, 1)',
            fontWeight: 'bold', 
          }}
        >
          Music Census
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/music-store"
         sx={{
            backgroundColor: 'rgba(155, 176, 242, 0.46)',
            marginBottom: 2,
            padding: '10px 20px',
            width: '200px',
            textAlign: 'center',
            color:'rgba(0, 0, 0, 1)',
            fontWeight: 'bold', 
          }}
        >
          Music Store
        </Button>
      </Box>

      
      <Grid container spacing={2} direction="column">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ cursor: 'pointer' }} component={Link} to="/music-store">
            <CardContent>
              <Typography variant="h6" component="div"
              >
              <img
                  src={Oldis} 
                  
                  alt="Card Image"
                  style={{ width: '100%', height: '150px', objectFit: 'cover',borderRadius:'8px' }}
                />
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/"
              sx={{ width: '100%',backgroundColor:'rgba(39, 168, 168, 1)'}}>
          Oldis Music
        </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ cursor: 'pointer' }} component={Link} to="/music-store">
            <CardContent>
              <Typography variant="h6" component="div">
              <img
                  src={New} 
                  
                  alt="Card Image"
                  style={{ width: '100%', height: '150px', objectFit: 'cover',borderRadius:'8px' }}
                />
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/"
              sx={{ width: '100%',backgroundColor:'rgba(39, 168, 168, 1)'}}>
          New musics
        </Button>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
       

        {/* Card 3 */}
        
        <Grid container spacing={2} direction="column">
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ cursor: 'pointer' }} component={Link} to="/music-store">
            <CardContent>
              <Typography variant="h6" component="div">
              <img
                  src={Ninties} 
                  
                  alt="Card Image"
                  style={{ width: '100%', height: '150px', objectFit: 'cover',borderRadius:'8px' }}
                />
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/"
              sx={{ width: '100%',backgroundColor:'rgba(39, 168, 168, 1)'}}>
          90's Music
        </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ cursor: 'pointer' }} component={Link} to="/music-store">
            <CardContent>
              <Typography variant="h6" component="div">
              <img
                  src={Abrod} 
                  
                  alt="Card Image"
                  style={{ width: '100%', height: '150px', objectFit: 'cover',borderRadius:'8px' }}
                />
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/"
              sx={{ width: '100%',backgroundColor:'rgba(39, 168, 168, 1)'}}>
          Abroad Musics
        </Button>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
        </Box>
      </Box>
  
  );
}

export default Home;



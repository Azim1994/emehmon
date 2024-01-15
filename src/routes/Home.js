import Navbar from '../components/Navbar';
import Header from '../components/Header';
import {Container} from '@mui/material'
import Box from '@mui/material/Box';
import Body from '../components/Body';
import Footer from '../components/Footer';


function Home () {
    return(
        <>
          <Box sx={{ 
          height: '847px',
          backgroundImage: 'url(./images/header.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
                    }}>
          <Container 
          maxWidth={false} 
          style={{
          height: '5200px',
          width: '1488px',
          padding: '0',
          }}>
          <Navbar />
          <Header />
          <Body/>
          <Footer/>             
          </Container>
          </Box>
        </>
    )
}

export default Home;
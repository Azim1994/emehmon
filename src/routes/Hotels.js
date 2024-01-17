import Navbar from '../hcomponents/hNavbar';
import {Container} from '@mui/material'
import Box from '@mui/material/Box';



function Hotels () {
    return(
        <>
          <Box>
          <Container 
          maxWidth={false} 
          style={{
          height: '5200px',
          width: '1488px',
          padding: '0',
          }}>
          <Navbar />
                      
          </Container>
          </Box>
        </>
    )
}

export default Hotels;
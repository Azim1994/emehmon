import HNavbar from '../hcomponents/HNavbar';
import {Container} from '@mui/material'
import Box from '@mui/material/Box';
import HBody from '../hcomponents/HBody'
import HFooter from '../hcomponents/HFooter'


function Hotels () {
    return(
        <>
          <Box>
          <Container 
          maxWidth={false} 
          style={{
          height: '4677px',
          width: '1488px',
          padding: '0',
          }}>
          <HNavbar />
          <HBody /> 
          <HFooter />           
          </Container>
          </Box>
        </>
    )
}

export default Hotels;
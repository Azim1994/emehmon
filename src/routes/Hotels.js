import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import HotelNavbar from "../hcomponents/HotelNavbar";
import HBody from "../hcomponents/HBody";
import HFooter from "../hcomponents/HFooter";

function Hotels() {
  return (
    <>
      <Box>
        <Container
          maxWidth={false}
          style={{
            height: "100%",
            width: "1440px",
          }}
        >
          <HotelNavbar />
          <HBody />
          <HFooter />
        </Container>
      </Box>
    </>
  );
}

export default Hotels;

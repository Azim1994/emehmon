import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Container } from "@mui/material";
import Body from "../components/Body";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Container
        maxWidth={false}
        style={{
          height: "5200px",
          width: "1440px",
        }}
      >
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </Container>
    </>
  );
}

export default Home;

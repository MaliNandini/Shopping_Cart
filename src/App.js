import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Home from "./Components/Sidebar_Components/Cart";
import { Box,Show, Hide  } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import CartDetails from "./Components/Sidebar_Components/CartDetails";



function App() {
 
  return (
    <div className="App">
      <Box>
        <Header />
      </Box>
      <Box display="flex" flexFlow="wrap">
       <Show above="sm">
        <Box backgroundColor="#020e26" color="white">
          <Sidebar />
        </Box>
        </Show>
        <Box
          flexGrow={{
            base: "8",
            md: "2",
            sm: "1",
          }}
          mt="20px"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartDetails/:id" element={<CartDetails />} />
          </Routes>
        </Box>
      </Box>
      {/* <Box backgroundColor="black" color="white" py="5px">
        <Footer/>
      </Box> */}
    </div>
  );
}

export default App;

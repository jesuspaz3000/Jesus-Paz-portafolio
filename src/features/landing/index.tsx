import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsAndTech from "./components/SkillsAndTech";
import MyWork from "./components/MyWork";
import Offer from "./components/Offer";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export function Landing() {
    return (
        <Box sx={{ background: "background.default", color: "primary.main", position: "relative", overflowX: "hidden", width: "100%" }}>
            <Header />
            <Hero />
            <About />
            <SkillsAndTech />
            <MyWork />
            <Offer />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </Box>
    )
}

export default Landing;
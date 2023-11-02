import { Box, Typography } from "@mui/material"
import HeaderCovid from "../components/common/HeaderCovid"
import Header from "../components/common/Header"
import Slide from "../components/common/DoctorPage/Slide.jsx"
import Search from "../components/common/DoctorPage/Search"
import HeroSlide from "../components/common/DoctorPage/HeroSlide"
import Pay from "../components/common/DoctorPage/Pay"
import Background3 from "../components/common/Background3"
import Background4 from "../components/common/Background4"
import Background9 from "../components/common/Background9"
import Footer from "../components/common/Footer"
import { useEffect } from "react"


const DoctorPage = () => {
    useEffect(() => {
        document.title = 'Đội ngũ bác sĩ';
    }, []);


    return (
        <Box sx={{ cursor: "pointer" }}>
            <HeaderCovid />
            <Header />
            <Slide />
            <Box margin="0 146px" position="relative" bottom="100px">
                <Search />
                <HeroSlide />
            </Box>
            <Background3 />
            <Background4 />
            <Pay />
            <Background9 />
            <Footer />
        </Box>
    )
}

export default DoctorPage

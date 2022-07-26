import React from 'react'
import Banner from './Banner';
import NavBar from './NavBar';
import { Box,styled } from '@mui/material';

const Component = styled(Box)`
    padding: 10px;
    background-color: #f2f2f2
`
const Home = () => {
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home;
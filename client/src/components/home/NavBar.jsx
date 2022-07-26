import React from 'react'
import { Box,styled, Typography } from '@mui/material';
import {navData} from '../../constants/data';

const NavItem = styled(Box)`
    display:flex;
    justify-content: space-between;
    margin: 55px 130px 0 130px;
`

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight:600;
    font-family:inherit;
`

const NavBar = () => {
  return (
    <NavItem>
       {
        navData.map((data,ind)=>{
            return(
            <Container key={ind}>
                <img src={data.url} alt='product' style={{width:64}} />
                <Text>{data.text}</Text>
            </Container>
            )
        })
       }
    </NavItem>
  )
}

export default NavBar;
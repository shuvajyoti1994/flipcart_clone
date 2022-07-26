import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material"
import CustomBtn from "./CustomBtn"
import Search from "./Search"

const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 56px;
    box-shadow:none;
`

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusLogo = styled('img')`
    width:10px;
    height: 10px;
    margin-left: 4px;
`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <Component>
                    <img src={logoURL} alt="logo" style={{width:75}}/>
                    <Box style={{display:'flex'}}>
                        <SubHeading>Explore&nbsp;
                            <Box component= "span" style={{color:'#FFE500'}}>Plus</Box> 
                        </SubHeading>
                        <PlusLogo src={subURL} alt='sublogo'/>
                    </Box>
                </Component>
                <Search/>
                <Box>
                    <CustomBtn/>
                </Box>
            </Toolbar>
        </StyledHeader>
  )
}

export default Header
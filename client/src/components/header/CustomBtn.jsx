import { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Components
import LoginDialog from "../login/LoginDialog";


const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & >button,& > p,& >div{
        font-weight:500;
        margin-left:40px;
        font-size:16px;
        align-items: center;
        justify-content:center;
       
    }
`

const BtnStyle = styled(Button)`
    background-color:#fff;
    color: #2874f0;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:500;
    height: 32px;
`
const Cart = styled(Box)`
    display: flex;
`

const CustomBtn = () => {
    const [open, setOpen] = useState(false);

    const openDialog = () =>{
        setOpen(true)
    }

    return (
        <div>
            <Wrapper>
                <BtnStyle variant="contained" onClick={openDialog}>Login</BtnStyle>
                <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
                <Typography style={{ marginTop: 3 }}>More</Typography>
                <Cart>
                    <ShoppingCartIcon />  Cart
                </Cart>
                <LoginDialog open = {open} setOpen ={setOpen}/>
            </Wrapper>
        </div>
    )
}

export default CustomBtn;
import React, {useState} from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { authenticateSignup } from '../service/api';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    display: flex;
`

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat ;
    height: 83%;
    width: 28%;
    padding: 45px 35px;
    color: #fff;
    font-weight: 900;
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction:column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 20px;
    }

`

const DialogButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`

const initialAccount = {
    login:{
        view:'login',
        heading:'Login',
        subHeading:"Get access to your orders, Wishlist and recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

const LoginDialog = (props) => {
    const [toggleAccount, setToggleAccount] = useState(initialAccount.login);
    const [signup, setSignup] = useState(signupInitialValues);

    const handleClose = () => {
        props.setOpen(false)
        setToggleAccount(initialAccount.login)
    }

    const toggleSignup = () =>{
        setToggleAccount(initialAccount.signup)
    }

    const onInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value});
        console.log(signup)
    }

    const signupUser =async () => {
      let response =  await authenticateSignup(signup)
    }

    return (
        <Dialog open={props.open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Image>
                    <Typography variant='h5'>{toggleAccount.heading}</Typography>
                    <Typography>{toggleAccount.subHeading}</Typography>
                </Image>
                { toggleAccount.view ==='login' ?
                <Wrapper>
                    <TextField variant='standard'  label="Enter Email/Mobile number"/>
                    <TextField variant='standard'  label="Enter Password"/>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <DialogButton>Login</DialogButton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>

                </Wrapper>
                :
                <Wrapper>
                    <TextField variant='standard' onChange={(e) =>onInputChange(e)} name='firstname'  label="Enter First Name"/>
                    <TextField variant='standard' onChange={(e) =>onInputChange(e)} name='lastname'  label="Enter Last Name"/>
                    <TextField variant='standard' onChange={(e) =>onInputChange(e)} name='username'  label="Enter User Name"/>
                    <TextField variant='standard' onChange={(e) =>onInputChange(e)} name='email'  label="Enter Email"/>
                    <TextField variant='standard' onChange={(e) =>onInputChange(e)} name='password'  label="Enter Password"/>
                    <TextField variant='standard' onChange={(e) =>onInputChange(e)} name='phone'  label="Enter Phone Number"/>
                    <DialogButton onClick={signupUser}> Continue</DialogButton>
                </Wrapper>}
            </Component>
        </Dialog>
    )
}

export default LoginDialog;
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import logo from '../../assests/images/logo.svg'
import styled from 'styled-components';
import { Container,  } from '@mui/system';

const Navbar = styled(Box)({
    display: 'flex',
    background:'#FF0000',
    flexGrow: 1,
    position:'fixed',
    zIndex:'10',
    width:'100%',
    '& .navbar':{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',

      
    },
    '& .menu-item':{
marginLeft:'20px',

'& a':{
  textDecoration:'none',
  fontSize:'20px',
fontWeight:'300',
color:'#ffff',
}
    }
});





const Header = () => {
    // const { t } = useTranslation();
  return (
  <Navbar>
      <Container>
      <Grid xs={12} >
  <Box className='navbar'>
  <Link to={'/home'}>
<img src={logo}/>
</Link>
<Grid className='navbar'>
  <Typography className='menu-item'><Link to='/home'>Home</Link></Typography>
  <Typography className='menu-item'><Link to='/shop'>Shop</Link></Typography>
  <Typography className='menu-item'><Link to='/contact'>Contact</Link></Typography>
</Grid>
</Box>
</Grid>
      </Container>

    </Navbar>
  
    
  )
}

export default Header
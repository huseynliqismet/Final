import { Box, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import logo from '../../assests/images/logo.svg'
import styled from 'styled-components';
import { Container } from '@mui/system';

const Navbar = styled(Box)({
    display: 'flex',
    flexGrow: 1,
    '& .navbar':{
      display:'flex',
      
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

  </Box>

</Grid>
      </Container>

    </Navbar>
    
  )
}

export default Header
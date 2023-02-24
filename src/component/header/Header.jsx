import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
// import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Menu = styled(Box)({
    height: '100%',
    display: 'flex',
    flexGrow: 1,
    marginLeft: 3,
});





const Header = () => {
    // const { t } = useTranslation();
  return (
    <Menu>
<Grid >
    <Typography>Salam</Typography>

</Grid>
    </Menu>
    
  )
}

export default Header
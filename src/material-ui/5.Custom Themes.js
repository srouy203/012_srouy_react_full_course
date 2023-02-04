import React from 'react'
import { ThemeProvider } from '@emotion/react';
import { createMuiTheme } from '@mui/material';
import {Button,Typography} from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';

const theme = createMuiTheme({
    palette:{
        primary:{
            main: '#f06292',
        },
        secondary:green,
    },
    typography:{
        fontFamily: 'Aboreto',
    }

})


function CustomThemes() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Typography variant="h3" color="primary">Custom theme</Typography>
        <Button
            variant="contained"
            color='secondary'
        >Click me
        </Button>
    </ThemeProvider>
    </>
  )
}

export default CustomThemes;

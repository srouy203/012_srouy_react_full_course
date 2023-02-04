import React from 'react'
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';

import { Button } from '@mui/material';




function MakeStylee() {
    const btn={
        fontSize: 60,
        backgroundColor: 'red',
        "&:hover": {
            backgroundColor: 'yellow'
        }
    };
    

  return (
    <>
    <p>Hello MakeStyle</p>
    <Button
        sx={btn}
        variant="contained"
        type="submit"
        startIcon={<PinOutlinedIcon/>}
    >
        Submit
    </Button>
    </>
  )
}

export default MakeStylee

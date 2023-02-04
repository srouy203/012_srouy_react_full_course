import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
function Iconn() {
  return (
    <>
        <h1>Hello Marterail Icons</h1>
        <AddAPhotoIcon color="primary"/>
        <AddAPhotoIcon color="secondary"/>
        <AddAPhotoIcon color="error"/>
        <AddAPhotoIcon color="disabled"/>
        <br/>

        <AddAPhotoIcon color="primary" fontSize="small"/>
        <AddAPhotoIcon color="error"/>
        <AddAPhotoIcon color="secondary" fontSize="large"/>
        <br/>

        <Button
            onClick={ () =>{alert('Hello login')}}
            variant="contained"
            color="secondary"
            startIcon={<LoginIcon color="action"/>}
            endIcon={<AddAPhotoIcon/>}
        >Login
        </Button>


    </>
  )
}

export default Iconn;
import React from 'react'
import { Container, TextField,Typography,Button } from '@mui/material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import createTheme from '@mui/material';
function TextFields() {
    const input=({
        marginTop: 3,
        marginBottom: 3,
    })
    const [usename, setUsename]=useState('')
    const [password, setPassword]=useState('')
    const [usenameError, setUsenameError]=useState(false)
    const [passwordError, setPasswordError]=useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUsenameError(false)
      setPasswordError(false)
      
      if(usename == ""){
        setUsenameError(true)
      }

      if(password ==""){
        setPasswordError(true)
      }

      if(usename && password){
        console.log(usename,password);
      }


    }
  return (
    <>
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant='h4' color="secondary">Login form</Typography>
        <TextField
          label="usename"
          fullWidth
          sx={input}
          color='secondary'
          helperText="Please in usename"
          onChange={(e)=>setUsename(e.target.value)}
          error={usenameError}
        />
        <TextField
          label="Password"
          fullWidth
          color='secondary'
          sx={input}
          multiline
          rows='4'
          onChange={(e)=>setPassword(e.target.value)}
          error={passwordError}
        />

        <Button
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={<ExitToAppIcon/>}
        >Login</Button>

      </form>
    </Container>
    </>
  )
}

export default TextFields

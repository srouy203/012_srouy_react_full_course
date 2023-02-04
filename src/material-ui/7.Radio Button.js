import React from 'react'
import {Button, Container} from '@mui/material';
import {Radio, RadioGroup } from '@mui/material';
import {FormControlLabel} from '@mui/material';
import { useState } from 'react';
import {FormControl} from '@mui/material';
function RadioButton() {
    const [category, setCategory] = useState('pd')

    const handleSubmit = (e) =>{
        if(category){
            console.log(category);
        }
    }
  return (
    <Container>
    <form>
        <FormControl onSubmit={handleSubmit}>
        <FormControl>Select Gender</FormControl>
        <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
            <FormControlLabel value="men" control={<Radio color='secondary'/>} label="Men"/>
            <FormControlLabel value="women" control={<Radio/>} label="Women"/>
            <FormControlLabel value="pd" control={<Radio/>} label="PD"/>
            <FormControlLabel value="sim2" control={<Radio/>} label="Sim2"/>
        </RadioGroup>
        <Button
            variant="contained"
            color="secondary"
            // type="submit"
            type="button"
        >Login</Button>
        </FormControl>
        
    </form>
    </Container>
  )
}

export default RadioButton;

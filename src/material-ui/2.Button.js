import React from 'react'
import { Button, Typography } from '@mui/material'
function Buttonn() {
    return (
        <div><br />
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            <Button disabled>Disable</Button>
            <Button href='#'>link</Button>
            <Button variant='contained' disableElevation>Disable elevation</Button>
            <Button onClick={() => { alert('You click!') }}>Alert</Button>

            <Typography variant='h3'>Color</Typography>
            <Button variant='contained' color='secondary' >Secondary</Button>
            <Button variant='text' color='error'>Error</Button>
            <Button variant='outlined' color='info'>info</Button>

            <Typography variant='h3' color='secondary'>Upload button</Typography>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>

        </div>
    )
}

export default Buttonn

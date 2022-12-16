import React from 'react'
import './ButtonLayout.css'
import Button from '@mui/material/Button';



const ButtonLayout = () => {
  return (
    <div className='container'><Button variant="contained">Contained</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="contained">Contained</Button>
    </div>
  )
}

export default ButtonLayout
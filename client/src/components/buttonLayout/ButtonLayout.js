import React from 'react'
import './ButtonLayout.css'
import Button from '@mui/material/Button';
import axios from 'axios';





const ButtonLayout = () => {

  const onButtonClick = () =>{
    axios({  
      method: 'post',  
      url: 'http://localhost:3000/api/v1/fetch',  
      data: {"fetchApi": 1}
    });
  }
  return (
    <div className='container'><Button variant="contained" onClick={onButtonClick}>Contained</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="contained">Contained</Button>
    </div>
  )
}

export default ButtonLayout
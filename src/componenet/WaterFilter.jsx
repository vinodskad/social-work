import React, { useState } from 'react'
import MediaCard from './Card'
import { Grid } from '@mui/material'
import waterFilterData from '../data/waterFilter'
import ModalBox from './ModalBox'

const WaterFilter = () => {
   const [open, setOpen] = useState(false);
   const [itemData, setItemData]=useState([]);

    const handleClickOpen = (data) => {
      setItemData(data)
      setOpen(true);
    };
  return (
    <>
    <h1 className='heading'>फिल्टरद्वारे १०० टक्के शुद्ध पाणी प्रकल्प </h1>
    <Grid container spacing={2} justifyContent="center" >    
      {waterFilterData.map((item,index)=>{
        return(
            <Grid item xs={12} md={4}>
                <MediaCard data={item} key={index} handleClickOpen={handleClickOpen}/>                
            </Grid>
        )
      })}
    </Grid>
    <ModalBox open={open} setOpen={setOpen} data={itemData}/>
    </>
  )
}

export default WaterFilter

import React from 'react'
import MediaCard from './Card'
import { Card, Container, Grid } from '@mui/material'
import AlignItemsList from './List'
import solarData from '../data/solar'

const Solar = () => {
  return (
    <Container className="animate__animated animate__slideInLeft">
    <h1 className='heading'>‘तमसो मा ज्योतिर्गमय” - अंधारातून उजेडाकडे घेऊन जाणार चंदनदादांचा महत्वकांक्षी संकल्प</h1>
    
    <Grid container spacing={2} justifyContent="center">
      <Card sx={{p:2}}>
        <p style={{fontSize:"1rem"}}>जानेवारी २०२४ पासून सुरवात झालेल्या चंदनदादांच्या या महत्वाकांक्षी उपक्रमाअंतर्गत आत्तापर्यंत १२ गावांमध्ये सुमारे २५० आधुनिक सौर पथदिव्यांचे 💯% वाटप करण्यात आले आहे. या गावांची यादी पुढीलप्रमाणे</p>
         <Grid container spacing={2} justifyContent="center">   
        {solarData.complete.map((item)=>{
          return(
             <Grid item xs={12} md={4}>
             <AlignItemsList data={item}/>
          </Grid>
          )
        })}
        </Grid>
        
      </Card>
    </Grid>
    <Grid container spacing={2} sx={{mt:3}} justifyContent="center">
      <Card sx={{p:2}}>
        <p style={{fontSize:"1rem"}}>आधुनिक सौर पथदिव्यांसाठी या टप्प्यात पात्र ठरलेल्या गावांची यादी</p>
         <Grid container spacing={2} justifyContent="center">   
        {solarData.process.map((item)=>{
          return(
             <Grid item xs={12} md={4}>
             <AlignItemsList data={item}/>
          </Grid>
          )
        })}
        </Grid>
        
      </Card>
    </Grid>
    </Container>
  )
}

export default Solar

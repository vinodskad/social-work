import * as React from 'react';
import Logo from './../assets/logo3.png'
import { Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
//import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';
//import Sitemark from './SitemarkIcon';



export default function AppAppBar() {


  return (
    <div style={{ backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  padding: "10px 20px",zIndex: 1000}}>
    <Grid container spacing={2}>
      <Grid className="animate__animated animate__slideInLeft" item size={{ xs: 6, md: 9 }}>
        <img src={Logo} className='logo' alt="Chandan Dada Chavan"/>
        </Grid>
      <Grid item size={{ xs: 6, md: 3 }} className="animate__animated animate__slideInRight">
        <div className='contact'>
        <WhatsAppIcon style={{ color: "green", fontSize: 24 }} />
        <span>+39 348 389 3035</span>
      </div>

      <div className='contact'>
        <PhoneAndroidIcon style={{ color: "blue", fontSize: 24 }} />
        <span>+39 348 389 3035</span>
      </div>

      <div className='contact'>
        <EmailIcon style={{ color: "red", fontSize: 24 }} />
        <span>chandanchavan@gmail.com</span>
      </div>

      </Grid>
    </Grid>
    </div>
  );
}

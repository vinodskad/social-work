import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Logo from './../assets/logo3.png'
import { Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
//import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';
//import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div style={{ backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  padding: "10px 20px",zIndex: 1000}}>
    <Grid container spacing={2}>
      <Grid className="animate__animated animate__slideInLeft" item size={{ xs: 6, md: 9 }}>
        <img src={Logo} className='logo'/>
        </Grid>
      <Grid item size={{ xs: 6, md: 3 }} className="animate__animated animate__slideInRight">
        <div className='contact'>
        <WhatsAppIcon style={{ color: "green", fontSize: 24 }} />
        <span>+01 8456765678</span>
      </div>

      <div className='contact'>
        <PhoneAndroidIcon style={{ color: "blue", fontSize: 24 }} />
        <span>+91 9456765638</span>
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

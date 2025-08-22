import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import { limitString } from '../common/stringLimit';

const MediaCard = ({ data ,handleClickOpen}) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        minHeight: 430, 
        display: "flex", 
        flexDirection: "column" 
      }} 
      className={data.style}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.avatar}
          </Avatar>
        }
        title={data.heading}
        titleTypographyProps={{ fontWeight: 'bold' }}
        subheader={data.date}
      />
      
      <CardMedia
        sx={{ height: 140 }}
        image={data.images[0].image}
        title="green iguana"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {limitString(data.description, 300)}
        </Typography>
      </CardContent>

      {/* Button नेहमी तळाशी */}
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button variant="outlined" size="small" onClick={()=>handleClickOpen(data)}>अधिक माहिती</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;

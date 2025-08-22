import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

export default function AlignItemsList({data}) {
  return (
    <Card>
    <List sx={{ width: '100%', maxWidth: 360, minHeight:"95px", bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={data.avtar}  src={data.avtar} sx={{ bgcolor: data.color }}  />
        </ListItemAvatar>
        <ListItemText
          primary={data.village}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {data.village}
              </Typography>
              {data.heading}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </Card>
  );
}

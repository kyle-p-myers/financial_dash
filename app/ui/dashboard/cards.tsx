import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { teal } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { purple } from '@mui/material/colors';

const personal = teal[200]; 
const team = pink[300];
const org = purple[300];

const bull = (
  <Box
    component="span"
    sx={{ mx: '2px', transform: 'scale(0.8)', }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        Total Notes Created
      </Typography>
      <Typography variant="h3" component="div" textAlign={'center'}>
        1,4567
      </Typography>
      <Typography sx={{ mt: 4, mb: 1.5 }} color="text.secondary">
        <CircleIcon style={{color: personal }} > </CircleIcon> Personal - 25
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <CircleIcon style={{color: team }} > </CircleIcon> Team - 87
      </Typography> <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <CircleIcon style={{color: org }} > </CircleIcon> Organization - 785
      </Typography>
    </CardContent>
  </React.Fragment>

);

export default function NotesCreatedCard() {
  return (
    <div className='flex mt-12 gap-3'>
      <Box sx={{ minWidth: 300, }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
}
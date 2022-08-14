import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./style.css"; 

type MediaCardProps = {
    mediaImage : string,
    headLine : string,
    /* postedOn : string,
    type : string, 
    location : string */
}

const CustomMediaCard : React.FC<MediaCardProps> = (props) => {

  const {mediaImage, headLine} = props;

  return (
    <Card classes = {{root : 'mediaCardRoot'}}>
      <CardMedia
        component="img"
        height="140"
        image={mediaImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headLine}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
           <a href="#">Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CustomMediaCard;
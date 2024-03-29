import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid,Container } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import "./styleCard.css"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardOk({data}) {
  const [expanded, setExpanded] = React.useState(false);
  const{img,description,linkSite,linkGit,title}=data

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  /*desp de cardheader
  avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }*/
  return (
   
    <Card sx={{ maxWidth: 345 }} className="card" >
        
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt={title}
        onClick={()=>window.open(linkGit)}
        className="img-card"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className='linkscard'>
          <IconButton aria-label="add to favorites" className='icongit' >
          <GitHubIcon onClick={()=>window.open(linkGit)} />
          </IconButton>
          <IconButton aria-label="share" className='iconlink'>
            <LanguageIcon onClick={()=>window.open(linkSite)} />
          </IconButton>
        </div>
       
      </CardActions>
    
    
    </Card>

  );
}
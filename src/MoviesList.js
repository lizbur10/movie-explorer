import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function MoviesList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    const baseURL = "http://image.tmdb.org/t/p/w1280"
    return props.list.map(movie =>{
      return (<div><Card  key={movie.id}>
      <CardHeader
        title={movie.original_title}
        subheader={movie.release_date}
      />
      <CardMedia
      className={classes.media}
        image={baseURL+movie.poster_path}
        title={movie.popularity}
        />
<CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        vote count:{movie.vote_count}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            {movie.overview}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>)
        }) 
    }//class


    // import React from 'react';
    // import { makeStyles } from '@material-ui/core/styles';
    // import Card from '@material-ui/core/Card';
    // import CardActionArea from '@material-ui/core/CardActionArea';
    // import CardActions from '@material-ui/core/CardActions';
    // import CardContent from '@material-ui/core/CardContent';
    // import CardMedia from '@material-ui/core/CardMedia';
    // import Button from '@material-ui/core/Button';
    // import Typography from '@material-ui/core/Typography';
    
    // const useStyles = makeStyles({
    //   root: {
    //     maxWidth: 345,
    //   },
    //   media: {
    //     height: 140,
    //   },
    // });
    
    // export default function MediaCard() {
    //   const classes = useStyles();
    
    //   return (
    //     <Card className={classes.root}>
    //       <CardActionArea>
    //         <CardMedia
    //           className={classes.media}
    //           image="/static/images/cards/contemplative-reptile.jpg"
    //           title="Contemplative Reptile"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="h2">
    //             Lizard
    //           </Typography>
    //           <Typography variant="body2" color="textSecondary" component="p">
    //             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    //             across all continents except Antarctica
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //           Share
    //         </Button>
    //         <Button size="small" color="primary">
    //           Learn More
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   );
    // }
    




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function MoviesList() {
//     const baseURL= "http://image.tmdb.org/t/p/w1280/"
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);
  
//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };



//     return ( this.props.list.map(movie => { <div>{
// <Card className={classes.root}  key={movie.id}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={movie.original_title}
//         release_date={movie.release_date}
        
//       />
//       <CardMedia
//         className={classes.media}
//         image={baseURL + movie.poster_path}
//         popularity={movie.popularity}
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//         {movie.original_title}
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Details:</Typography>
//           <Typography paragraph>
//             {movie.original_title}
//           </Typography>
//           <Typography paragraph>
//             {movie.overview}
//           </Typography>
//           <Typography paragraph>
//           {movie.overview}
//           </Typography>
//           <Typography>
//             {movie.vote_count}
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
                    
//             // )      
//         }</div>}) )
//     }

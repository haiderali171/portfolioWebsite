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
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      marginLeft: '5rem',
      marginTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      paddingLeft: 50,
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
    box: {
      display: 'flex',
      flexDirection: 'row',
    }
  }));
  
  const List = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const { data } = props;
    if (!data || data.length === 0) return <p>Nothing as of yet</p>;
  
    return (
        <div className={classes.box}>
    {data.map((info) => {
        return ( 
        <Card className={classes.root}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
            }
            title={info.name}
            subheader={info.id}
            />
            <CardMedia
            className={classes.media}
            image={info.thumbnail}
            title={info.title}
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            </CardActions>
            <Link to={`/blog/${info.slug}`} className="stretched-link">Continue reading</Link>
        </Card>
        );
              }
        
            )}
        </div>
    );
};

export default List;
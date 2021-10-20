import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
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

    const { data } = props;
    if (!data || data.length === 0) return <p>Nothing as of yet</p>;

  
    return (
        <div className={classes.box}>
    {data.map((info) => {
        const createBlog = () => {
            return {__html: info.content}
        };  

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
            <Typography dangerouslySetInnerHTML={createBlog()} variant="body2" color="textSecondary" component="p">
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
            <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link></p>
        </Card>
        );
              }
        
            )}
        </div>
    );
};

export default List;
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const divStyle = {
    width: '1000px',
    height: '50px',
  };


    
export default function Nav() {
    const classes = useStyles();

/*const Nav = () =>*/
    return (
    <div className={classes.root} style={divStyle}>
    <AppBar position="static">
    <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <NavLink className="nav-link" exact to="/">
        <Typography variant="h6" className={classes.title}>
            Home
        </Typography>
        </NavLink>
        <NavLink className="nav-link" exact to="/blog">
        <Typography variant="h6" className={classes.title}>
            Blog
        </Typography>
        </NavLink>
        <Button color="inherit">Login</Button>
    </Toolbar>
    </AppBar>
    </div>
    );
}








/*export default Nav;*/






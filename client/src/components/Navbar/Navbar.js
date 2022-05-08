import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import memories from '../../img/1.jpg'
import useStyles from './style'
const Navbar = () => {
  const classess = useStyles()
  const user = null
  return (
    <AppBar className={classess.appBar} position="static" color="inherit">
      <div className={classess.brandContainer}>
        <Typography
          className={classess.heading}
          component={Link}
          to="/"
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          src={memories}
          alt="memories"
          height="60"
          className={classess.image}
        />
      </div>
      <Toolbar className={classess.toolbar}>
        {user ? (
          <div className={classess.profile}>
            <Avatar
              className={classess.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classess.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/auth"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

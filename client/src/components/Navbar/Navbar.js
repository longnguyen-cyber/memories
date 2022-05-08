import { AppBar, Typography } from '@material-ui/core'
import React from 'react'
import memories from '../../img/1.jpg'
import useStyles from './style'
const Navbar = () => {
  const classess = useStyles()

  return (
    <AppBar className={classess.appBar} position="static" color="inherit">
      <Typography className={classess.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img
        src={memories}
        alt="memories"
        height="60"
        className={classess.image}
      />
    </AppBar>
  )
}

export default Navbar

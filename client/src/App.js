import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import Posts from './components/Posts/Posts'
import useStyles from './style'
function App() {
  const classess = useStyles()
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => dispatch(getPosts()), [dispatch])

  return (
    <Container maxidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid
            container
            justifycontent="space-between"
            alignItems="stretch"
            spacing={3}
            className={classess.mainContainer}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App

import { Button, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import useStyles from './style'
import { useDispatch, useSelector } from 'react-redux'
import { createPosts, updatePost } from '../../actions/posts'
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectFile: ''
  })
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  )
  useEffect(() => {
    if (post) setPostData(post)
  }, [post])
  const dispatch = useDispatch()
  const classes = useStyles()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else dispatch(createPosts(postData))
    clear()
  }
  const clear = () => {
    setCurrentId(0)
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }

  return (
    <Paper className={`${classes.root} ${classes.form}`}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Edit' : 'Creating'} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => {
            e.preventDefault()
            setPostData({ ...postData, creator: e.target.value })
          }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            e.preventDefault()
            setPostData({ ...postData, title: e.target.value })
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => {
            e.preventDefault()
            setPostData({ ...postData, message: e.target.value })
          }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            e.preventDefault()
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form

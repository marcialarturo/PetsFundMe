import React, { useState, useEffect } from 'react'
import { Avatar, Button, Paper, CircularProgress } from '@mui/material'
import './Profile.css'
// import { displayFollowing } from '../../../Phase/displayFollowing'

function Following({ selectedProfile }) {
  console.log('in Following', selectedProfile)
  const [followings, setFollowings] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // checkFollowing()
  }, [])

  // const checkFollowing = async () => {
  //   setLoading(true)
  //   const res = await displayFollowing(selectedProfile.address)
  //   if (res !== 'No Followers!') setFollowings(res)
  //   setLoading(false)
  // }

  return (
    <div>
      <br />
      <p>Coming Soon...</p>
      {/*
      {loading ? (
        <CircularProgress style={{ marginTop: '1rem' }} />
      ) : (
        followings.map((f, i) => (
          <Paper
            variant="outlined"
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.9rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar style={{ marginRight: '1rem' }} src={f.image} />
              <p
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '200px',
                }}
              >
                {f.name}
              </p>
            </div>
            <Button className="phase-btn" variant="contained">
              Following
            </Button>
          </Paper>
        ))
      )} */}
    </div>
  )
}

export default Following

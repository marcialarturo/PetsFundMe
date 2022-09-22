import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router'
import { Avatar, Button, Paper, CircularProgress } from '@mui/material'
import './Profile.css'

// import { displayFollowers } from '../../../Phase/displayFollowers'

function Followers({ selectedProfile }) {
  const [followers, setFollowers] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    // checkFollowers()
  }, [])

  // const checkFollowers = async () => {
  //   setLoading(true)
  //   const accountToFollowAddress = selectedProfile.address
  //   const res = await displayFollowers(accountToFollowAddress)
  //   if (res !== 'No Followers!') setFollowers(res)
  //   setLoading(false)
  // }

  return (
    <div>
      <br />
      <p>Coming Soon...</p>
      {/* {loading ? (
        <CircularProgress style={{ marginTop: '1rem' }} />
      ) : (
        followers.map((f, i) => (
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
              <Avatar
                style={{ marginRight: '1rem' }}
                src={f.image || f.avatar}
              />
              <p
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '200px',
                }}
                onClick={() => history.push(`${f.address}`)}
              >
                {f.name || f.username}
              </p>
            </div>
            <Button className="phase-btn" variant="contained">
              Follow
            </Button>
          </Paper>
        ))
      )} */}
    </div>
  )
}

export default Followers

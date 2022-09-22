import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Button, Card } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import './CreateLinks.css'
// import { createPhase } from '../../Phase/createPhase'

function CreateLinks({ currentAccount, image, username, bio, coverPhoto }) {
  const history = useHistory()
  const [twitter, setTwitter] = useState('')
  const [loading, setLoading] = useState(false)
  const [instagram, setInstagram] = useState('')
  const [linkArray, setLinkArray] = useState([])
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')

  const createProfile = async (linksArray) => {
    let user_name = username ? username : 'electrone'
    let avatar = image ? image : 'https://i.imgur.com/62G0yQ0.jpeg'
    let banner = coverPhoto ? coverPhoto : 'https://i.imgur.com/62G0yQ0.jpeg'

    let bio_ = bio
      ? bio
      : 'I am a software developer who enjoys web and mobile development through universal components. By day I love to code and drinking tea. At night I sleep.'
    let links = linksArray
      ? linksArray
      : [
          [
            'Website',
            'https://transak.gitbook.io/transak-docs/quick-guides/setting-up-a-quick-demo-integration',
          ],
        ]
    let address = currentAccount
      ? currentAccount
      : '0x891352608735f630AF999ba572fd57511137e758'

    // const res = await createPhase(address, user_name, avatar, banner, bio_, links)
    // await res.wait()
    // console.log(res)
    setLoading(false)
    history.push('/')
  }

  const save = async () => {
    setLoading(true)
    let twitterData = []
    let instagramData = []
    let newArr = []

    if (twitter) {
      twitterData = ['Twitter', `https://twitter.com/${twitter}`]
      newArr.push(twitterData)
    }

    if (instagram) {
      instagramData = ['Instagram', `https://www.instagram.com/${instagram}`]
      newArr.push(instagramData)
    }
    setLinkArray([...linkArray, ...newArr])
    createProfile([...linkArray, ...newArr])
  }

  const addTwoInputs = () => {
    const temp = [description, url]
    setLinkArray([...linkArray, temp])
    setDescription('')
    setUrl('')
  }

  return (
    <Container
      className="root-pet-details"
      style={{ minHeight: '50vh', paddingBottom: '3rem' }}
    >
      <center>
        <Card
          style={{
            maxWidth: '500px',
            padding: '2rem',
            paddingBottom: '3rem',
            borderRadius: '13px',
            textAlign: 'start',
          }}
        >
          <div className="">
            <Button
              className="whiteLink-no-active"
              component={Link}
              to="/create"
            >
              Appearance
            </Button>

            <Button className="whiteLink" component={Link} to="/create-links">
              Links
            </Button>
          </div>
          <br />

          <hr style={{ border: '1px solid #ccc' }} />
          <br />

          <p>
            <label htmlFor="fname">Twitter</label>
          </p>
          <input
            type="text"
            id="fname"
            name="username"
            placeholder="@"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="create-profile-input"
          ></input>

          <br />
          <p>
            <label htmlFor="fname">Instagram</label>
          </p>
          <input
            type="text"
            id="fname"
            name="Username"
            placeholder="@"
            className="create-profile-input"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          ></input>
          <br />
          <br />
          <br />

          {/* NEW LINK */}
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100%' }}>
              <p>
                <label htmlFor="fname">Description</label>
              </p>
              <input
                type="text"
                id="fname"
                name="description"
                placeholder=""
                className="add-link-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div style={{ width: '100%' }}>
              <p>
                <label htmlFor="fname">URL</label>
              </p>
              <input
                type="text"
                id="fname"
                name="URL"
                placeholder=""
                className="add-link-input"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              ></input>
            </div>
          </div>

          <br />
          <br />
          <Button
            className="whiteLink"
            variant="contained"
            onClick={addTwoInputs}
          >
            + Add new link
          </Button>

          <br />
          <br />
          <br />
          <hr style={{ border: '1px solid #ccc' }} />
          <br />
          <br />
          {loading ? (
            <div className="">
              <LinearProgress />
            </div>
          ) : (
            ''
          )}

          <br />
          <center>
            <Button className="whiteLink" component={Link} to="/">
              Nevermind
            </Button>
            <Button className="phase-btn" variant="contained" onClick={save}>
              Save
            </Button>
          </center>
        </Card>
      </center>
    </Container>
  )
}

export default CreateLinks

import React, { useEffect, useState } from 'react'
import ProfileList from './profile-list/ProfileList'
import logo from '../../../images/logo.png'
import { Grid, Container, Card, Button } from '@mui/material'
import { WorldIDWidget } from '@worldcoin/id'
import './HomeGallery.css'

function HomeGallery({
  setSelectedProfile,
  contract,
  connectWallet,
  currentAccount,
}) {
  console.log('HomeGallery n contract', contract)

  const [data, setData] = useState([])

  useEffect(() => {
    if (contract) {
      getFundraisers()
    }
  }, [contract])

  const getImage = (ipfsURL) => {
    if (!ipfsURL) return
    ipfsURL = ipfsURL.split('://')
    return 'https://ipfs.io/ipfs/' + ipfsURL[1]
  }

  const getFundraisers = async () => {
    const temp = []
    const res = await contract.getAllFundraisers()

    for (let i = 0; i < res.length; i++) {
      let obj = {}
      // data from smart contract
      const organizer = res[i][4]
      const totalDonations = res[i]['totalDonations'].toString()
      const fundraiserId = res[i].id.toString()

      // fetchs data from nftStorage
      const nftStorageURL = res[i][1]
      let getNFTStorageData = await fetch(nftStorageURL)
      let fundraiserData = await getNFTStorageData.json()

      //  fundraiser data
      const img = getImage(fundraiserData.image)
      // gets data from nftStorage
      const data = JSON.parse(fundraiserData.description)
      // builds fundraiser data
      obj.fundraiserId = fundraiserId
      obj.organizer = organizer
      obj.totalDonations = totalDonations
      obj.title = fundraiserData.name
      obj.image = img
      obj.description = data.description
      obj.category = data.category
      obj.targetAmmount = data.targetAmmount
      obj.creationDate = data.creationDate
      temp.push(obj)
    }

    setData(temp)
  }
  return (
    <div
      style={{
        minHeight: '70vh',
        paddingBottom: '4rem',
        paddingTop: '.5rem',
      }}
    >
      <Container>
        <Container>
          <div className="root">
            <Grid
              container
              spacing={3}
              style={{
                paddingTop: '1rem',
                paddingBottom: '1rem',
              }}
            >
              <Grid item xs={5} className="outer">
                <img src={logo} className="logo-hero" alt="logo-hero" />
              </Grid>
              <Grid item xs={7}>
                <p className="home-text-intro">
                  <strong>PetsFoundMe</strong> is a social app built by the
                  community for everyone who loves and supports pets.
                  PetsFoundMe is an NFT platform where pet owners and pet lovers
                  come together and help each other to solve their pet's needs
                  from expensive surgeries to food supplies or free services.
                </p>{' '}
                <br />
                <p className="home2-text-intro">
                  PetsFoundMe is the perfect pet hub for nonprofits, medical &
                  government institutions, influencers, and artists to come
                  together to solve the needs of the Community Pets. Come to ask
                  for financial support, as questions, answer questions, and
                  give or receive donations. Come join us to make this planet a
                  better world.
                </p>
              </Grid>
            </Grid>
          </div>
        </Container>

        {/* search */}
        <form className="search-form">
          <div className="pseudo-search">
            <input
              type="text"
              placeholder="Search for people, etc"
              autoFocus
              required
            />
            <span className="search-clear">Clear</span>
            <span className="search-icon">🔍</span>
          </div>
        </form>

        <br />
        <Card
          style={{
            borderRadius: '24px',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            backgroundColor: '#fff9f7',
            minHeight: '20rem',
          }}
        >
          {data.length ? (
            <ProfileList setSelectedProfile={setSelectedProfile} data={data} />
          ) : (
            <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
              <Button
                style={{ backgroundColor: '#FF835B', color: 'white' }}
                onClick={() => connectWallet()}
              >
                Login to continue
              </Button>
            </div>
          )}
        </Card>
      </Container>
    </div>
  )
}

export default HomeGallery

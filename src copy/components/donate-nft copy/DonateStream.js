import React, { useEffect, useState } from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import './DonateNFT.css'
import {
  TextField,
  Container,
  Typography,
  Button,
  IconButton,
  Card,
} from '@mui/material'
import { apiKeyport } from '../APIKEYPORT'
import { Framework } from '@superfluid-finance/sdk-core'

function DonateStream({
  selectedProfile,
  contract,
  donateNfts,
  provider,
  signer,
  currentAccount,
}) {
  const [image, setImage] = useState(null)
  const [error, setError] = useState(null)
  const [imageName, setImageName] = useState(null)
  const [description, setDescription] = useState(null)
  const [codeHash, setCodeHash] = useState(null)
  const [donationConfirmation, setDonationConfirmation] = useState(null)
  const [ammount, setAmmount] = useState(null)
  const [donationAmmount, setDonationAmmount] = useState(null)
  const [streamConfirmation, setStreamConfirmation] = useState(null)

  const donateNow = async (event) => {
    event.preventDefault()
    const res = await contract.donate(
      selectedProfile.fundraiserId,
      donationAmmount,
    )
    const tx = await res.wait()

    console.log('🚀 ~ file: DonateNFT.js ~ line 49 ~ donateNow ~ tx', tx)
    setDonationConfirmation(tx)
    setDonationAmmount('')
  }

  const streamPayment = async () => {
    const sf = await Framework.create({
      chainId: 80001, // you can also use chainId here instead
      provider: provider,
    })
    const createFlowOperation = sf.cfaV1.createFlow({
      sender: currentAccount,
      receiver: selectedProfile
        ? selectedProfile.organizer
        : '0x7214859DD1750d31EDa889bA44d432f9805Ff3F7',
      superToken: '0x5d8b4c2554aeb7e86f387b4d6c00ac33499ed01f',
      flowRate: donationAmmount.toString(), // pass it on, amountToSend /10**18
    })
    const txnResponse = await createFlowOperation.exec(signer)
    const txnReceipt = await txnResponse.wait()
    if (txnReceipt) {
      setStreamConfirmation(txnReceipt)
    }
  }

  const mintWithNFTPort = async (event) => {
    event.preventDefault()
    setImage(event.target.files[0])
    let mintAddress = selectedProfile
      ? selectedProfile?.organizer
      : '0x9B6efdCFcdfb9825f805C2FE2f7f87eBBe76b253'
    const form = new FormData()
    form.append('file', event.target.files[0])
    const options = {
      method: 'POST',
      body: form,
      headers: {
        Authorization: apiKeyport,
      },
    }

    if (image == '' || description == '') {
      alert('Please enter NFT name and description')
      return
    }

    fetch(
      'https://api.nftport.xyz/v0/mints/easy/files?' +
        new URLSearchParams({
          chain: 'polygon',
          name: imageName,
          description: description,
          mint_to_address: mintAddress,
          ammount: ammount,
          msg:
            'This is a gift from PetsFoundMe Community, thank you for everything you do!',
        }),
      options,
    )
      .then(function (response) {
        return response.json()
      })
      .then(function (responseJson) {
        console.log(
          '🚀 ~ file: DonateNFT.js ~ line 84 ~ responseJson',
          responseJson,
        )
        // Handle the response
        if (responseJson) {
          setCodeHash(responseJson)
        } else {
          setError('Oops! Some error occurred. Try again! ')
        }
      })
  }

  return (
    <Container
      className="root-create-pet"
      style={{ minHeight: '70vh', paddingBottom: '3rem' }}
    >
      {currentAccount ? (
        <div>
          {donationConfirmation ? (
            <Card className="code-hash">
              <Typography gutterBottom className="title">
                Your Donation was succesfully sent 🎉
              </Typography>

              <Typography gutterBottom variant="subtitle1">
                Confirmation blockHash:
              </Typography>
              <p> {donationConfirmation.blockHash}</p>
              <br />
            </Card>
          ) : (
            ''
          )}
          <br />
          <br />

          {streamConfirmation ? (
            <Card className="code-hash">
              <Typography gutterBottom className="title">
                Your Superfluid Stream was successfully created 🎉
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                See more details:
              </Typography>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://app.superfluid.finance/`}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="transaction-btn"
                >
                  Go
                </Button>
              </a>
            </Card>
          ) : (
            ''
          )}

          {/* Confirmation for NFTS  */}
          {codeHash ? (
            <Card className="code-hash">
              <Typography gutterBottom className="title">
                Your NFT was minted succesfully 🎉
              </Typography>
              <Typography gutterBottom variant="subtitle1">
                Confirmation Transaction:
              </Typography>
              <p> {codeHash.transaction_hash}</p>

              <br />
              <p>MintedAddress:</p>
              <p>{codeHash.mint_to_address}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={codeHash.transaction_external_url}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="transaction-btn"
                >
                  See transaction details
                </Button>
              </a>
            </Card>
          ) : (
            ''
          )}
          <br />
          <br />

          {donateNfts ? (
            <>
              <h2> 💫 Donate NFTs Now ✨</h2>
              <br />
              <br />
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="pet"
                  className="img-preview"
                />
              ) : (
                ''
              )}
              <div className="form-container">
                <form className="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="NFTs name"
                    variant="outlined"
                    className="text-field"
                    defaultValue={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Short message"
                    variant="outlined"
                    className="text-field"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />

                  <input
                    accept="image/*"
                    className="input"
                    id="icon-button-photo"
                    defaultValue={image}
                    onChange={mintWithNFTPort}
                    type="file"
                  />

                  <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                      <PhotoCameraIcon />
                    </IconButton>
                  </label>

                  <Button size="large" variant="contained" color="primary">
                    Upload & Submit
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <form className="form" noValidate autoComplete="off">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Donation Ammount"
                variant="outlined"
                type="number"
                className="text-field"
                defaultValue={donationAmmount}
                onChange={(e) => setDonationAmmount(e.target.value)}
              />
              <Button
                size="large"
                variant="contained"
                color="primary"
                // onClick={streamPayment}
                onClick={donateNow}
              >
                DonateStream
              </Button>
            </form>
          )}

          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <h2>Please Login</h2>
      )}
    </Container>
  )
}

export default DonateStream

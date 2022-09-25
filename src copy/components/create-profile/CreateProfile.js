import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Button, Card, TextField, MenuItem } from '@mui/material'
import './CreateProfile.css'
import { apiKey } from '../../APIKEYS'
import Rectangle from '../../images/Rectangle 77.png'
import { NFTStorage, File } from 'nft.storage'
import { WorldIDWidget } from '@worldcoin/id'

/*
1. TO CREATE  A FUNDRAISER
img
tittle
description
money_target
organizer is wAddress
date-created


2. FUNDRAISER SHOULD HAVE:
  - list of donators
    -  wAddress & ammount donated

3. Updates(tableLand)
  - Owner can create updates for donators to keep up with fundraiser
  I.G:
  Lana Shapiro 15 hrs ago
    So heartbreaking...may their memories be a blessing....our deepest condolences...

*/

function CreateProfile({ currentAccount, contract }) {
  const history = useHistory('')
  const fundraiserType = useRef()
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('Volunteer')
  const [imageType, setImageType] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState(
    'On top of the daily heartache of the rescue cats themselves, the vets bill is spiraling and becoming an enormous worry for Sue. And that is the one thing we can try and help her with. We need to keep those doors open, for the sake of the cats that really need her help and their chance. We know things are not easy at the moment so we dont have any expectations on anybody, we can only hope that those who can throw a pound or two in our begging bucket- do. Every single pound REALLY does count, because every pound you give is one less to find. Thank you',
  )
  const [targetAmmount, setTargetAmmount] = useState('')

  const getDay = async () => {
    let d = new Date()
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    return `${mo}-${da}-${ye}`
  }

  const saveToNFTStorage = async () => {
    //  TO CREATE
    //  1. save to nft & get CID
    // 2. pass CId & targetAmmount to SC
    //  3. contract.createFoundraiser(CID,targetAmm)
    /*
      - just call contract.funcName( CId, targetAmmount)
      - returns true that was created.
    */
    try {
      const creationDate = await getDay()
      const obj = {
        title,
        description,
        targetAmmount,
        creationDate,
        category,
      }

      const client = new NFTStorage({ token: apiKey })
      const metadata = await client.store({
        name: title,
        description: JSON.stringify(obj),
        image: new File([image], 'imageName', { type: 'image/*' }),
      })
      console.log('metadata', metadata)

      console.log(
        'click=====',
        image,
        title,
        description,
        targetAmmount,
        creationDate,
      )

      if (metadata) {
        console.log('metadata URL', metadata?.url)
        const url = metadata?.url.substring(7) //  bafyreifeiksc7pfbdex5fhes2inqdail7cvf3jfphugtpyzw4rpzte3rca/metadata.json
        const fullUrl = `https://cloudflare-ipfs.com/ipfs/${url}`
        console.log('fullUrl', fullUrl)

        const saveToContract = await contract.createFoundraiser(
          fullUrl,
          targetAmmount,
        )
        const tx = await saveToContract.wait()
        console.log('tx', tx)
        history.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleImage = async (event) => {
    setImage(event.target.files[0])
    setImageType(event.target.files[0].type)

    // try {
    //   setLoading(true)
    //   const client = new NFTStorage({ token: apiKey })
    //   const metadata = await client.store({
    //     name: bookName,
    //     description: `${description},$, ${walletAddress},$,${author}`,
    //     image: new File([image], imageName, { type: imageType }),
    //   })
    //   if (metadata) {
    //     navigate('/')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }

    // const updataData = new FormData()
    // updataData.append('file', event.target.files[0])
    // const res = await axios.post(
    //   'https://api.pinata.cloud/pinning/pinFileToIPFS',
    //   updataData,
    //   {
    //     maxContentLength: 'Infinity',
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       pinata_api_key: '309d3c624b4ce20cea2b',
    //       pinata_secret_api_key:
    //         'a743aec5905097d38724b5daab66f9c206b0b3ef2d01ecccbe79cd2f0e15d026',
    //     },
    //   },
    // )
    // setImage('https://gateway.pinata.cloud/ipfs/' + res.data.IpfsHash)
  }

  return (
    <Container
      className="root-pet-details"
      style={{ minHeight: '50vh', paddingBottom: '3rem' }}
    >
      <center>
        <WorldIDWidget
          actionId="wid_staging_d0f1e5ed4ab4ce8909135c276ca11d40" // obtain this from developer.worldcoin.org
          signal="my_signal"
          enableTelemetry
          onSuccess={(verificationResponse) =>
            console.log(verificationResponse)
          } // pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
          debug={true} // to aid with debugging, remove in production
        />
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
            <Button className="whiteLink" component={Link} to="/create">
              Create Fundraising
            </Button>
          </div>

          <br />
          <hr style={{ border: '1px solid #ccc' }} />
          <br />
          <img
            style={{
              width: '150px',
              top: '0',
              left: '0',
            }}
            src={image ? URL.createObjectURL(image) : Rectangle}
            alt="userBGimage"
          />

          <label htmlFor="formFileImage5">+ Upload</label>

          <input
            type="file"
            id="formFileImage5"
            onChange={handleImage}
            defaultValue={image}
            style={{ display: 'none' }}
            required
          />

          <br />
          <br />
          <p>
            <label htmlFor="fname">Title</label>
          </p>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="fundraising tittle.."
            className="create-profile-input"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <p>
            <label htmlFor="w3review">Description</label>
          </p>
          <textarea
            className="create-profile-input"
            type="text"
            id="description"
            name="description"
            rows="4"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p style={{ textAlign: 'right', fontSize: '11px' }}>
            <label htmlFor="w3review">0/250</label>
          </p>
          <br />

          <p>
            <label htmlFor="fname"> Target Ammount</label>
          </p>
          <input
            type="number"
            id="targetAmmount"
            name="targetAmmount"
            placeholder="$500"
            className="create-profile-input"
            defaultValue={targetAmmount}
            onChange={(e) => setTargetAmmount(e.target.value)}
          ></input>
          <br />
          <br />

          <p>
            <label htmlFor="fname"> Category</label>
          </p>
          <br />
          <TextField
            fullWidth
            name="fundraiserType"
            select
            variant="outlined"
            className="text-field"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue=""
            ref={fundraiserType}
          >
            <MenuItem value="Medical">Medical</MenuItem>
            <MenuItem value="Memorial">Memorial</MenuItem>
            <MenuItem value="Emergency">Emergency</MenuItem>
            <MenuItem value="Nonprofit">Nonprofit</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Family">Family</MenuItem>
            <MenuItem value="Volunteer">Volunteer</MenuItem>
            <MenuItem value="Sports">Sports</MenuItem>
            <MenuItem value="Community">Community</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>

          <br />

          <br />

          <br />
          <hr style={{ border: '1px solid #ccc' }} />
          <br />
          <center>
            <Button className="whiteLink" component={Link} to="/">
              Nevermind
            </Button>
            <Button
              className="phase-btn"
              variant="contained"
              onClick={saveToNFTStorage}
            >
              Create
            </Button>
          </center>
        </Card>
      </center>
    </Container>
  )
}

export default CreateProfile

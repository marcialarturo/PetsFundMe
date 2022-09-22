// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// function Updates({ account, currentAccount, selectedProfile }) {
//   const { userAddress } = useParams()
//   console.log('selectedProfile', selectedProfile)
//   const [showProfile, setShowProfile] = useState(false)

//   useEffect(() => {
//     checkFollow()
//   }, [])

//   useEffect(() => {
//     // getProfile(userAddress)
//   }, [userAddress])

//   // const getProfile = async () => {
//   //   const user = await displayPhase(userAddress)
//   //   console.warn(user)
//   //   setSelectedProfile(user)
//   // }

//   const checkFollow = async (e) => {
//     const follower = currentAccount
//     // const res = await doesFollow(follower, selectedProfile.address)
//     // console.log('doesFollow res', res)
//     // setShowProfile(res)
//   }

//   const requestFollow = async () => {
//     // const follower = currentAccount
//     // const isFollower = await follow(follower, selectedProfile.address)
//     // await isFollower.wait()
//     // setShowProfile(true)
//   }

//   const visitSite = (site) => {
//     const link = site.value
//     if (link) {
//       window.open(link, '_blank')
//     } else {
//       window.open(site, '_blank')
//     }
//   }

//   const [value, setValue] = React.useState(0)

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

//   return (
//     <StylesProvider injectFirst>
//       <Container
//         className="page-community"
//         style={{ minHeight: '70vh', paddingBottom: '1rem' }}
//       >
//         <div>
//           {selectedProfile ? (
//             <Box sx={{ width: '100%' }}>
//               <br />
//               <br />
//               <br />
//               <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                 <p className="title-fundraiser"> {selectedProfile.title}</p>
//                 <br />
//                 <br />
//                 <br />
//                 <Grid item xs={8}>
//                   <img
//                     src={selectedProfile.image}
//                     alt="community"
//                     className="foundraiser-img"
//                   />
//                   <br />
//                   <br />

//                   <div className="outer">
//                     <img
//                       src={profileIcon}
//                       alt="profileIcon"
//                       className="profile-icon"
//                     />
//                     <p>
//                       <strong>
//                         {`${selectedProfile.organizer.substring(32)}...`}{' '}
//                       </strong>
//                       is organizing this fundraiser
//                     </p>
//                   </div>

//                   <br />
//                   <hr style={{ border: '1px solid #c8c8c8' }} />
//                   <br />
//                   <p className="description">{selectedProfile.description}</p>
//                   <br />
//                   <br />
//                   <br />
//                   <hr style={{ border: '1px solid #c8c8c8' }} />
//                   <br />
//                   <br />

//                   <p className="title-fundraiser"> Updates</p>
//                   <Updates dataUpdates={dataUpdates} />
//                 </Grid>

//                 <Grid p xs={4} className="grid-rigth-side">
//                   <Card
//                     style={{
//                       width: '300px',
//                       padding: '1.5rem',
//                       float: 'right',
//                     }}
//                   >
//                     <div className="page-wallet-address">
//                       <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>
//                         $2,035,400{' '}
//                         <span
//                           style={{ fontSize: '.9rem', color: 'rgb(90 87 87)' }}
//                         >
//                           raised of $2,250,000 goal
//                         </span>
//                       </p>
//                       <br />
//                       <LinearProgress variant="determinate" value={50} />

//                       <p style={{ fontSize: '.9rem', color: 'rgb(90 87 87)' }}>
//                         30.3K donations
//                       </p>
//                       <br />

//                       <br />

//                       <Button
//                         style={{
//                           width: '100%',
//                           background:
//                             'linear-gradient(180deg,#ffde9e 50%,#fcb957)',
//                           color: 'black',
//                         }}
//                       >
//                         Donate Now
//                       </Button>
//                       <br />
//                       <br />
//                       <Button
//                         style={{
//                           width: '100%',
//                           background:
//                             'linear-gradient(180deg,#fdb933 35.42%,#f58131 139.58%)',
//                           color: 'black',
//                         }}
//                       >
//                         Donate NFTs
//                       </Button>
//                       <br />
//                       <br />

//                       <img
//                         src={donation}
//                         alt="profileIcon"
//                         className="donation-img"
//                       />
//                     </div>
//                   </Card>
//                 </Grid>
//               </Grid>
//             </Box>
//           ) : (
//             <Button variant="contained" color="primary" component={Link} to="/">
//               Refresh
//             </Button>
//           )}
//         </div>

//         <br />
//         <br />
//         <Typography className="subtitle" color="textPrimary" gutterBottom>
//           The West Side Community Garden NFTs
//         </Typography>
//       </Container>
//     </StylesProvider>
//   )
// }

// export default Updates

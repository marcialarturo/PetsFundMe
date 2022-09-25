## Inspiration


PetsFundMe is a social app built by the community for everyone who supports pets. PetsFundMe is an NFT platform where pet owners and pet lovers come together and help each other to solve their pet's needs from expensive surgeries to food supplies or free services.

PetsFundMe is the perfect pet hub for nonprofits, medical & government institutions, influencers, and artists to come together to solve the needs of underserved pets. Come to ask for financial support, as questions, answer questions, and give or receive donations. Come join us to make this planet a better world.

The inspiration came from volunteering to animal shelters, I have seem many pets in need, pet owners who need financial support to look after their pets. As pet lovers, we decided to create a platform that supports underserved pets and help them to recover.

PetsFundMe App supports underserved pets, rescue animals, and pets from low-income families. The idea is pretty simple: Pet owners list their needs we represent them as NFTs and users from all over the world can donate to a specific cause and get updates from their favorite pets. With the help of crowdfunding and additional resources, you'll be able to spend less time worrying about pet surgery costs and more time focusing on your pet's health.

## What it does

- Allows users to create fundraisers
- Allows users to provide updates about their pets’ status, health, and recovering process
- Allows users to follow their favorite pets and received personalized content
- Allows users to donate erc20 tokens
- Allows users to donate NFTs
- Allows users to browse fundraisers and filter them
- It gives users a more accurate picture of the impact we can do it together
- Users can send or receive tips for their cause
- Users can send or receive tips
- Fundraises are represented as NFTs
- Easily collect accurate information that is available to the public using blockchain technology

## How we built it

PetsFundMe application makes use of the following software:
- `Mumbai Polygon Network` enables our application to be a scalable platform with fast transactions. We deployed our app on the Mumbai Network. Contract Address: `0x1aae17D2C4B5ea1b6cf4eeFC0D2f54bc5cD464cf`

- `Skale Network` enables our application to be a scalable platform with almost gasless transactions. We deployed to the Skale Testnet. Contract Address: `0x15036E33e8E8f706fd77A1aC550d28FD58432c1B`

- `World Coin` makes sure users create only one fundraising event per person.

- `Xmtp` allows donators to chat with organizers

- `Covalent API` was beneficial for users' transactions and tips. This facilitated the retrieval of users’ NFTs and smart contract transactions. The Covalent API endpoints to get all NFTs balance and metadata from a wallet address such as images, contracts name, NFTs images, and balances.

- `SuperFluid` enables stream payment for donations and rewards for our application

- `Valist` facilitated the process of our software publishing and distribution in a secure way. We are hosting our application code in Valist.
https://app.valist.io/main-account/pets-found-me


- `Unstoppable Domains Sponsored Bounty` facilitated the process of authentication and verification of our users in a secure way. Unstoppable allows owners of Unstoppable Domains to log in and share profile information with EVM-compatible applications using the universal Web3 Logins.
https://pets-found-me.netlify.app/


- `TableLand` made our work easy with the Ethereum network. This allows us to work with a relational database to store Employment references and metadata for EVM chains like Ethereum. We will definitely keep using complex TableLand functions in the future.

* `IPFS NFTStorage` for data storage on IPFS that generates a transaction hash used to create an NFT of a photo.

* `NFTPort` smooths the path of the minting and donating process and eliminates the high transaction fees. Our users will not pay anything for donating NFTs or minting.
* `Solidity` for the smart contract.
* `OpenZeppelin ERC721` we use the ERC721 template for faster development of our smart contract.
* `Hardhat` for local blockchain development.
* `React Js, Material-ui, Web3` React Js for the frontend, Material-ui, and Web3 to connect to the blockchain.

## Challenges we ran into

The contract functionality and donations took us longer.

## Accomplishments that we're proud of

We are proud of the final MVP and how our project went from an idea to a demo

## What we learned

We learned to work with IPFS NFTStorage and hardhat

## What's next

Post updates Upon registration, add a point system for users.

# deployed Address

- deployedSkaleContract ='0x15036E33e8E8f706fd77A1aC550d28FD58432c1B'
- deployedSkaleContract ='0x1aae17D2C4B5ea1b6cf4eeFC0D2f54bc5cD464cf'

===============
Adding worldcoin broke my app

DEMO
- For the demo use 0x11760DB13aE3Aa5Bca17fC7D62172be2A2Ea9C11
- superFluid dashboard
https://app.superfluid.finance/stream/polygon-mumbai/0x11760db13ae3aa5bca17fc7d62172be2a2ea9c11-0x7214859dd1750d31eda889ba44d432f9805ff3f7-0x5d8b4c2554aeb7e86f387b4d6c00ac33499ed01f-0.0

- Valist https://app.valist.io/main-account/pets-found-me

